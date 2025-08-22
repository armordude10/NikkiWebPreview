"use client";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useState } from "react";
import retreatImage from "@/assets/img/about/about__3.png"; // placeholder image

const CoursesRetreatsPrimary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "All Programs",
    message: "I'm interested in being notified about upcoming courses and retreats...",
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
        setStatus("Thank you! You'll be the first to know about our upcoming programs.");
        setFormData({
          name: "",
          email: "",
          interest: "All Programs",
          message: "I'm interested in being notified about upcoming courses and retreats...",
        });
      } else {
        setStatus("Failed to send request.");
      }
    } catch (error) {
      setStatus("Failed to send request.");
    }
  };

  return (
    <div className="service sp_top_140 sp_bottom_140">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center sp_bottom_100">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__content" data-aos="fade-up" data-aos-duration="1500">
              <div className="section__title section__title--2">
                <div className="section__title__button">
                  <span className="text__gradient">Coming Soon</span>
                </div>
                <div className="section__title__heading">
                  <h2>Transformational Courses & Immersive Retreats</h2>
                </div>
                <div className="section__title__text">
                  <p>
                    Deep-dive experiences designed to help you fully embody audacious living. 
                    From intimate workshops to transformational retreats, these programs will 
                    take you beyond inspiration to lasting transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__img" data-aos="fade-up" data-aos-duration="2000">
              <Image src={retreatImage} alt="Transformational Retreat Experience" />
            </div>
          </div>
        </div>

        {/* Upcoming Programs */}
        <div className="row sp_bottom_80">
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__heading">
                <h3>Upcoming Programs</h3>
              </div>
              <div className="section__title__text">
                <p>Immersive experiences for deeper transformation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single service__single--2" data-aos="fade-up" data-aos-duration="1500">
              <div className="service__icon">
                <i className="icofont-book-alt text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>The Audacity Blueprint Masterclass</h4>
                <p>
                  A comprehensive 8-week online course diving deep into the principles 
                  of audacious living. Includes weekly live sessions, practical exercises, 
                  and a supportive community of changemakers.
                </p>
                <div className="service__features">
                  <ul>
                    <li>8 live weekly sessions with Nikki</li>
                    <li>Comprehensive workbook and resources</li>
                    <li>Private community access</li>
                    <li>Individual coaching session</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single service__single--2" data-aos="fade-up" data-aos-duration="1800">
              <div className="service__icon">
                <i className="icofont-mountain text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Reclaim Your Audacity Retreat</h4>
                <p>
                  A transformational 3-day immersive retreat combining personal development, 
                  creative expression, and sisterhood. Limited to 25 participants for 
                  intimate, life-changing experiences.
                </p>
                <div className="service__features">
                  <ul>
                    <li>3 days of transformational workshops</li>
                    <li>Creative expression sessions</li>
                    <li>Gourmet meals and luxury accommodations</li>
                    <li>Ongoing support network</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single service__single--2" data-aos="fade-up" data-aos-duration="2100">
              <div className="service__icon">
                <i className="icofont-leadership text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Audacious Leader Intensive</h4>
                <p>
                  For executives and entrepreneurs ready to lead with vulnerability and strength. 
                  A small-group intensive focused on authentic leadership, difficult conversations, 
                  and creating cultures of audacity.
                </p>
                <div className="service__features">
                  <ul>
                    <li>Small group format (max 12 leaders)</li>
                    <li>Leadership assessment and 360 feedback</li>
                    <li>Personalized action planning</li>
                    <li>6-month follow-up support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="service__single service__single--2" data-aos="fade-up" data-aos-duration="2400">
              <div className="service__icon">
                <i className="icofont-heart text__gradient"></i>
              </div>
              <div className="service__content">
                <h4>Self-Worth Revolution Workshop</h4>
                <p>
                  A one-day intensive workshop focused specifically on building unshakeable 
                  self-worth. Perfect for those ready to break free from imposter syndrome 
                  and step fully into their power.
                </p>
                <div className="service__features">
                  <ul>
                    <li>Full-day transformational workshop</li>
                    <li>Take-home resources and toolkit</li>
                    <li>Group coaching and peer support</li>
                    <li>30-day follow-up check-in</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Access Form */}
        <div className="row sp_top_100">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_50">
              <div className="section__title__heading">
                <h3>Be the First to Know</h3>
              </div>
              <div className="section__title__text">
                <p>Join our priority list to get early access, special pricing, and exclusive bonuses</p>
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
                  <div className="col-xl-12">
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="All Programs">All Programs</option>
                      <option value="Masterclass">Audacity Blueprint Masterclass</option>
                      <option value="Retreat">Reclaim Your Audacity Retreat</option>
                      <option value="Leadership">Audacious Leader Intensive</option>
                      <option value="Workshop">Self-Worth Revolution Workshop</option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're most excited about..."
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="contact__button text-center">
                      <button type="submit" className="default__button">
                        GET EARLY ACCESS
                      </button>
                      {status && <p className="form-message sp_top_20">{status}</p>}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row sp_top_100">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_50">
              <div className="section__title__heading">
                <h3>Early Access Benefits</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="feature__icon">
                <i className="icofont-price text__gradient"></i>
              </div>
              <h5>Special Pricing</h5>
              <p>Early bird discounts and payment plans available exclusively for priority list members</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1800">
              <div className="feature__icon">
                <i className="icofont-gift text__gradient"></i>
              </div>
              <h5>Exclusive Bonuses</h5>
              <p>Special resources and bonus content available only to early registrants</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="2100">
              <div className="feature__icon">
                <i className="icofont-calendar text__gradient"></i>
              </div>
              <h5>First Choice</h5>
              <p>Priority registration and preferred scheduling for all programs and retreats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesRetreatsPrimary;