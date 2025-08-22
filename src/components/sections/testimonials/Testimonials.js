"use client";
import Image from "next/image";
import testimonialImage1 from "@/assets/img/testimonial/testimonial__1.png";
import testimonialImage2 from "@/assets/img/testimonial/testimonial__2.png";
import testimonialSmallImage2 from "@/assets/img/testimonial/testimonial__small__img__2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlide from "@/components/shared/testimonials/TestimonialSlide";
import { Navigation } from "swiper/modules";

const Testimonials = ({ type }) => {
  const slides = [
    {
      id: 1,
      name: "Sarah Mitchell",
      desig: "Executive Director, Community Foundation",
      desc: `"Nikki's keynote on The Audacity Blueprint transformed our entire leadership team. Her authentic blend of vulnerability and strength gave us permission to lead boldly and embrace our power to create lasting change. The energy in the room was electric!"`,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      desig: "CEO, Social Impact Organization",
      desc: `"Working with Nikki was life-changing. She helped me reconnect with my 'why' and gave me practical tools to navigate leadership challenges with audacity and authenticity. Her guidance was instrumental in our organization's most successful year to date."`,
    },
    {
      id: 3,
      name: "Dr. Lisa Rodriguez",
      desig: "University Professor & Researcher",
      desc: `"Nikki's workshop on creative empowerment opened doors I didn't even know existed. Her approach to integrating art, healing, and leadership development is revolutionary. I've never felt more confident in my ability to make a meaningful impact."`,
    },
  ];
  return (
    <div
      className={`testimonial ${type === 2 ? "sp_bottom_140" : "sp_bottom_110 sp_top_100"}`}
      id="testimonial__area"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              <div className="section__title__heading">
                <h3>VOICES OF TRANSFORMATION &amp; EMPOWERMENT</h3>
              </div>
              <div className="section__title__text">
                <p>
                  Discover how leaders, changemakers, and visionaries have embraced their audacity
                  and transformed their lives through Nikki&apos;s empowering work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-lg-3 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="testimonial__img" data-tilt>
              <Image 
                src={testimonialImage1} 
                alt="Audience during keynote" 
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="testimonial__img__2">
                <Image 
                  src={testimonialImage2} 
                  alt="Keynote speaker on stage" 
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="testimonial__small__icon">
                <Image 
                  src={testimonialSmallImage2} 
                  alt="Decorative testimonial icon" 
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          <div
            className="col-xl-9 col-lg-9 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="testimonial__inner position-relative">
              <Swiper
                className="testimonial__slider__active position-static"
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
              >
                {slides.map((slide) => (
                  <SwiperSlide className="testimonial__single__slider" key={slide.id}>
                    <TestimonialSlide slide={slide} />
                  </SwiperSlide>
                ))}

                <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows slider__controls__arrows--2">
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
                  {/* <div className="swiper-pagination"></div> */}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
