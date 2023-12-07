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
      height: "800px",
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
        <h1>2. Data</h1>
        <GridHighlight>
          <div style={styles.container}>
            <div style={styles.block}>
              <h3 style={styles.h3}>The Annals of Joseon Dynasty (AJD)</h3>
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
          <h2>AJD</h2>
          <img width="100%" src={ajd2} alt="Annals of Joseon Dynasty" />
          <ul>
            <li>
              There are no direct official records indicating the official rank
              of the Yangban bureaucrats.
            </li>
            <li>
              Fortunately, in the AJD, the names of Yangban bureaucrats are
              accompanied by their official titles every time they appear.
            </li>
            <li>
              As these official titles can be converted into official ranks, we
              can trace the career trajectory of the Yangban bureaucrats through
              the AJD.
            </li>
          </ul>
          <p>
            The AJD collectively refers to the Annals of the kings of the Joseon
            Dynasty, from King Taejo to King Cheoljong. Korean historians did
            not include the Annals of king Gojong or King Sunjong because these
            two Annals, compiled from 1927 to 1932, were edited by the Japanese
            Governor-General of Korea. They concerned Japan described the two
            kings with a view that is favorable to Japan. These records are also
            incompatible with Joseon’s rigorous compilation rules for the Annal.
            The AJD was not written by a particular person in a specific period;
            rather, every time the King was replaced, the servants of the time
            gathered Sacho (사초, 史草), a record of the daily movements of the
            king, and edited this record according to strict compilation rules.
            The AJD were written in Chinese characters and so were hard to read
            by ordinary people. The National Institute of Korean History (NIKH)
            started translating these documents in 1968 and completed the work
            in 1993. They digitized the translated version in 1995; the
            digitized content was made publicly available on{" "}
            <a href="https://sillok.history.go.kr/main/main.do">NIKH website</a>{" "}
            in 2008. In the process of digitization, NIKH proceeded to index the
            names of figures, the names of places, and the names of books in the
            AJD (see one example of the digitized AJD in above figure). This
            work is quite significant to our study because it means that the
            NIKH made all figures in the digitized AJD identifiable. They also
            present that the career records of each of the bureaucrats in order
            of appearance as shown in Table. In other words, NIKH provides a
            service through which we can grasp the middle and end career records
            in chronological order for each person mentioned.
          </p>
        </GridNormal>
        <h2 ref={numberRef}>The volume of AJD</h2>
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
        <h3>How many articles were produced daily by the king?</h3>
        <GridHighlight>
          <Sillok />
        </GridHighlight>

        <h2>Bangmok</h2>
        <GridNormal>
          <div style={{ textAlign: "center" }}>
            <img width="80%" src={bangmok2} alt="Mungwa Bangmok" />
          </div>

          <p>
            As mentioned earlier, those who wanted to start the bureaucratic
            life had to pass the Gwageo. Those who had passed the Gwageo were
            the core rulers of the society, so the state tried to manage them.
            the Bangmok was made for this reason. In addition to the Bangmok,
            which was published by the government, people who passed the Gwageo
            made money and made Bangmok documents for themselves to celebrate
            their acceptance. However, both types of Bangmok were not passed
            down to us today in equal numbers(see{" "}
            <a href="#bangmok_table">below table</a>). The Mungwa were conducted
            804 times, Mugwa 801 times, and Chapkwa 233 times. However, the
            Mungwa had only Bangmok for all tests; 138 of the Mugwa and 177 of
            the Chapkwa remain. The Academy of Korean Studies (AKS) is now
            offering a Bangmok{" "}
            <a href="http://people.aks.ac.kr/">online database</a>. As can be
            seen in above Figure, Bangmok contains the following demographic
            information on every successful Gwageo applicant:
          </p>
          <ol>
            <li>
              Exam information: Year of Gwageo, subtype of Gwageo taken, and
              initial rank, number of candidates
            </li>
            <li>
              Personal information: Name, residence, birth year, past positions
              (one can take multiple Gwageo ex- ams for expedited promotions)
            </li>
            <li>
              Family information: Family clan, and the names of father, paternal
              grandfather, paternal great- grandfather, maternal grandfather and
              brothers if they had passed Gwageo themselve
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

        <GridHighlight>
          <h3>How many people became Yangban through the Gwageo system?</h3>
          <Bangmok />
        </GridHighlight>

        <GridHighlight>
          <h3>Where they come from?</h3>
          <Cartogram />
        </GridHighlight>
        <GridNormal>
          <h2>Gyeonggukdaejeon: Ijeon</h2>
          <img width="100%" src={ggdj2} alt="Gyeonggukdaejeon Ijeon" />
          <p>
            Gyeonggukdaejeon is equivalent to today’s constitution. Joseon tried
            to enact a national system as law from the beginning of the founding
            period, and this was Gyeonggukdaejeon, which was organized, unified,
            and completed in 1474. Gyeonggukdaejeon consists of six chapters
            that considered the function of the government at that time.
            Gyeonggukdaejeon: ijeon, one of the six chapters, stipulated the
            functions of departments and the officer ranks suitable for titles
            of office. Departments were largely divided into the central
            government and local governments. The central government consisted
            of the following: The State Council (Uijeongbu, 의정부, 議政府), Six
            Ministries (Yukjo, 육조, 六曹), the Royal Secretariat
            (Seungjeongwon, 승정원, 承政院), the Royal Investigation Bureau
            (Uigeumbu, 의금부, 義禁府), which functioned as the Court and the
            Three Offices (Office of Inspector General (Saheonbu, 사헌부,
            司憲府), Office of Censors (Saganwon, 사간원, 司諫院), Office of
            Special Advisors (Hongmoongwan, 홍문관, 弘文館)), and so on. At the
            local government level, important officers were dispatched from the
            central government. Below figure shows organization chart of Joseon
            government.
          </p>
          <img width="100%" src={government} alt="Joseon Government" />
        </GridNormal>
        <GridNormal>
          <h2>How long they did live?</h2>
          <Age />
        </GridNormal>
      </GridContainer>
    </section>
  );
}
