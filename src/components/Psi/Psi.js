import LoremIpsum from "react-lorem-ipsum";
import { useRef, useEffect } from "react";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import Grid from "@mui/material/Grid";
import Psigraph from "./Psigraph";
import Reveal from "reveal.js";
import PsiGini from "./PsiGini";
import PsiSedogaGwageo from "./PsiSedogaGwageo";
import PsiSedogaPsi from "./PsiSedogaPsi";
import PsiHeatmap from "./PsiHeatmap";
import S1 from "./result1.png";
import S2 from "./result2.png";
import S3 from "./result3.png";
import S4 from "./result4.png";
import S5 from "./result5.png";
import S6 from "./result6.png";
const images = [S1, S2, S3, S4, S5, S6];
export default function Psi() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        progress: false,
        keyboardCondition: "focused",
      });
      deck.initialize();
    }
  }, []);
  return (
    <section id="psi">
      <GridContainer>
        <GridNormal>
          <h2>As unfairness in success grows, the kingdom is falling apart</h2>
          <PsiGini />
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-base">
              The Gini inequality coefficient of ψ among Gwageo passers in the
              same year (bin size 30 years) shows a sudden sizable jump in the
              late 1800s.
            </li>
            <li className="text-base">
              An average Gini coefficient is 2.75-fold increased during its
              final decades in the 1800's.
            </li>
            <li className="text-base">
              A few family clans begin to gain power and dominate the
              bureaucracy, a sign of the corruption of the vaunted meritocracy
              of Joseon. Joseon meets its demise soon after in 1905 CE.
            </li>
          </ul>
        </GridNormal>
        <GridNormal>
          <h2>
            <i>sedoga</i> has seized success
          </h2>
          <PsiSedogaGwageo />
          <PsiSedogaPsi />
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-base">
              The emergence of sedoga (power-yielding family clans)--Yeoheung
              Min, Andong Kim, Pungyang Cho and BannamParks to name the
              best-known ones--that gained sway of the kingdom through
              successful marriages into the royal family.
            </li>
            <li className="text-base">
              The above plot shows the proportion of individuals from the
              <i>sedoga</i> who passed the Gwageo out of all those who did so in
              the past. As we approach the late Joseon period, their rate of
              passing the examination rapidly increases. This suggests that the
              Gwageo system is becoming corrupt.
            </li>
            <li className="text-base">
              The plot below illustrates the proportion of <i>sedoga</i> within
              the top 10% of the ψ value. Similarly, we can see a significant
              increase in this proportion as we enter the 1800s.
            </li>
          </ul>
        </GridNormal>
        <GridNormal>
          <h3>ψ heatmap</h3>
          <PsiHeatmap />
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-base">
              The heatmap provides an overview of this trend.
            </li>
            <li className="text-base">
              The x-axis represents time, while the y-axis indicates the deciles
              of the ψ value.
            </li>
            <li className="text-base">
              As the Joseon dynasty nears its downfall, we can observe that
              individuals from <i>sedoga</i> are increasingly concentrated in
              the higher ranks of the ψ value.
            </li>
          </ul>
        </GridNormal>
      </GridContainer>

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
