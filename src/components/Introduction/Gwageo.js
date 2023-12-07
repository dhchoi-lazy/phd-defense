import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap/all";
import * as d3 from "d3";
import gwageo from "./gwageo.json";
import { sankey, sankeyLinkHorizontal, sankeyCenter } from "d3-sankey";

export default function Gwageo() {
  const ref = useRef();
  useLayoutEffect(() => {
    const data = gwageo;
    const svg = d3.select(ref.current);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const format = d3.format(",.0f");
    const linkColor = "source";
    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, -10, width, height + 100])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    // Constructs and configures a Sankey generator.
    const sankeyGenerator = sankey()
      .nodeId((d) => d.node)
      .nodeAlign(sankeyCenter)
      // .nodeSort((a, b) => d3.ascending(a.value, b.value))
      .nodeWidth(25)
      .nodePadding(20)

      .extent([
        [1, 5],
        [width - 1, height - 5],
      ]);
    // Applies it to the data. We make a copy of the nodes and links objects
    // so as to avoid mutating the original.
    const { nodes, links } = sankeyGenerator({
      nodes: data.nodes.map((d) => Object.assign({}, d)),
      links: data.links.map((d) => Object.assign({}, d)),
    });

    // Defines a color scale.
    const ncolors = ["#bfa86a", "#986abf"];
    // const colors = [
    //   "#bf3415",
    //   "#bfa86a",
    //   "#a8bf6a",
    //   "#79bf6a",
    //   "#6abf89",
    //   "#6abfb7",
    //   "#6a98bf",
    //   "#6a6abf",
    //   "#986abf",
    //   "#bf6ab7",
    // ];
    const colors = [
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#e7effd",
      "#c3d6f7",
      "#9bbcf0",
      "#6fa2e9",
      "#428be3",
      "#0075de",
      "#006cd3",
      "#0045a6",
    ];

    const color = d3.scaleOrdinal(colors);

    // Creates the rects that represent the nodes.
    const rect = svg
      .append("g")
      .attr("stroke", "#000")
      .selectAll()
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0)
      .attr("y", (d) => (d.parent ? d.parent.y0 : d.y0))
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("fill", (d) => color(d.name));

    // Adds a title on the nodes.
    rect.append("title").text((d) => `${d.name}\n${format(d.value)}`);

    // Creates the paths that represent the links.
    const link = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
      .selectAll()
      .data(links)
      .join("g")
      .style("mix-blend-mode", "multiply");

    // Creates a gradient, if necessary, for the source-target color option.
    if (linkColor === "source-target") {
      const gradient = link
        .append("linearGradient")
        .attr("id", (d) => d.index)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", (d) => d.source)
        .attr("x2", (d) => d.target);
      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", (d) => color(d.source));
      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", (d) => color(d.target));
    }

    link
      .append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr(
        "stroke",
        linkColor === "source-target"
          ? (d) => d.uid
          : linkColor === "source"
          ? (d) => color(d.source)
          : linkColor === "target"
          ? (d) => color(d.target)
          : linkColor
      )
      .attr("stroke-width", (d) => Math.max(1, d.width));

    gsap.to("#gwageo path", {
      stroke: "#fdf5e7", // In the style attribute
      duration: 3,
      repeat: -1,
      yoyo: true,
    });

    link
      .append("title")
      .text((d) => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

    // Adds labels on the nodes.
    svg
      .append("g")
      .selectAll()
      .data(nodes)
      .join("text")
      .style("font", "30px sans-serif")
      .attr("x", (d) => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => (d.x0 < width / 2 ? "start" : "end"))
      .text((d) => d.name);
    svg
      .append("g")
      .selectAll()
      .data(nodes)
      .join("text")
      .style("font", "15px sans-serif")
      .attr("x", (d) => (d.x0 < width / 2 ? d.x1 : d.x0))
      .attr("y", (d) => d.y0 - 8)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text((d) => d.value);
  }, []);

  return <svg id="gwageo" ref={ref} />;
}
