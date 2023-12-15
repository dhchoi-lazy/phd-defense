import React from "react";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import Related from "./components/Related/Related";
import S1 from "./components/Introduction/introduction1.png";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import TOC from "./components/TOC/TOC";
import Data from "./components/Data/Data";
import Slides from "./components/Slides/Slides";
import Method from "./components/Method/Method";
import Psi from "./components/Psi/Psi";
import Conclusion from "./components/Conclusion/Conclusion";
import Footer from "./components/Footer/Footer";
import QR from "./qr.png";
function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <meta charSet="utf-8" />
        <title>Phd Defense DHChoi</title>
        <meta property="og:type" content="article" />
        <meta name="description" content="Phd Defense presentation material" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </HelmetProvider>
      {/* <Layout> */}
      <Header />
      <TOC />
      <Introduction />
      <Related />
      <Data />
      <Method />
      <Psi />
      <Conclusion />

      <Footer />
      {/* </Layout> */}
    </div>
  );
}

export default App;
