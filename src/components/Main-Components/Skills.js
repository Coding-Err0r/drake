import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";

export default function Skills() {
  const animation = ["fade-up", "fade-down", "fade-left", "fade-right"];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos={animation[Math.floor(Math.random() * animation.length)]}
            >
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1
              className="scroll-animation"
              data-aos={animation[Math.floor(Math.random() * animation.length)]}
            >
              My <span>Skills</span>
            </h1>
          </div>

          <div className="row skills text-center">
            {data.skills.map((item, index) => (
              <div
                className="col-md-3 scroll-animation"
                data-aos={
                  animation[Math.floor(Math.random() * animation.length)]
                }
                key={index}
              >
                <div className="skill">
                  <div className="skill-inner">
                    <img src="../assets/images/figma.png" alt="Figma" />
                    <h1 className="percent">{item.percentage}%</h1>
                  </div>
                  <p className="name">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
