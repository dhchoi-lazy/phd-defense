import * as d3 from "d3";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ReactComponent as PsiSedogaPsiPlot } from "./psi-sedoga-psi.svg";
import LoremIpsum from "react-lorem-ipsum";

export default function Psigraph() {
  const spRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    let ctx = gsap.context(() => {
      // use scoped selectors
      const sp = gsap.timeline();
      sp.fromTo(
        spRef.current.querySelector("#base"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" }
      )
        .fromTo(
          spRef.current.querySelector("#adkim"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          spRef.current.querySelector("#bnpark"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          spRef.current.querySelector("#yhmin"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        )
        .fromTo(
          spRef.current.querySelector("#pycho"),
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%" },
          "sedoga"
        );
      sp.fromTo(
        spRef.current.querySelector("#circlea"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" },
        "circle"
      )
        .fromTo(
          spRef.current.querySelector("#circleb"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          spRef.current.querySelector("#circlec"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          spRef.current.querySelector("#circled"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        )
        .fromTo(
          spRef.current.querySelector("#legend"),
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power1.inOut" },
          "circle"
        );

      ScrollTrigger.create({
        trigger: spRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
        markers: false,
        animation: sp,
      });
    });
  }, []);

  return <PsiSedogaPsiPlot ref={spRef} id="sedogapsi" />;
}
