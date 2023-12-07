import React, { useRef, useCallback } from "react";
import { ForceGraph3D } from "react-force-graph";
import gyeyu from "./gyeyu.json";

export default function Gyeyu() {
  const colorByGroup = {
    1: "#336699",
    2: "#FFFFFF",
    3: "#FFCC33",
    4: "#CC3333",
  };
  const degree = {};
  gyeyu.links.forEach((link) => {
    degree[link.source] = (degree[link.source] || 0) + 1;
    degree[link.target] = (degree[link.target] || 0) + 1;
  });
  const ref = useRef();

  const handleClick = useCallback(
    (node) => {
      const degree = {};
      gyeyu.links.forEach((link) => {
        degree[link.source] = (degree[link.source] || 0) + 1;
        degree[link.target] = (degree[link.target] || 0) + 1;
      });
      // Aim at node from outside it
      const distance = 400;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      ref.current.cameraPosition(
        node.x || node.y || node.z
          ? {
              x: node.x * distRatio,
              y: node.y * distRatio,
              z: node.z * distRatio,
            }
          : { x: 0, y: 0, z: distance }, // special case if node is in (0,0,0)
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [ref]
  );

  return (
    <>
      <h2>Constructing a social network and identifying key figures</h2>
      <div
        style={{
          // maxWidth: "800px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <ForceGraph3D
          ref={ref}
          width={window.innerWidth - 50}
          height={window.innerHeight - 50}
          graphData={gyeyu}
          nodeLabel="id"
          showNavInfo={false}
          nodeResolution={10}
          nodeColor={(node) => colorByGroup[node.group]}
          nodeVal={(node) => degree[node.id] || 1}
          linkWidth={(edge) => edge.value || 1}
          nodeThreeObjectExtend={true}
          onNodeClick={handleClick}
          backgroundColor="#FDF5E6"
        />
      </div>
    </>
  );
}
