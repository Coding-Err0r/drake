import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import data from "../../data";
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  const animation = ["fade-up", "fade-down", "fade-left", "fade-right"];
  const size = ["portfolio-half", "portfolio-full"];
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos={animation[Math.floor(Math.random() * animation.length)]}
            >
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {data.featuredProjects.map((item, index) => (
              <div
                className="col-md-12 scroll-animation"
                data-aos={
                  animation[Math.floor(Math.random() * animation.length)]
                }
                key={index}
              >
                <div
                  className={`portfolio-item ${
                    size[Math.floor(Math.random() * size.length)]
                  }`}
                >
                  <div className="portfolio-item-inner">
                    <a href={item.link} data-lightbox="example-1">
                      <img src={item.image} alt="Portfolio" />
                    </a>

                    <ul className="portfolio-categories">
                      {item.tools.map((tool, key) => (
                        <li key={key}>
                          <a href="#">{tool}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>
                    <a href={item.link}>{item.title}</a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
