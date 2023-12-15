import LoremIpsum from "react-lorem-ipsum";
import Bangmok from "./Bangmok";
import Sillok from "./Sillok";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import ggdj from "./ggdj.jpg";
import ajd from "./ajd.jpg";
import ajd2 from "./ajd2.png";
import bangmok2 from "./bangmok.png";
import bangmok from "./bangmok.jpg";
import government from "./government.png";
import ggdj2 from "./ggdj.png";
import Cartogram from "./Cartogram";
import Age from "./Age";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Data() {
  const numberRef = useRef();
  const dataRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".number", { fontSize: "50px" });
      const ntl = gsap.timeline({
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top center", // 요소의 상단이 뷰포트의 중앙에 도달하면 시작
          end: "+=400", // 요소의 하단이 뷰포트의 중앙에서 500px 떨어진 곳에 도달하면 끝
          scrub: true,
          id: "numbers",
          markers: false,
        },
      });
      ntl
        .from("#number1", {
          innerText: 0,
          snap: {
            innerText: 1,
          },
          ease: "power1.inOut",
        })
        .from("#number2", { innerText: 0, snap: { innerText: 1 } })
        .from("#number3", { innerText: 0, snap: { innerText: 1 } });
    }, dataRef.current);
    return () => ctx.revert();
  }, []);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "100px",
    },
    block: {
      width: "30%",
      textAlign: "center",
    },
    img: {
      width: "100%",
      height: "500px",
    },
    h3: {
      width: "100%",
      textAlign: "center",
    },
    p: {
      textAlign: "justify",
      // fontSize: "16px",
    },
  };
  return (
    <section id="data" ref={dataRef}>
      <GridContainer>
        <h1 className="text-4xl">3. Data Description and Implementation</h1>
        <GridHighlight>
          <div style={styles.container}>
            <div style={styles.block}>
              <h3 style={styles.h3}>The Annals of Joseon Dynasty</h3>
              <img
                style={styles.img}
                src={ajd}
                alt="Annals of Joseon Dynasty"
              />

              <figcaption style={styles.p}>
                A chronological narrative of every king's notable actions and
                interactions on royal, economic, military, and other matters
                based on the minutes kept by <i>sagwan</i> (history officials)
                who were in proximity with the king at all times.
              </figcaption>
            </div>

            <div style={styles.block}>
              <h3 style={styles.h3}>Bangmok</h3>
              <img style={styles.img} src={bangmok} alt="Mungwa Bangmok" />

              <p style={styles.p}>
                Bangmok is the list of people who passed the Gwageo. Those who
                passed the exam in the Gwageo created this book to commemorate
                their success. For the Mungwa exam, records of all the previous
                exams are still present to this day.
              </p>
            </div>

            <div style={styles.block}>
              <h3 style={styles.h3}>Gyeonggukdaejeon:Ijeon</h3>
              <img style={styles.img} src={ggdj} alt="Gyeonggukdaejeon Ijeon" />

              <p style={styles.p}>
                Gyeonggukdaejeon is the constitution of Joseon. Among its
                contents, Ijeon describes the personnel system and the
                bureaucratic system.
              </p>
            </div>
          </div>
        </GridHighlight>
        <GridNormal>
          <h2 className="text-2xl">The Annals</h2>
          <img width="100%" src={ajd2} alt="Annals of Joseon Dynasty" />
        </GridNormal>
        <h2 ref={numberRef}>The volume of the Annaals</h2>
        <GridNormal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "20vh auto",
            }}
          >
            <p>
              <span className="number" id="number1">
                26
              </span>{" "}
              Monarchs
            </p>
            <p>
              <span className="number" id="number1">
                214
              </span>{" "}
              topics
            </p>
            <p>
              <span className="number" id="number2">
                60158
              </span>{" "}
              People appeared
            </p>

            <p>
              <span className="number" id="number2">
                183342{" "}
              </span>
              days (from August 5th, 1392 to August 14th 1894)
            </p>
            <p>
              <span className="number" id="number3">
                384279
              </span>{" "}
              articles
            </p>
          </div>
        </GridNormal>
        <h3 className="text-lg font-bold">
          How many articles were produced daily by the king?
        </h3>
        <GridHighlight>
          <Sillok />
        </GridHighlight>

        <h2 className="text-3lg font-bold">Mungwa Bangmok</h2>
        <GridNormal>
          <div style={{ textAlign: "center" }}>
            <img width="80%" src={bangmok2} alt="Mungwa Bangmok" />
          </div>
          The Mungwa Bangmok contains the following information on each
          successful applicant:
          <ol className="list-decimal ml-5 space-y-2">
            <li className="text-base text-gray-700">
              Exam information: Year of Gwageo, subtype of Gwageo taken, and
              initial rank, number of candidates
            </li>
            <li className="text-base text-gray-700">
              Personal information: Name, residence, birth year, past positions
              (one can take multiple Gwageo exams for expedited promotions)
            </li>
            <li className="text-base text-gray-700">
              Family information: Family clan, and the names of father, paternal
              grandfather, paternal great-grandfather, maternal grandfather, and
              brothers if they had passed Gwageo themselves
            </li>
          </ol>
          <table id="bangmok_table">
            <thead>
              <tr>
                <th>Affiliation of exam</th>
                <th>No. of exam conduction</th>
                <th>No. of remaining Bangmok</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mungwa</td>
                <td>804</td>
                <td>804</td>
              </tr>
              <tr>
                <td>Mugwa</td>
                <td>801</td>
                <td>138</td>
              </tr>
              <tr>
                <td>Miscellaneous</td>
                <td>233</td>
                <td>177</td>
              </tr>
            </tbody>
          </table>
        </GridNormal>
        <GridNormal>
          <h2>Gyeonggukdaejeon: Ijeon</h2>
          <img width="100%" src={ggdj2} alt="Gyeonggukdaejeon Ijeon" />
        </GridNormal>
        <h1 className="text-4xl">
          4. Understanding the Socio-political Landscape of the Joseon Dynasty
        </h1>
        <GridHighlight>
          <h3 className="text-2xl font-bold">
            1. How many people became Yangban through the Gwageo system?
          </h3>
          <Bangmok />
        </GridHighlight>

        <GridHighlight>
          <h3 className="text-2xl font-bold">2. Where they come from?</h3>
          <Cartogram />
        </GridHighlight>

        <GridNormal>
          <h2 className="text-2xl font-bold">How long they did live?</h2>
          <Age />
        </GridNormal>
      </GridContainer>
    </section>
  );
}
