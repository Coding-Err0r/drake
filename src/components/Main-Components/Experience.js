import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Experience
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            {data.experiences.map((item, index) => (
              <div
                className="item scroll-animation"
                data-aos="fade-right"
                key={index}
              >
                <span className="date">
                  {item.startingDate} - {item.endingDate}
                </span>
                <h2>{item.company}</h2>
                <p>{item.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
