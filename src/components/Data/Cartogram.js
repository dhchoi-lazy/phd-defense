import gsap from "gsap";
import { useRef, useLayoutEffect, useEffect } from "react";
import Cartogram15 from "./15a.svg";
import Choropleth15 from "./15b.svg";
import Cartogram16 from "./16a.svg";
import Choropleth16 from "./16b.svg";
import Cartogram17 from "./17a.svg";
import Choropleth17 from "./17b.svg";
import Cartogram18 from "./18a.svg";
import Choropleth18 from "./18b.svg";
import Cartogram19 from "./19a.svg";
import Choropleth19 from "./19b.svg";
import { LoremIpsum } from "react-lorem-ipsum";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import styled from "styled-components";
import "./Cartogram.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Cartogram() {
  const cartogramRef = useRef();
  const wrapperRef = useRef();
  const cartogramStyle = {
    width: 400,
  };
  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
    });

    var points = gsap.utils.toArray(".point");
    var indicators = gsap.utils.toArray(".indicator");

    var height = 100 * points.length;

    gsap.set(".indicators", { display: "flex" });

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: "#cartogramWrapper",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points",
      },
    });

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: "#cartogramWrapper",
        start: "top top",
        end: "+=" + height + "%",
        scrub: true,
        pin: "#cartogramWrapper",
        pinSpacing: true,
        id: "pinning",
        markers: false,
      },
    });

    points.forEach(function (elem, i) {
      gsap.set(elem, { position: "absolute", top: 0 });

      tl.to(indicators[i], { backgroundColor: "#BF3415", duration: 0.25 }, i);
      tl.from(elem.querySelectorAll("img"), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector("article"),
        { autoAlpha: 0, translateY: 100 },
        i
      );

      tl.addLabel("position-" + i); // Adding a label here, with the index as unique identifier

      if (i != points.length - 1) {
        tl.to(
          indicators[i],
          { backgroundColor: "#adadad", duration: 0.25 },
          i + 0.75
        );
        tl.to(
          elem.querySelector("article"),
          { autoAlpha: 0, translateY: -100 },
          i + 0.75
        );
        tl.to(elem.querySelectorAll("img"), { autoAlpha: 0 }, i + 0.75);
      }
    });

    // Looping over all the indicators...
    indicators.forEach(function (indicator, i) {
      // ...forEach of them adding a click-event listener...
      indicator.addEventListener("click", function () {
        // ...leveraging the ScrollToPlugin and ...
        // ...ScrollTrigger's  labelToScroll() method
        gsap.to(window, {
          duration: 1,
          scrollTo: tl.scrollTrigger.labelToScroll(`position-${i}`),
        });
      });
    });
  }, []);

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <div ref={cartogramRef}>
      <section className="vh"></section>

      <section className="philosophie">
        <div id="cartogramWrapper">
          <div className="indicators">
            <div className="indicator">15th</div>
            <div className="indicator">16th</div>
            <div className="indicator">17th</div>
            <div className="indicator">18th</div>
            <div className="indicator">19th</div>
          </div>
          <div className="point">
            <article>
              <h3>Formation of Seoul</h3>
              <p>
                During the early days of the Joseon Dynasty, it is difficult for
                most regions to produce successful candidates. Entering the 15th
                century, there was a notable increase in the number of Gwageo
                examination candidates, especially from the Honam and Yeongnam
                regions.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram15} alt="cartogram" style={cartogramStyle} />
              <img src={Choropleth15} alt="cartogram" style={cartogramStyle} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>16th Century</h3>
              <p>
                By the 16th century, the influx of Kwagŏ examinees from Seoul
                began to rise significantly
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram16} alt="cartogram" style={cartogramStyle} />
              <img src={Choropleth16} alt="cartogram" style={cartogramStyle} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>17th Century</h3>
              <p>
                Seoul, Chungcheong, and Yeongnam continue to be major
                contributors to the number of Kwagŏ examinees.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram17} alt="cartogram" style={cartogramStyle} />
              <img src={Choropleth17} alt="cartogram" style={cartogramStyle} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>18th Century</h3>
              <p>
                In the 18th century, while the general trend stayed the same,
                the Pyeongan province started seeing a gradual increase in the
                number of successful candidates.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram18} alt="cartogram" style={cartogramStyle} />
              <img src={Choropleth18} alt="cartogram" style={cartogramStyle} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>19th Century</h3>
              <p>
                As the 19th century came around, the Pyeongan province started
                standing out. This surge was largely due to the province's
                economic development, driven by mining and commerce, and the
                boost in trade with the Qing dynasty.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram19} alt="cartogram" style={cartogramStyle} />
              <img src={Choropleth19} alt="cartogram" style={cartogramStyle} />
            </div>
          </div>
        </div>
      </section>

      <section className="vh"></section>
    </div>
  );
}
