import React from "react";
import Lsb from "./Global-content/Lsb";
import Herosec from "./Main-Components/Herosec";
import About from "./Main-Components/About";
import Service from "./Main-Components/Service";
import Skills from "./Main-Components/Skills";
import Portfolio from "./Main-Components/Portfolio";
import Testimonials from "./Main-Components/Testimonials";
import Clientlogos from "./Main-Components/Clientlogos";
import Pricing from "./Main-Components/Pricing";
import Contact from "./Main-Components/Contact";
import SocialMedia from "./Main-Components/SocialMedia";
import Education from "./Main-Components/Education";
import Experience from "./Main-Components/Experience";

export default function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Lsb />
          <SocialMedia />
          <Herosec />
          <About />
          <Education />
          <Experience />
          <Service />
          <Skills />
          <Portfolio />
          {/* <Testimonials/>
                <Clientlogos/>
                <Pricing/> */}
          {/* <Contact /> */}
        </div>
      </div>
    </main>
  );
}
