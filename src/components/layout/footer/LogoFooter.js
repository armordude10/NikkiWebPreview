import Image from "next/image";
import Link from "next/link";
import logoImag1 from "@/assets/img/logo/Logo_1.png";
import logoImag2 from "@/assets/img/logo/Logo_2.png";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
        // style={{ zIndex: 10 }}
      >
        <div className="footer__logo">
          {style === 2 ? (
            <>
              <Image src={logoImag1} alt="" className="logo-image1" />
              <Image src={logoImag2} alt="" className="logo-image2" />
            </>
          ) : (
            <Image src={logoImag1} alt="" />
          )}
        </div>
        <div className="footer__text">
          <p>
            Transformational leader, empowerment advocate, and visionary speaker empowering you to claim your audacity as your birthright. From Peoria roots to national impact.
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://www.facebook.com/nikkiromain">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/rivetingnikki">
                <i className="icofont-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/nikkiromain">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@nikkiromain">
                <i className="icofont-youtube-play"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
