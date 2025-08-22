import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import aboutImage from "@/assets/img/about/about__2.png";
import mediaImage1 from "@/assets/img/blog/blog__1.png";
import mediaImage2 from "@/assets/img/blog/blog__2.png";
import mediaImage3 from "@/assets/img/blog/blog__3.png";

const AboutPrimary = () => {
  const mediaFeatures = [
    {
      id: 1,
      title: "Featured in Entrepreneur Magazine",
      description: "How Art Can Transform Nonprofit Leadership",
      image: mediaImage1,
      date: "2023"
    },
    {
      id: 2,
      title: "TEDx Speaker",
      description: "The Power of Audacious Authenticity",
      image: mediaImage2,
      date: "2023"
    },
    {
      id: 3,
      title: "Podcast Guest",
      description: "Leading with Vulnerability on The Leadership Hour",
      image: mediaImage3,
      date: "2023"
    }
  ];

  return (
    <div className="about sp_top_140 sp_bottom_140">
      <div className="container">
        {/* Personal Story Section */}
        <div className="row align-items-center sp_bottom_100">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about__img" data-aos="fade-up" data-aos-duration="1500">
              <Image 
                src={aboutImage} 
                alt="Nikki Romain" 
                width={600}
                height={700}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about__content" data-aos="fade-up" data-aos-duration="2000">
              <div className="section__title section__title--2">
                <div className="section__title__button">
                  <span className="text__gradient">My Story</span>
                </div>
                <div className="section__title__heading">
                  <h2>From Performer to Empowerment Advocate</h2>
                </div>
              </div>
              
              <div className="about__text">
                <p>
                  <strong>I didn&apos;t always know I was audacious.</strong> For years, I performed on stages across the country, 
                  but offstage, I struggled with the same self-doubt that many of us face. I questioned my worth, 
                  my abilities, and my right to take up space.
                </p>
                <p>
                  The transformation began when I realized that my art wasn&apos;t just entertainment—it was healing. 
                  It was a tool for connection, empowerment, and change. That revelation led me to found ART Inc., 
                  a nonprofit organization dedicated to using creativity as a catalyst for personal and community transformation.
                </p>
                <p>
                  <strong>Today, I stand before audiences not as someone who has it all figured out, but as someone who 
                  has learned that audacity isn&apos;t about perfection—it&apos;s about showing up authentically</strong>, owning your 
                  story, and using your voice to lift others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values and Mission */}
        <div className="row sp_bottom_100">
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__heading">
                <h3>My Core Values</h3>
              </div>
              <div className="section__title__text">
                <p>These principles guide everything I do, from the stage to the boardroom to my living room</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="value__card text-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="value__icon">
                <i className="icofont-heart text__gradient"></i>
              </div>
              <h5>Authenticity Over Perfection</h5>
              <p>I believe in showing up as your whole self, flaws and all. Vulnerability is not weakness—it&apos;s the birthplace of courage.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="value__card text-center" data-aos="fade-up" data-aos-duration="1800">
              <div className="value__icon">
                <i className="icofont-users-alt-4 text__gradient"></i>
              </div>
              <h5>Community Over Competition</h5>
              <p>There&apos;s room for all of us to shine. I&apos;m committed to lifting others as I rise and creating spaces where everyone can thrive.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="value__card text-center" data-aos="fade-up" data-aos-duration="2100">
              <div className="value__icon">
                <i className="icofont-rocket text__gradient"></i>
              </div>
              <h5>Impact Over Income</h5>
              <p>While sustainability matters, I measure success by transformation—the lives changed, the barriers broken, the dreams realized.</p>
            </div>
          </div>
        </div>

        {/* Personal Bio in First Person */}
        <div className="row sp_top_100 sp_bottom_80">
          <div className="col-xl-12">
            <div className="about__bio">
              <div className="section__title text-center sp_bottom_50">
                <div className="section__title__heading">
                  <h3>Who I Am Today</h3>
                </div>
              </div>
              
              <div className="about__bio__content">
                <p>
                  <strong>I&apos;m Nikki Romain</strong>—wife, mother, CEO, speaker, and recovering perfectionist. I&apos;ve spent over 
                  25 years learning that leadership isn&apos;t about having all the answers; it&apos;s about being brave 
                  enough to ask the right questions and vulnerable enough to share the journey.
                </p>
                
                <p>
                  As the founder and CEO of ART Inc., I&apos;ve had the privilege of witnessing thousands of people 
                  discover their own audacity through creativity and community. I&apos;ve learned that transformation 
                  happens not in the spotlight, but in the small, everyday moments when we choose courage over comfort.
                </p>
                
                <p>
                  <strong>I&apos;m currently navigating perimenopause</strong> (yes, I&apos;m talking about it openly because someone 
                  should), raising children who challenge me daily to practice what I preach, and building a legacy 
                  that extends far beyond my own lifetime.
                </p>
                
                <p>
                  <strong>My mission is simple:</strong> to help you remember that audacity is your birthright. You don&apos;t need 
                  permission to be powerful, to take up space, or to create the change you want to see in the world. 
                  You just need the courage to start.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Media Highlights */}
        <div className="row sp_top_100">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_80">
              <div className="section__title__heading">
                <h3>Media Highlights & Recognition</h3>
              </div>
              <div className="section__title__text">
                <p>Sharing the message of audacious living across platforms and communities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {mediaFeatures.map((feature, idx) => (
            <div key={feature.id} className="col-xl-4 col-lg-4 col-md-6">
              <div 
                className="media__feature__card" 
                data-aos="fade-up" 
                data-aos-duration={1500 + (idx * 300)}
              >
                <div className="media__feature__img">
                  <Image src={feature.image} alt={feature.title} />
                  <div className="media__feature__year">{feature.date}</div>
                </div>
                <div className="media__feature__content">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row sp_top_100">
          <div className="col-xl-12">
            <div className="about__cta text-center">
              <h4 className="sp_bottom_30">Ready to Embrace Your Audacity?</h4>
              <p className="sp_bottom_30">
                Whether you&apos;re looking to book me for your next event, dive deeper into The Audacity Blueprint, 
                or simply connect with someone who believes in your potential—I&apos;m here for it.
              </p>
              <div className="about__cta__buttons">
                <ButtonPrimary text="BOOK ME TO SPEAK" path="/speaking" />
                <ButtonPrimary text="LET&apos;S CONNECT" path="/contact" button="outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPrimary;