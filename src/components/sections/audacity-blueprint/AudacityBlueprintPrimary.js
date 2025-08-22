import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import bookCoverImage from "@/assets/img/about/about__1.png"; // placeholder image

const AudacityBlueprintPrimary = () => {
  return (
    <div className="about sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about__img" data-aos="fade-up" data-aos-duration="1500">
              <Image src={bookCoverImage} alt="The Audacity Blueprint Book Cover" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about__inner" data-aos="fade-up" data-aos-duration="2000">
              <div className="section__title section__title--2 sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">Coming Soon</span>
                </div>
                <div className="section__title__heading">
                  <h2>The Audacity Blueprint: How Audacity Rebuilds Everything</h2>
                </div>
                <div className="section__title__text">
                  <p>
                    A revolutionary guide that transforms how you see yourself, your potential, and your power to create lasting change. 
                    This isn&apos;t just a book—it&apos;s your roadmap to reclaiming audacity as your birthright.
                  </p>
                </div>
              </div>

              <div className="about__content sp_bottom_30">
                <h4 className="sp_bottom_20">Key Themes</h4>
                <div className="about__list">
                  <ul>
                    <li><strong>Self-Worth:</strong> Discover that you are already enough—you always have been</li>
                    <li><strong>Legacy:</strong> Learn how what you build today ripples through generations</li>
                    <li><strong>Audacity:</strong> Embrace your power to own your space without asking permission</li>
                    <li><strong>Reinvention:</strong> Understand it&apos;s never too late to start over—boldly</li>
                  </ul>
                </div>
              </div>

              <div className="about__content sp_bottom_30">
                <h4 className="sp_bottom_20">What You&apos;ll Get</h4>
                <div className="about__text">
                  <p>
                    <strong>The Book:</strong> Deep insights, personal stories, and transformational frameworks 
                    that will shift how you see yourself and your potential.
                  </p>
                  <p>
                    <strong>The Workbook:</strong> Practical exercises, reflection prompts, and action steps 
                    to help you implement the blueprint in your own life.
                  </p>
                </div>
              </div>

              <div className="about__button">
                <ButtonPrimary text="GET NOTIFIED WHEN AVAILABLE" path="/contact" />
                <a href="/download-sample.pdf" className="download__link sp_left_20">
                  Download Preview Sample
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row sp_top_80">
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__heading">
                <h3>Early Access Benefits</h3>
              </div>
              <div className="section__title__text">
                <p>Be among the first to experience The Audacity Blueprint and receive exclusive bonuses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row sp_top_50">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="feature__icon sp_bottom_20">
                <i className="icofont-gift text__gradient"></i>
              </div>
              <h5>Exclusive Bonus Content</h5>
              <p>Access to bonus chapters and exclusive video content not available elsewhere</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="1800">
              <div className="feature__icon sp_bottom_20">
                <i className="icofont-users-alt-4 text__gradient"></i>
              </div>
              <h5>Private Community Access</h5>
              <p>Join an exclusive community of audacious leaders implementing the blueprint</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature__card text-center" data-aos="fade-up" data-aos-duration="2100">
              <div className="feature__icon sp_bottom_20">
                <i className="icofont-price text__gradient"></i>
              </div>
              <h5>Pre-Order Discount</h5>
              <p>Special pricing for early supporters who believe in the power of audacity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudacityBlueprintPrimary;