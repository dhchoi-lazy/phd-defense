import * as d3 from "d3";
import YangbanAge from "./yangban_age.json";
import Lifespan from "./lifespan.json";

export default function AgeLine(svg, status) {
  const width = 400;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  svg.attr("viewBox", [
    -margin.left,
    -margin.top,
    width + margin.left + margin.right,
    height + margin.top + margin.bottom,
  ]);

  let selectedStatus = "yangban";
  const x = d3
    .scaleLinear()
    .domain([0, 100])
    .range([margin.left, width - margin.right]);
  const xAxis = svg
    .append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(x));
  const y = d3
    .scaleLinear()
    .domain([0, 1])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const yAxis = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y));

  let kde = kernelDensityEstimator(kernelEpanechnikov(3), x.ticks(140));
  function kernelDensityEstimator(kernel, X) {
    return function (V) {
      return X.map(function (x) {
        return [
          x,
          d3.mean(V, function (v) {
            return kernel(x - v) * 10;
          }),
        ];
      });
    };
  }
  function kernelEpanechnikov(k) {
    return function (v) {
      return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
    };
  }

  let initial_density = kde(
    Lifespan.filter((d) => d.status === "yangban").map(function (d) {
      return +d["lifespan"];
    })
  );

  const curve = svg
    .append("g")
    .append("path")
    .attr("class", "mypath")
    .datum(initial_density)
    .attr("opacity", ".8")
    .attr("stroke", "#000")
    .attr("stroke-width", 1)
    .attr("stroke-linejoin", "round")
    .attr(
      "d",
      d3
        .area()
        .curve(d3.curveBasis)
        .x(function (d) {
          return x(d[0]);
        })
        .y0(y(0))
        .y1(function (d) {
          return y(d[1]);
        })
    )
    .attr("fill", "#b4c5d9");

  function updateChart(selectedStatus) {
    let density;
    if (selectedStatus === "all") {
      const allColors = ["#b4c5d9", "#c5d9b4", "#d9b5b4"];
      for (let i = 0; i < status.length; i++) {
        let s = status[i];
        let density;
        if (s === "all") {
          continue;
        } else {
          density = kde(
            Lifespan.filter((d) => d.status === s).map((d) => d.lifespan)
          );
          const lifespan_mean = d3.mean(Lifespan.map((d) => +d["lifespan"]));
          const curve = svg
            .append("g")
            .append("path")
            .attr("class", "allpath")
            .datum(density)
            .attr("autoalpha", ".8")
            .attr("opacity", ".8")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("stroke-linejoin", "round")
            .attr(
              "d",
              d3
                .area()
                .curve(d3.curveBasis)
                .x(function (d) {
                  return x(d[0]);
                })
                .y0(y(0))
                .y1(function (d) {
                  return y(d[1]);
                })
            )
            .attr("fill", allColors[i]);
          svg
            .append("line")
            .attr("class", "avgline")
            .attr("x1", x(lifespan_mean))
            .attr("y1", y(0))
            .attr("x2", x(lifespan_mean))
            .attr("y2", y(1))
            .transition()
            .duration(2000)
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5") // Dashed line
            .attr("stroke", "black");
          svg
            .append("text")
            .attr("class", "meanText")
            .attr("x", x(lifespan_mean))
            .transition()
            .duration(2000)
            .attr("y", y(1)) // place it slightly above the line
            .attr("text-anchor", "middle")
            .text("Average: " + lifespan_mean.toFixed(2))
            .attr("font-size", "12px")
            .attr("fill", "black");
        }
      }
    } else {
      // Add the average line

      d3.selectAll(".allpath").remove();
      density = kde(
        Lifespan.filter((d) => d.status === selectedStatus).map(
          (d) => +d["lifespan"]
        )
      );
      const lifespan_mean = d3.mean(
        Lifespan.filter((d) => d.status === selectedStatus).map(
          (d) => +d["lifespan"]
        )
      );

      // update the chart
      curve
        .datum(density)
        .transition()
        .duration(2000)
        .attr(
          "d",
          d3
            .area()
            .curve(d3.curveBasis)
            .x(function (d) {
              return x(d[0]);
            })
            .y0(y(0))
            .y1(function (d) {
              return y(d[1]);
            })
        )
        .attr("fill", () => {
          if (selectedStatus === "yangban") {
            return "#b4c5d9";
          } else if (selectedStatus === "eunuch") {
            return "#c5d9b4";
          } else {
            return "#d9b5b4";
          }
        });
      svg
        .append("line")
        .attr("class", "avgline")
        .attr("x1", x(lifespan_mean))
        .attr("y1", y(0))
        .attr("x2", x(lifespan_mean))
        .attr("y2", y(1))
        .transition()
        .duration(2000)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5") // Dashed line
        .attr("stroke", "black");
      svg
        .append("text")
        .attr("class", "meanText")
        .attr("x", x(lifespan_mean))
        .transition()
        .duration(2000)
        .attr("y", y(1)) // place it slightly above the line
        .attr("text-anchor", "middle")
        .text("Average: " + lifespan_mean.toFixed(2))
        .attr("font-size", "12px")
        .attr("fill", "black");
    }
  }

  d3.selectAll(".statusOption").on("mouseover", function (e) {
    selectedStatus = e.currentTarget.textContent;
    d3.selectAll(".avgline").remove();
    d3.selectAll(".meanText").remove();

    updateChart(selectedStatus);
  });
}
