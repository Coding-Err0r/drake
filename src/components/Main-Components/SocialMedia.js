import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialMedia = () => {
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
              <i className="las la-hashtag"></i> Social Media
            </h4>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-left">
              <li>
                <a href="https://twitter.com/">
                  <i className="lab la-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://dribble.com/">
                  <i className="lab la-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/">
                  <i className="lab la-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/">
                  <i className="lab la-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
