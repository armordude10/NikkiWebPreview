import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import offeringImage1 from "@/assets/img/service/service__1.png";
import offeringImage2 from "@/assets/img/service/service__2.png";
import offeringImage3 from "@/assets/img/service/service__3.png";

const FeaturedOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: "Speaking",
      subtitle: "Transformational Keynotes",
      description: "Book Nikki for your next event and watch your audience embrace their audacity. Signature keynote: The Audacity Blueprint.",
      image: offeringImage1,
      path: "/speaking",
      buttonText: "LEARN MORE",
      icon: "icofont-megaphone-alt"
    },
    {
      id: 2,
      title: "The Audacity Blueprint",
      subtitle: "Book + Workbook (Coming Soon)",
      description: "The revolutionary guide to reclaiming your self-worth, building legacy, and living audaciously. Be the first to know when it's available.",
      image: offeringImage2,
      path: "/audacity-blueprint",
      buttonText: "GET NOTIFIED",
      icon: "icofont-book-alt"
    },
    {
      id: 3,
      title: "Courses & Retreats",
      subtitle: "Immersive Transformations",
      description: "Deep-dive experiences from online masterclasses to luxury retreats. Transform inspiration into lasting change.",
      image: offeringImage3,
      path: "/courses-retreats",
      buttonText: "EARLY ACCESS",
      icon: "icofont-heart-alt"
    }
  ];

  return (
    <div className="service sp_top_140 sp_bottom_140" id="offerings__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              <div className="section__title__button">
                <span className="text__gradient">Featured</span>
              </div>
              <div className="section__title__heading">
                <h3>Start Your Audacious Journey</h3>
              </div>
              <div className="section__title__text">
                <p>
                  Choose your path to transformation - from speaking events that inspire 
                  to deep-dive experiences that create lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {offerings.map((offering, idx) => (
            <div key={offering.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div 
                className="service__single service__single--2" 
                data-aos="fade-up" 
                data-aos-duration={1500 + (idx * 300)}
              >
                <div className="service__img">
                  <Image src={offering.image} alt={offering.title} />
                </div>
                <div className="service__content">
                  <div className="service__icon">
                    <i className={`${offering.icon} text__gradient`}></i>
                  </div>
                  <h4>{offering.title}</h4>
                  <h6 className="text__gradient">{offering.subtitle}</h6>
                  <p>{offering.description}</p>
                  <div className="service__button">
                    <ButtonPrimary text={offering.buttonText} path={offering.path} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOfferings;