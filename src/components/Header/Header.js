import { useRef, useLayoutEffect } from "react";
import { GridContainer, GridNormal } from "../Layout.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as HeaderBackground } from "./header-none.svg";
import { ReactComponent as HeaderColor } from "./header-color.svg";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Header = () => {
  const introRef = useRef(null);
  const headerRef = useRef(null);
  const backgroundRef = useRef();
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: introRef.current,
      start: "0px end",
      end: "+=40%",
      scrub: true,
      markers: false,
      id: "intro",
    },
  });
  const tl = useRef(timeline);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        .from(
          "#title",
          {
            text: {
              value:
                "A Study on Yangban Bureaucracy of the Kingdom of Chosŏn Dynasty in Historical Dynamics regarding the Career Success",
              delimiter: " ",
            },
            transform: "translateY(-40vh)",
            ease: "none",
          },
          "title"
        )
        .from("#header-background", { opacity: 0 }, "title-=50%")
        .from(".mountain", { fill: "transparent" }, "mountain")
        .from(".sky", { fill: "transparent" }, "img3")
        .from(".leaves", { fill: "transparent" }, "img3")
        .from(".tree", { fill: "transparent" }, "img3")
        .from(".ground", { fill: "transparent" }, "img3")
        .from(
          ".sun",
          {
            fill: "transparent",
          },
          "sun"
        )
        .from(
          ".moon",
          {
            fill: "transparent",
          },
          "moon"
        )
        .from(
          ".sea",
          {
            fill: "transparent",
          },
          "sea"
        )
        .from("#affiliation, #author", {
          transform: "translateY(-20vh)",
          autoAlpha: 0,
        });
    }, headerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="header"
      ref={headerRef}
      style={{ textAlign: "center", minHeight: "150vh" }}
    >
      <HeaderColor
        ref={backgroundRef}
        id="header-background"
        style={{
          width: "50vw",
          margin: "0 auto",
          position: "relative",
          top: "50vh",
        }}
      />

      <h1
        id="title"
        style={{
          width: "50vw",
          margin: "0 auto",
          position: "relative",
          top: "10vh",
          fontSize: "1.8em",
          // transform: `translateY(${100}%)`,
        }}
      >
        <span style={{ backgroundColor: "#ebe4f5" }}>
          A Digital History Approach to the History of Joseon: Analyzing Changes
          in Socio-political Regimes of the Yangban
        </span>
      </h1>
      <h2
        id="author"
        style={{
          margin: "0 auto",
          autoAlpha: 1,
          position: "relative",
          top: "20vh",
        }}
      >
        <span
          style={{
            backgroundColor: "#ebe4f5",
          }}
        >
          Donghyeok Choi
        </span>
      </h2>
      <h3
        id="affiliation"
        style={{
          margin: "0 auto",
          autoAlpha: 1,
          position: "relative",
          top: "20vh",
        }}
      >
        <span
          style={{
            backgroundColor: "#ebe4f5",
          }}
        >
          <i>Phd Dissertation, 2023</i>
        </span>
      </h3>
    </div>
  );
};
export default Header;
