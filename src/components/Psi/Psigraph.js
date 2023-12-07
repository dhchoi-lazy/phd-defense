import * as d3 from "d3";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ReactComponent as PsiGiniPlot } from "./psi-gini.svg";
import { ReactComponent as PsiSedogaGwageoPlot } from "./psi-sedoga-gwageo.svg";
import { ReactComponent as PsiSedogaPsiPlot } from "./psi-sedoga-psi.svg";
import LoremIpsum from "react-lorem-ipsum";

export default function Psigraph() {
  const giniRef = useRef();
  const sgRef = useRef();
  const spRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    let ctx = gsap.context(() => {
      // use scoped selectors
      const gini = gsap.timeline();
      gini.fromTo(
        giniRef.current.querySelector("#ginibase"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" }
      );
      gini.fromTo(
        giniRef.current.querySelector("#giniline"),
        { drawSVG: "0%" },
        { duration: 1, drawSVG: "100%" }
      );
      gini.fromTo(
        giniRef.current.querySelector("#ginierror"),
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power1.inOut" }
      );

      ScrollTrigger.create({
        trigger: "#gini",
        start: "top center",
        end: "center center",
        scrub: true,
        markers: false,
        animation: gini,
      });

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

      const sp = gsap.timeline();
      ScrollTrigger.create({
        trigger: "#psipsi",
        start: "top center",
        end: "center center",
        scrub: true,
        markers: false,
        animation: sp,
      });
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
    });

    // or refs
  }, []);

  return (
    <div>
      <h1>Psi concept</h1>
      <PsiGiniPlot ref={giniRef} id="gini" />
      <PsiSedogaGwageoPlot ref={sgRef} id="psigwageo" />
      <PsiSedogaPsiPlot ref={spRef} id="psipsi" />
      <LoremIpsum p={2}></LoremIpsum>
    </div>
  );
}
