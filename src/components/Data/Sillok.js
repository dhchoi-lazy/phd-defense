import * as d3 from "d3";
import sillok from "./sillok.csv";
import { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";

function RadialByKing({ king }) {
  const ref = useRef();
  useEffect(() => {
    const svg = d3.select(ref.current);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    d3.csv(sillok).then((data) => {
      data = data.filter((d) => d.king === king);
      data = data.sort((a, b) => (a.date > b.date ? 1 : -1));
      const width = 400;
      const height = width;
      const innerRadius = width / 5;
      const outerRadius = width / 2;

      svg
        .append("text")
        .attr("class", "title")
        .attr("x", 0)
        .attr("y", 5)
        .attr("text-anchor", "middle")
        .text(kings_eng[kings.indexOf(king)]);

      let x = d3
        .scaleUtc()
        .domain([Date.UTC(2000, 0, 1), Date.UTC(2001, 0, 1) - 1])
        .range([0, 2 * Math.PI]);

      let y = d3
        .scaleLinear()
        // .domain([d3.min(data, (d) => d.min), d3.max(data, (d) => d.max)])
        .domain([0, 10])
        .range([innerRadius, outerRadius]);

      // define line and area
      let line = d3
        .lineRadial()
        .curve(d3.curveLinearClosed)
        .angle((d) =>
          x(new Date(Date.UTC(2000, parseInt(d.m, 10), parseInt(d.d, 10))))
        );

      let area = d3
        .areaRadial()
        .curve(d3.curveLinearClosed)
        .angle((d) =>
          x(new Date(Date.UTC(2000, parseInt(d.m, 10), parseInt(d.d, 10))))
        );

      // define axes
      let xAxis = (g) =>
        g
          .attr("font-family", "sans-serif")
          .attr("font-size", 20)

          .call((g) =>
            g
              .selectAll("g")
              .data(x.ticks())
              .join("g")
              .each((d, i) => {
                d.id = months.map((m, i) => {
                  return { id: i, href: m };
                })[i];
              })
              .call((g) =>
                g
                  .append("path")
                  .attr("stroke", "#000")
                  .attr("stroke-opacity", 0.2)
                  .attr(
                    "d",
                    (d) => `
                M${d3.pointRadial(x(d), innerRadius)}
                L${d3.pointRadial(x(d), outerRadius)}
              `
                  )
              )
              .call((g) =>
                g
                  .append("path")
                  .attr("id", (d) => d.id.id)
                  .datum((d) => [d, d3.utcMonth.offset(d, 1)])
                  .attr("fill", "none")
                  .attr(
                    "d",
                    ([a, b]) => `
                M${d3.pointRadial(x(a), innerRadius)}
                A${innerRadius},${innerRadius} 0,0,1 ${d3.pointRadial(
                      x(b),
                      innerRadius
                    )}
              `
                  )
              )
              .call((g) =>
                g
                  .append("text")
                  .append("textPath")
                  .attr("startOffset", 6)
                  .attr("xlink:href", (d) => "#" + d.id.id)
                  .text(d3.utcFormat("%b"))
              )
          );

      let yAxis = (g) =>
        g
          .attr("text-anchor", "middle")

          .attr("font-family", "sans-serif")
          .attr("font-size", 12)
          .attr("opacity", 0)
          .call((g) =>
            g
              .selectAll("g")
              .data(y.ticks().reverse())

              .join("g")
              .attr("class", "kingText")
              .attr("fill", "none")
              .call((g) =>
                g
                  .append("circle")
                  .attr("class", "kingCircle")
                  .attr("stroke", "#000")
                  .attr("stroke-opacity", 0)
                  .attr("r", y)
              )
              .call(
                (g) =>
                  g
                    .append("text")
                    .attr("y", (d) => -y(d))
                    .attr("dy", "0.35em")
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 2)
                    .text((x, i) => `${x.toFixed(0)}${i ? "" : ""}`)
                    .clone(true)
                    .attr("y", (d) => y(d))
                    .selectAll(function () {
                      return [this, this.previousSibling];
                    })
                    .clone(true)
                    .attr("fill", "currentColor")
                // .attr("stroke", "none")
              )
          );
      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [
          (-width / 2) * 1.1,
          (-height / 2) * 1.1,
          width * 1.1,
          height * 1.1,
        ])
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round");

      svg
        .append("path")
        .attr("fill", "#ff8969")
        .attr("fill-opacity", 0)
        .attr(
          "d",
          area.innerRadius((d) => y(d.minmin)).outerRadius((d) => y(d.maxmax))(
            data
          )
        )
        .attr("class", "kingTotal");

      svg
        .append("path")
        .attr("fill", "#ff542a")
        .attr("fill-opacity", 0.2)
        .attr(
          "d",
          area.innerRadius((d) => y(d.min)).outerRadius((d) => y(d.max))(data)
        )
        .on("mouseover", (event) => {
          d3.select(event.currentTarget).style("fill-opacity", 0.5);
        })
        .on("mouseout", (event) => {
          d3.select(event.currentTarget).style("fill-opacity", 0.2);
        });

      svg.selectAll("circle").on("mouseover", (event) => {
        d3.select(event.currentTarget).style("stroke", "red");
      });
      svg
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#bf3415")
        .attr("stroke-width", 1.5)
        .attr("d", line.radius((d) => y(d.avg))(data));
      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
      svg.attr("overflow", "visible");
    });
  }, [king]);
  function onBackground(e) {
    const kingCircle = d3.selectAll(
      e.currentTarget.querySelectorAll(".kingCircle")
    );
    kingCircle.style("stroke-opacity", 0.5);

    const kingText = d3.selectAll(
      e.currentTarget.querySelectorAll(".kingText")
    );
    kingText.style("opacity", 1);
    d3.selectAll(e.currentTarget.querySelector(".kingTotal")).style(
      "fill-opacity",
      1
    );
  }
  function offBackground(e) {
    const kingCircle = d3.selectAll(
      e.currentTarget.querySelectorAll(".kingCircle")
    );
    kingCircle.style("stroke-opacity", 0);
    const kingText = d3.selectAll(
      e.currentTarget.querySelectorAll(".kingText")
    );
    kingText.style("opacity", 0);
    d3.selectAll(e.currentTarget.querySelector(".kingTotal")).style(
      "fill-opacity",
      1
    );
  }
  return (
    <svg
      id={king}
      onMouseOver={onBackground}
      onMouseLeave={offBackground}
      ref={ref}
    />
  );
}

