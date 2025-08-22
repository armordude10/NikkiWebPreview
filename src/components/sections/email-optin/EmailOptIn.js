"use client";
import { useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import optinImage from "@/assets/img/about/about__4.png";

const EmailOptIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Self-Worth Activation Guide Request",
          message: `${formData.name} has requested the Self-Worth Activation Guide. Email: ${formData.email}`,
        }),
      });
      if (response.ok) {
        setStatus("Success! Check your email for your Self-Worth Activation Guide.");
        setFormData({
          name: "",
          email: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="cta sp_top_140 sp_bottom_140 pink__bg__color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="cta__content" data-aos="fade-up" data-aos-duration="1500">
              <div className="section__title section__title--2">
                <div className="section__title__button">
                  <span className="text__gradient">Free Download</span>
                </div>
                <div className="section__title__heading">
                  <h3 className="text-white">
                    Get Your Self-Worth Activation Guide
                  </h3>
                </div>
                <div className="section__title__text">
                  <p className="text-white">
                    Start your journey to audacious living with this powerful guide. 
                    Discover practical tools to build unshakeable self-worth and 
                    transform how you see yourself and your potential.
                  </p>
                </div>
              </div>

              <div className="cta__features sp_bottom_30">
                <div className="cta__feature">
                  <i className="icofont-check text__gradient"></i>
                  <span>5 proven techniques to boost self-worth</span>
                </div>
                <div className="cta__feature">
                  <i className="icofont-check text__gradient"></i>
                  <span>Daily affirmations for audacious living</span>
                </div>
                <div className="cta__feature">
                  <i className="icofont-check text__gradient"></i>
                  <span>Practical exercises to overcome self-doubt</span>
                </div>
              </div>

              <div className="cta__form">
                <form onSubmit={handleSubmit} className="newsletter__form">
                  <div className="row">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="newsletter__input"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="newsletter__input"
                      />
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="default__button newsletter__button">
                        GET FREE GUIDE
                      </button>
                    </div>
                  </div>
                </form>
                {status && (
                  <p className={`form-message sp_top_20 ${status.includes('Success') ? 'text-success' : 'text-warning'}`}>
                    {status}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="cta__img" data-aos="fade-up" data-aos-duration="2000">
              <Image src={optinImage} alt="Self-Worth Activation Guide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailOptIn;