import * as d3 from "d3";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ReactComponent as PsiSedogaGwageoPlot } from "./psi-sedoga-gwageo.svg";
import LoremIpsum from "react-lorem-ipsum";

export default function Psigraph() {
  const sgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    let ctx = gsap.context(() => {
      // use scoped selectors
      const sg = gsap.timeline();
      sg.fromTo(
        sgRef.current.querySelector("#base"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" }
      )
        .fromTo(
          sgRef.current.querySelector("#adkim"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          sgRef.current.querySelector("#bnpark"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          sgRef.current.querySelector("#yhmin"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          sgRef.current.querySelector("#pycho"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        );
      sg.fromTo(
        sgRef.current.querySelector("#circlea"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" },
        "circle"
      )
        .fromTo(
          sgRef.current.querySelector("#circleb"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          sgRef.current.querySelector("#circlec"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          sgRef.current.querySelector("#circled"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          sgRef.current.querySelector("#legend"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        );

      ScrollTrigger.create({
        trigger: sgRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
        markers: false,
        animation: sg,
      });
    });
    // or refs
  }, []);

  return <PsiSedogaGwageoPlot ref={sgRef} id="sedogagwageo" />;
}
