import React, { useEffect } from "react";
import S1 from "../Introduction/introduction1.png";
import "reveal.js/dist/reveal.css";
// or any other theme

const Presentation = () => {
  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <img src={S1} alt="s1" />
        </section>
        <section>
          <h2 className="text-2xl font-bold">Bureaucracy</h2>
        </section>
      </div>
    </div>
  );
};

export default Presentation;
