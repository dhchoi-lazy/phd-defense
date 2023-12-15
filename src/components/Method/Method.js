import LoremIpsum from "react-lorem-ipsum";
import Gyeyu from "./Gyeyu";
import NetworkBar from "./networkBar.svg";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import PsiConcept from "./PsiConcept";
import ct from "./ct.png";
export default function Method() {
  return (
    <section id="method">
      <GridContainer>
        <GridNormal>
          <h1 className="text-4xl">
            5. Measuring Career Success of Yangbans in the Joseon Dynasty
          </h1>
          <h3>
            Who succeeded matters in history. How can we measure how successful
            the government officials were in the Joseon dynasty?
          </h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li className="text-base text-gray-700">
              Constructing a social network and identifying key figures
            </li>
            <li className="text-base text-gray-700">
              Creating a universally accepted metric to quantify the success of
              the Yangban
            </li>
          </ol>
        </GridNormal>
        <GridHighlight>
          <Gyeyu />
        </GridHighlight>

        <GridNormal>
          <h3 className="text-2xl font-bold">
            Creating a universally accepted metric to quantify the success of
            the Yangban
          </h3>
          <PsiConcept />
        </GridNormal>
        <GridHighlight>
          <h1 className="text-2xl font-bold">
            Constructed Yangban Career Trajectories
          </h1>
          <img src={ct} width="100%" style={{ margin: "0 auto" }} />
        </GridHighlight>
      </GridContainer>
    </section>
  );
}
