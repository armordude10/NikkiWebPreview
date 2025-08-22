import Image from "next/image";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const HeroSlide = ({ slide }) => {
  const { title, desc, img, path } = slide;

  return (
    <div className="row align-items-center height__950">
      <div
        className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="herobanner__content__wrapper">
          <div className="herobanner__title">
            <h1 className="font-montserrat">{title}</h1>
          </div>
          <div className="herobanner__text">
            <p className="font-lato">{desc}</p>
          </div>
          <div className="herobanner__button">
            <ButtonPrimary path={path} text="START YOUR JOURNEY" button="pink" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
        <div className="herobanner__img herobanner__img--position">
          <Image src={img} alt="Hero Banner" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
