import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="education">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-book"></i> Education
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>Education</span>
            </h1>
          </div>

          <div className="resume-timeline">
            {data.educations.map((item, index) => (
              <div
                className="item scroll-animation"
                data-aos="fade-right"
                key={index}
              >
                <span className="date">
                  {item.startingDate} - {item.graduationDate}
                </span>
                <h2>{item.instituteName}</h2>
                <p>{item.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
