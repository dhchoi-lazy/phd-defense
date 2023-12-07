import LoremIpsum from "react-lorem-ipsum";

import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import Grid from "@mui/material/Grid";
import Psigraph from "./Psigraph";
import PsiGini from "./PsiGini";
import PsiSedogaGwageo from "./PsiSedogaGwageo";
import PsiSedogaPsi from "./PsiSedogaPsi";
import PsiHeatmap from "./PsiHeatmap";
export default function Psi() {
  return (
    <section id="psi">
      <h1>4. Result</h1>
      <GridContainer>
        <GridNormal>
          <h2>As unfairness in success grows, the kingdom is falling apart</h2>
          <PsiGini />
          <ul>
            <li>
              The Gini inequality coefficient of ψ among Gwageo passers in the
              same year (bin size 30 years) shows a sudden sizable jump in the
              late 1800s.
            </li>
            <li>
              An average Gini coefficient is 2.75-fold increased during its
              final decades in the 1800's.
            </li>
            <li>
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
          <ul>
            <li>
              The emergence of sedoga (power-yielding family clans)--Yeoheung
              Min, Andong Kim, Pungyang Cho and BannamParks to name the
              best-known ones--that gained sway of the kingdom through
              successful marriages into the royal family.
            </li>
            <li>
              The above plot shows the proportion of individuals from the
              <i>sedoga</i> who passed the Gwageo out of all those who did so in
              the past. As we approach the late Joseon period, their rate of
              passing the examination rapidly increases. This suggests that the
              Gwageo system is becoming corrupt.
            </li>
            <li>
              The plot below illustrates the proportion of <i>sedoga</i> within
              the top 10% of the ψ value. Similarly, we can see a significant
              increase in this proportion as we enter the 1800s.
            </li>
          </ul>
        </GridNormal>
        <GridNormal>
          <h3>ψ heatmap</h3>
          <PsiHeatmap />
          <ul>
            <li>The heatmap provides an overview of this trend.</li>
            <li>
              The x-axis represents time, while the y-axis indicates the deciles
              of the ψ value.
            </li>
            <li>
              As the Joseon dynasty nears its downfall, we can observe that
              individuals from <i>sedoga</i> are increasingly concentrated in
              the higher ranks of the ψ value.
            </li>
          </ul>
        </GridNormal>
      </GridContainer>
    </section>
  );
}
