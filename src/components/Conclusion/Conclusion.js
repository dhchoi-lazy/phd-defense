import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import S1 from "./conclusion1.png";
import S2 from "./conclusion2.png";
import S3 from "./conclusion3.png";
import S4 from "./conclusion4.png";
import S5 from "./conclusion5.png";

const images = [S1, S2, S3, S4, S5];

export default function Conclusion() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        keyboardCondition: "focused",
      });
      deck.initialize();
    }
  }, []);
  return (
    <section id="conclusion">
      <h1 className="text-4xl">6. Concluding Remarks</h1>
      <div className="reveal deck" ref={deckRef}>
        <div className="slides">
          {images.map((image, index) => (
            <section key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
