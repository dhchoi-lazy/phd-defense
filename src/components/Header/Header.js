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
      end: "+=60%",
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
                "Historical Dynamics of the Kingdom of Chosŏn’s Governance: Patterns of Meritocratic Bureaucracy and Consequences of Systemic Corruption",
              delimiter: " ",
            },
            transform: "translateY(-50vh)",
            ease: "none",
          },
          "title"
        )
        .from("#header-background", { opacity: 0 }, "title-=30%")
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
          // transform: "translateY(-50vh)",
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
          top: "60vh",
        }}
      />
      <h1
        id="title"
        style={{
          width: "50vw",
          margin: "0 auto",
          position: "relative",
          top: "25vh",
          fontSize: "2em",
          // transform: `translateY(${100}%)`,
        }}
      >
        <span style={{ backgroundColor: "#ebe4f5" }}>
          Unraveling the Joseon Dynasty: A Quantitative Approach to Historical
          Dynamics
        </span>
      </h1>
      <h2
        id="author"
        style={{
          margin: "0 auto",
          autoAlpha: 1,
          position: "relative",
          top: "35vh",
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
          top: "35vh",
        }}
      >
        <span
          style={{
            backgroundColor: "#ebe4f5",
          }}
        >
          <i>Graduate School of Culture Technology, KAIST</i>
        </span>
      </h3>
    </div>
  );
};
export default Header;
