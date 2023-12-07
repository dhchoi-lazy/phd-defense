import { useRef, useLayoutEffect } from "react";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import LoremIpsum from "react-lorem-ipsum";
import Bureaucracy from "./Bureaucracy";
import Gwageo from "./Gwageo";
import { ReactComponent as Historymap } from "./historymap.svg";
import { ReactComponent as Timeline } from "./timeline.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import gsap from "gsap";
import Joseon from "./Joseon";
import Yangban from "./yangban.svg";

export default function Introduction() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);
  const joseonRef = useRef();
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.fromTo(
      "path#china",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo(
      "path#japan",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo(
      "path#joseon",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo("text", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    ScrollTrigger.create({
      trigger: joseonRef.current,
      start: "top center",
      end: "center center",
      scrub: true,
      animation: tl,
      markers: false,
    });
  }, []);

  return (
    <section id="introduction">
      <h1>1. Introduction</h1>

      <GridContainer>
        <GridNormal>
          <h2 id="joseonMap">What is Joseon?</h2>
          <div>
            <Historymap ref={joseonRef} />
            <Timeline />
          </div>
        </GridNormal>
        <GridNormal>
          <h2>Yangban</h2>
          <div style={{ display: "flex" }}>
            <img width="40%" src={Yangban} />
            <ul>
              <li>
                Joseon's <i>de facto</i> noble class(but they are NOT noble)
              </li>
              <li>
                They are differed from the European aristocracy and the Japanese
                samurais in that the status was not inherited.
              </li>
              <li>
                They could be a 'Yangban' only if they should pass a public
                examination called, <i>Gwageo</i>.
              </li>
              <li>
                They deeply respected Confucian philosophy and firmly believed
                that their life's mission and highest honor was to participate
                in public service.
              </li>
            </ul>
          </div>
        </GridNormal>
        <h2>Gwageo exam and Bureaucracy</h2>
        <GridHighlight>
          <div style={{ height: "20vh" }}></div>
          <Joseon />
        </GridHighlight>
        <GridNormal>
          <h2>Official grade table</h2>
          <table>
            <tbody>
              <tr>
                <th>Korean</th>
                <th>English</th>
                <th>Numeric Value</th>
              </tr>
              <tr>
                <td>정일품</td>
                <td>1st Rank</td>
                <td>18</td>
              </tr>
              <tr>
                <td>종일품</td>
                <td>Junior 1st Rank</td>
                <td>17</td>
              </tr>
              <tr>
                <td>정이품</td>
                <td>2nd Rank</td>
                <td>16</td>
              </tr>
              <tr>
                <td>종이품</td>
                <td>Junior 2nd Rank</td>
                <td>15</td>
              </tr>
              <tr>
                <td>정삼품</td>
                <td>3rd Rank</td>
                <td>14</td>
              </tr>
              <tr>
                <td>종삼품</td>
                <td>Junior 3rd Rank</td>
                <td>13</td>
              </tr>
              <tr>
                <td>정사품</td>
                <td>4th Rank</td>
                <td>12</td>
              </tr>
              <tr>
                <td>종사품</td>
                <td>Junior 4th Rank</td>
                <td>11</td>
              </tr>
              <tr>
                <td>정오품</td>
                <td>5th Rank</td>
                <td>10</td>
              </tr>
              <tr>
                <td>종오품</td>
                <td>Junior 5th Rank</td>
                <td>9</td>
              </tr>
              <tr>
                <td>정육품</td>
                <td>6th Rank</td>
                <td>8</td>
              </tr>
              <tr>
                <td>종육품</td>
                <td>Junior 6th Rank</td>
                <td>7</td>
              </tr>
              <tr>
                <td>정칠품</td>
                <td>7th Rank</td>
                <td>6</td>
              </tr>
              <tr>
                <td>종칠품</td>
                <td>Junior 7th Rank</td>
                <td>5</td>
              </tr>
              <tr>
                <td>정팔품</td>
                <td>8th Rank</td>
                <td>4</td>
              </tr>
              <tr>
                <td>종팔품</td>
                <td>Junior 8th Rank</td>
                <td>3</td>
              </tr>
              <tr>
                <td>정구품</td>
                <td>9th Rank</td>
                <td>2</td>
              </tr>
              <tr>
                <td>종구품</td>
                <td>Junior 9th Rank</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              Joseon employed an eighteen-grade bureaucracy, numbered from one
              (highest) to nine (lowest) and each divided into Chung (senior)
              and Chong (junior) subclasses.
            </li>
            <li>
              The highest, 1st Rrank, respectively the top administrative,
              legislative, and judicial officers corresponding to the modern day
              Prime Minister, Parliament Speaker, and Chief Justice that
              constitute the Uijuongbu, king's high council.
            </li>
            <li>
              This basic structure remained intact for nearly the entire
              lifetime of the kingdom until its modernization reform of 1894 (a
              mere sixteen years before the kingdom's demise), allowing us to
              systematically compare different periods separated by up to nearly
              five centuries.
            </li>
          </ul>
        </GridNormal>
        <GridNormal></GridNormal>

        <GridNormal>
          <h2>Research Question</h2>
          <ol>
            <li>
              Who succeeded matters in history. How can we measure how
              successful the government officials were in the Joseon dynasty?
            </li>
            <li>
              What discernible patterns might emerge from the comprehensive
              dataset?
            </li>
            <li>
              Could the application of quantitative analysis on these
              comprehensive records reveal previously unexplored historical
              insights?
            </li>
          </ol>
        </GridNormal>
      </GridContainer>
    </section>
  );
}
