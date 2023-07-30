import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";

export default function Service() {
  const animation = ["fade-up", "fade-down", "fade-left", "fade-right"];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos={animation[Math.floor(Math.random() * animation.length)]}
            >
              <i className="las la-stream"></i> Services
            </h4>
            <h1
              className="scroll-animation"
              data-aos={animation[Math.floor(Math.random() * animation.length)]}
            >
              My <span>Specializations</span>
            </h1>
          </div>

          <div className="services-items">
            {data.specializations.map((item, index) => (
              <div
                className="service-item scroll-animation"
                data-aos={
                  animation[Math.floor(Math.random() * animation.length)]
                }
                key={index}
              >
                <i className="las la-bezier-curve"></i>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="projects">
                  {item.numberOfProjects} Projects
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
