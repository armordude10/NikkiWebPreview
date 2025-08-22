import Image from "next/image";
import aboutImage1 from "@/assets/img/about/about__1.png";
import aboutSmallImage1 from "@/assets/img/about/about__small__img__1.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About = () => {
  return (
    <div
      className="about position-relative sp_bottom_140"
      id="about__mission__area"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__img__wrapper position-relative" data-tilt>
              <Image className="about__img__1" src={aboutImage1} alt="" />
              <div className="about__number">
                <div className="about__number__inner about__number__position">
                  <span>25+</span>
                  <p>Years Transforming Lives</p>
                  <div className="about__number__icon">
                    <a href="#">
                      {" "}
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                          stroke="#0A0624"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10.9902 23.0107L22.8908 11.1101"
                          stroke="#0A0624"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__1"
                  src={aboutSmallImage1}
                  alt=""
                />
                <Image
                  className="ssla__animation ssl__img__2"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="about__inner">
              <div className="section__title section__title--2 sp_bottom_30">
                <div className="section__title__heading">
                  <h3 className="font-montserrat">
                    EMPOWERING LEADERS & CHANGEMAKERS SINCE{" "}
                    <span className="text__gradient text-pink">1998.</span>{" "}
                  </h3>
                </div>
                <div className="section__title__text">
                  <p className="font-lato">
                    From performing artist to nonprofit CEO to transformational speaker - Nikki Romain integrates artistry, leadership, and empowerment to help you claim your audacity.
                  </p>
                </div>
              </div>

              <div className="about__misson">
                <h6 className="subheading text-purple">Mission & Vision</h6>
              </div>
              <div className="about__text__2">
                <p>
                  To empower individuals to embrace their audacity as a birthright, transforming self-doubt into self-worth and vision into lasting legacy through the healing power of art and authentic leadership.
                </p>
              </div>
              <div className="about__text__3">
                <p>
                  Creating a world where every person recognizes their inherent worth and dares to live boldly, using creativity and community as catalysts for personal and systemic transformation.
                </p>
              </div>
              <div className="about__button">
                <ButtonPrimary text={"DISCOVER MY JOURNEY"} path={"/about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
