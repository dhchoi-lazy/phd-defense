import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import AgeLine from "./AgeLine";

import { ButtonGroup, Button } from "@mui/material";

export default function Age() {
  const ref = useRef();

  const status = ["yangban", "eunuch", "king", "all"];
  const statusButtons = status.map((s, i) => (
    <Button
      key={i}
      className="statusOption"
      style={{
        fontFamily: "IM Fell English",
        color: "#362e28",
        borderRight: "#362e28",
      }}
    >
      {s}
    </Button>
  ));

  useEffect(() => {
    const svg = d3.select(ref.current);
    AgeLine(svg, status);
  }, []);

  return (
    <section id="age">
      <ButtonGroup
        style={{
          width: "100%",
          justifyContent: "center",
        }}
        id="selectButton"
        variant="text"
        aria-label="text button group"
      >
        {statusButtons}
      </ButtonGroup>

      <svg ref={ref}></svg>
    </section>
  );
}
