import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";

export default function Herosec() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
              data-aos="fade-up"
            >
              <i className="las la-home"></i> Introduce
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              {data.intro}
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            {data.introduction}
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-aos="fade-up"
          >
            <img src="../assets/images/round-text.png" alt="Rounded Text" />
            <i className="las la-arrow-down"></i>
          </a>
          <div className="facts d-flex">
            <div className="left scroll-animation" data-aos="fade-right">
              <h1>{data.numberOfYearsOfExperiences}+</h1>
              <p>Years of Experience</p>
            </div>
            <div className="right scroll-animation" data-aos="fade-left">
              <h1>{data.numberOfProjects.number}+</h1>
              <p>{data.numberOfProjects.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
