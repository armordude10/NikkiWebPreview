"use client";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useState } from "react";
import speakerImage from "@/assets/img/about/about__2.png"; // placeholder image

const SpeakingPrimary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventDate: "",
    eventType: "Keynote",
    audience: "",
    budget: "",
    message: "I'm interested in booking Nikki for my event...",
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
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Thank you! Your speaking inquiry has been sent.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          eventDate: "",
          eventType: "Keynote",
          audience: "",
          budget: "",
          message: "I'm interested in booking Nikki for my event...",
        });
      } else {
        setStatus("Failed to send inquiry.");
      }
    } catch (error) {
      setStatus("Failed to send inquiry.");
    }
  };

  return (
    <div className="service sp_top_140 sp_bottom_140">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center sp_bottom_80">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__img" data-aos="fade-up" data-aos-duration="1500">
              <Image src={speakerImage} alt="Nikki Romain Speaking" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__content" data-aos="fade-up" data-aos-duration="2000">
              <div className="section__title section__title--2">
                <div className="section__title__button">
                  <span className="text__gradient">Keynote Speaker</span>
                </div>
                <div className="section__title__heading">
                  <h2>The Audacity Blueprint: How Audacity Rebuilds Everything</h2>
                </div>
                <div className="section__title__text">
                  <p>
                    Transform your organization with Nikki&apos;s signature keynote that empowers 
                    leaders to embrace their audacity, rebuild their self-worth, and create 
                    lasting impact. This isn&apos;t just inspiration—it&apos;s transformation.
                  </p>
                </div>
              </div>
              <div className="service__button">
                <ButtonPrimary text="DOWNLOAD SPEAKER PACKET" path="/speaker-packet.pdf" />
              </div>
            </div>
          </div>
        </div>

        {/* Speaking Topics */}
        <div className="row sp_bottom_80">
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__heading">
                <h3>Signature Speaking Topics</h3>
              </div>
              <div className="section__title__text">
                <p>Each presentation is customized to your audience and organizational goals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single" data-aos="fade-up" data-aos-duration="1500">
              <div className="service__icon">
                <i className="icofont-heart-alt text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Self-Worth Revolution</h4>
                <p>
                  Break free from self-doubt and imposter syndrome. Learn why you are already enough 
                  and discover practical tools to build unshakeable self-worth that transforms how you lead.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single" data-aos="fade-up" data-aos-duration="1800">
              <div className="service__icon">
                <i className="icofont-crown text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Audacious Leadership</h4>
                <p>
                  Redefine leadership through vulnerability, authenticity, and bold action. 
                  Learn to lead without permission and inspire others to embrace their own audacity.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single" data-aos="fade-up" data-aos-duration="2100">
              <div className="service__icon">
                <i className="icofont-paint text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Creative Reinvention</h4>
                <p>
                  It&apos;s never too late to start over boldly. Discover how to reinvent yourself, 
                  your career, and your impact using creativity as a catalyst for transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single" data-aos="fade-up" data-aos-duration="2400">
              <div className="service__icon">
                <i className="icofont-rocket-alt-2 text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Nonprofit Power Moves</h4>
                <p>
                  Strategic insights from building a transformational nonprofit organization. 
                  Learn how to scale impact, navigate challenges, and lead with purpose-driven audacity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Book Nikki Section */}
        <div className="row sp_top_100 sp_bottom_80">
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__heading">
                <h3>Why Book Nikki</h3>
              </div>
              <div className="section__title__text">
                <p>More than a speaker—a catalyst for transformation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="feature__number">25+</div>
              <h5>Years of Impact</h5>
              <p>From performing artist to nonprofit CEO to transformational speaker</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1800">
              <div className="feature__number">1000s</div>
              <h5>Lives Transformed</h5>
              <p>Through ART Inc. and speaking engagements nationwide</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="2100">
              <div className="feature__number">100%</div>
              <h5>Authentic Energy</h5>
              <p>Real stories, practical tools, and transformational outcomes</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="row sp_top_100">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_50">
              <div className="section__title__heading">
                <h3>Book Nikki for Your Event</h3>
              </div>
              <div className="section__title__text">
                <p>Ready to bring transformation to your organization? Let&apos;s start the conversation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="contact__input__wrapper contact__grident__bg">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        type="text"
                        name="organization"
                        placeholder="Organization Name"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        type="date"
                        name="eventDate"
                        placeholder="Event Date"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="Keynote">Keynote Presentation</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Panel">Panel Discussion</option>
                      <option value="Breakout">Breakout Session</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        type="text"
                        name="audience"
                        placeholder="Expected Audience Size"
                        value={formData.audience}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, goals, and how Nikki can help transform your audience..."
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="contact__button text-center">
                      <button type="submit" className="default__button">
                        SEND SPEAKING INQUIRY
                      </button>
                      {status && <p className="form-message sp_top_20">{status}</p>}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPrimary;