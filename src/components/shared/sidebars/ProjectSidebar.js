import React from "react";
import Download from "./widgets/Download";

const ProjectSidebar = () => {
  return (
    <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
      <div className="project__details__sidebar sidebar">
        <div
          className="project__details__sidebar__info"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading">
            <h6>Impact Details:</h6>
          </div>
          <div className="project__details__sidebar__list">
            <ul>
              <li>
                <span>Date:</span>
                <p>Ongoing Since 1998</p>
              </li>
              <li>
                <span>Leader:</span>
                <p>Nikki Romain</p>
              </li>
              <li>
                <span>Platform:</span>
                <p>www.rivetingnikki.com</p>
              </li>
              <li>
                <span>Location:</span>
                <p>Peoria, Illinois</p>
              </li>
              <li>
                <span>Impact</span>
                <p>25+ Years & Counting</p>
              </li>
            </ul>
          </div>
          <div className="headerarea__icon project__details__sidebar__icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/nikkiromain">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rivetingnikki">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@nikkiromain">
                  <i className="icofont-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nikkiromain">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="project__details__get__quote"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading get__quote__heading">
            <h6>Start Your Journey:</h6>
          </div>
          <div className="project__details__get__quote__input">
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Name:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Email:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="phone:"
            />
            <textarea
              className="sidebar__common__input"
              name=""
              id=""
              cols="30"
              rows="10"
              defaultValue={"Notes:"}
            />
          </div>
          <div className="project__details__get__quote__button">
            <button type="submit" className="default__button">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <Download />
      </div>
    </div>
  );
};

export default ProjectSidebar;
