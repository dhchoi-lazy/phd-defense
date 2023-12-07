import { useRef, useEffect } from "react";
import * as d3 from "d3";
import bangmok from "./bangmok.json";

export default function Bangmok() {
  const ref = useRef();
  useEffect(() => {
    const data = bangmok;
    const div = d3.select(ref.current);
    div
      .style("display", "flex")
      .attr("width", window.innerWidth)
      .style("flex-direction", "column")
      .style("justify-content", "center")
      .style("align-items", "center");

    // svg
    //   .append("svg")
    //   .attr("width", window.innerWidth)
    //   .attr("height", window.innerHeight);
    // .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);

    // chart: 마진 제외한 부분

    const chartWidth = window.innerWidth;
    const chartHeight = window.innerHeight / 5;

    let groupedData = data.reduce((grouped, item) => {
      let century =
        item.year <= 1400 ? 1400 : Math.floor(item.year / 100) * 100;
      if (!grouped[century]) {
        grouped[century] = [];
      }
      grouped[century].push(item);
      return grouped;
    }, {});
    let nestedArray = Object.entries(groupedData).map(([century, items]) => {
      return { century: parseInt(century), data: items };
    });

    nestedArray.forEach((data, i) => {
      const smallData = data["data"];
      const margin = { top: 50, right: 30, bottom: 30, left: 30 };

      const MarginLeft = 100;
      const MarginRight = 100;
      const MarginTop = 30;
      const MarginBottom = 30;
      const svg = div
        .append("svg")
        .attr("class", "century")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("viewBox", [
          -MarginLeft,
          MarginTop,
          window.innerWidth + MarginLeft + MarginRight,
          chartHeight + MarginTop + MarginBottom,
        ]);
      // console.log(chartWidth, chartHeight * i);

      const x = d3
        .scaleLinear()
        .domain(d3.extent(smallData, (d) => d.year))
        .range([0, chartWidth]);
      // .padding(1);
      const xAxis = svg
        .append("g")
        // .attr("viewBox", [0, 0, chartWidth, chartHeight])
        .call(d3.axisBottom(x).ticks(25))
        .attr("transform", `translate(${0}, ${chartHeight + MarginTop})`);

      const y = d3
        .scaleLinear()
        // .domain(d3.extent(smallData, (d) => d.count))
        .domain([0, 135])
        .range([chartHeight, 0]);
      // .padding(1);

      // //  xAxis;

      const yAxis = svg
        .append("g")
        .call(d3.axisLeft(y))
        .attr("transform", `translate(${0}, ${MarginTop})`);

      // // yAxis
      // g.call(d3.axisLeft(y).tickSize(1));

      // //  xAxis;
      // g.attr("transform", `translate(${boxWidth * i}, ${0})`).call(
      //   d3.axisBottom(x).ticks(2)
      // );

      // // yAxis
      // g.attr(
      //   "transform",
      //   `translate(${
      //     i * (chartWidth + chartMargin.left) + chartMargin.left
      //   }, 0)`
      // ).call(d3.axisLeft(y).tickSize(1));

      svg
        .selectAll("bangmokline")
        .append("g")
        .data(smallData)
        .join("rect")
        .attr("x", (d) => x(d.year))
        .attr("y", (d) => y(d.count))
        .attr("width", 12)
        .attr("height", (d) => chartHeight - y(d.count))
        // .attr("y1", (d) => y(d.count))
        // .attr("y2", y(0))
        // .attr("x1", (d) => x(d.year))
        // .attr("x2", (d) => x(d.year))
        .attr("fill", "#15a0bf")
        .attr("stroke-width", 1)
        .attr("transform", `translate(${0}, ${MarginTop})`);

      // svg
      //   .selectAll("bangmokcircle")
      //   .append("g")
      //   .data(smallData)
      //   .join("circle")
      //   .attr("stroke", "black")
      //   .attr("cx", (d) => x(d.year))
      //   .attr("cy", (d) => y(d.count))
      //   .attr("r", (d) => d.freq * 2)
      //   .attr("fill", "#69b3a2");
    });
    // svg.selectAll(".century").style("margin", "100 auto");
  }, []);
  return <div ref={ref} />;
}