const kings = [
  "태조",
  "정종",
  "태종",
  "세종",
  "문종",
  "단종",
  "세조",
  "예종",
  "성종",
  "연산",
  "중종",
  "인종",
  "명종",
  "선조",
  "광해",
  "인조",
  "효종",
  "현종",
  "숙종",
  "경종",
  "영조",
  "정조",
  "순조",
  "헌종",
  "철종",
  "고종",
];
const kings_eng = [
  "Taejo",
  "Jeongjong",
  "Taejong",
  "Sejong",
  "Munjong",
  "Danjong",
  "Sejo",
  "Yejong",
  "Sungjong",
  "Yonsan",
  "Jungjong",
  "Injong",
  "Myeongjong",
  "Seonjo",
  "Gwanghae",
  "Injo",
  "Hyojong",
  "Hyunjong",
  "Sukjong",
  "Gyeongjong",
  "Yeongjo",
  "Jeongjo",
  "Sunjo",
  "Heonjong",
  "Cheoljong",
  "Gojong",
];
function Sillok() {
  return (
    <Grid
      container
      style={{
        maxWidth: "1600px",
        textAlign: "center",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {kings.map((king) => {
        return (
          <RadialByKing
            style={{ textAlign: "center" }}
            king={king}
            key={king}
            id={king}
          />
        );
      })}
    </Grid>
  );
}

export default Sillok;
