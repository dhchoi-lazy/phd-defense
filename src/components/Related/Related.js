import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import S1 from "./related1.png";
import S2 from "./related2.png";
import S3 from "./related3.png";
import S4 from "./related4.png";
import S5 from "./related5.png";
import S6 from "./related6.png";
import S7 from "./related7.png";
import S8 from "./related8.png";
import S9 from "./related9.png";
import S10 from "./related10.png";
import S11 from "./related11.png";
import S12 from "./related12.png";

const images = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12];

export default function Related() {
  const deck3Ref = useRef(null);

  useEffect(() => {
    if (deck3Ref.current) {
      const deck3 = new Reveal(deck3Ref.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        keyboardCondition: "focused",
      });
      deck3.initialize();
    }
  }, []);

  return (
    <section id="related">
      <h1 className="text-4xl">2. Related Work</h1>
      <div className="reveal deck3" ref={deck3Ref}>
        <div className="slides">
          {images.map((image, index) => (
            <section key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </section>
          ))}
          <section>
            <div className="border-solid border-2 border-red-500 inline-block">
              <h1 className="text-6xl">
                To understand the history, see who succeeded in that society.
              </h1>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
