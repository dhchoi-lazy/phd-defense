import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bureaucracy from "./Bureaucracy.js";
import Gwageo from "./Gwageo.js";

export default function Joseon() {
  const slideRef = useRef();
  const slideStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const sStyle = {
    // maxWidth: "10vw",
    maxHeight: "100vh",
    // width: "500",
  };
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let slides = gsap.utils.toArray(".slide");

      let GSAPHorizontalScrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: slideRef.current,
          pin: true,
          start: "0% 0%",
          end:
            "+=" +
            (document.querySelector("#PageWrap").scrollWidth -
              window.innerWidth),
          scrub: 0,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: { min: 0.22, max: 0.31 },
            delay: 0,
            ease: "sine.inOut",
          },
          markers: false,
        },
      });
      GSAPHorizontalScrollTL.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
      });
    }, slideRef.current);
  }, []);

  return (
    <div
      ref={slideRef}
      id="PageWrap"
      style={{
        height: "100vh",
        width: "200vw",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <section className="slide" style={slideStyle}>
        <Gwageo />
        {/* <img style={sStyle} src={Slide1} alt="korea" /> */}
        {/* <h1>t</h1> */}
      </section>
      <section className="slide" style={slideStyle}>
        <Bureaucracy />
        {/* <img style={sStyle} src={Slide2} alt="korea" /> */}
      </section>
      {/* <section className="slide" style={slideStyle}>
        {/* <img style={sStyle} src={Slide3} alt="korea" /> */}
      {/* </section>  */}
    </div>
  );
}
