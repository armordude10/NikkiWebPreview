"use client";
import herobannerBgImage1 from "@/assets/img/herobaner/herobanner__bg.png";
import herobannerBgImage2 from "@/assets/img/herobaner/herobanner__bg__1.png";
import herobannerBgImage3 from "@/assets/img/herobaner/herobanner__bg__5.png";
import herobannerImage1 from "@/assets/img/herobaner/front__img__ecommerce1.png";
import herobannerImage2 from "@/assets/img/herobaner/front__img__ecommerce2.png";
import herobannerImage3 from "@/assets/img/herobaner/front__img__ecommerce3.png";
import herobannerVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import herobannerVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import Hero9Slide from "@/components/shared/hero-banner/Hero9Slide";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero9 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      title: (
        <>
          Grab Super <span className="text__gradient">Offer</span>
        </>
      ),
      tag: "eCommerce Solution",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      price: 110,
      disc: 27,
      img: herobannerImage3,
      bgImg: herobannerBgImage1,
    },
    {
      id: 2,
      title: (
        <>
          Best Deal <span className="text__gradient">Solution</span>
        </>
      ),
      tag: "eCommerce Solution",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      price: 56,
      disc: 20,
      img: herobannerImage1,
      bgImg: herobannerBgImage2,
    },
    {
      id: 3,
      title: (
        <>
          Awesome <span className="text__gradient">Collection</span>
        </>
      ),
      tag: "eCommerce Solution",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      price: 57,
      disc: 28,
      img: herobannerImage2,
      bgImg: herobannerBgImage3,
    },
  ];

  const handleSlideChange = (swiper) => {
    setIsTransitioning(true);
    setCurrentSlide(swiper.activeIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  return (
    <div
      className="herobanner d-flex align-items-center height__800 herobanner__front__img__wrapper position-relative"
      style={{
        background: `var(--pinkcolor)`,
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background with sliding animation */}
      <div 
        className={`hero-bg-container ${isTransitioning ? 'sliding-left' : ''}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image
          src={slides[currentSlide]?.bgImg || herobannerBgImage1}
          alt="Hero Banner Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
          priority
        />
      </div>
      <div className="container">
        <div className="herobanner__wrapper">
          <Swiper
            className="hero__simple__slider__active  position-static"
            slidesPerView={1}
            grabCursor={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            onSlideChange={handleSlideChange}
            speed={600}
          >
            {slides?.map((slide, idx) => (
              <SwiperSlide key={idx} className="herobanner__single">
                <Hero9Slide slide={slide} isTransitioning={isTransitioning} />
              </SwiperSlide>
            ))}

            <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows hero__simple__slider__arrow">
              <div className="swiper-button-next arrow-btn arrow-btn-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-button-prev arrow-btn arrow-btn-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 12H3.67"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="herobanner__icon">
        <Image
          className="herobanner__vector hero__icon__1"
          src={herobannerVectorImage1}
          alt="Vector photo"
        />
        <Image
          className="herobanner__vector hero__icon__4"
          src={herobannerVectorImage4}
          alt="Vector photo"
        />
      </div>
    </div>
  );
};

export default Hero9;
