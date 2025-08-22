import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const NavbarMobileSimple = () => {
  const mobileItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT NIKKI", 
      path: "/about",
    },
    {
      name: "SPEAKING",
      path: "/speaking",
    },
    {
      name: "THE AUDACITY BLUEPRINT",
      path: "/audacity-blueprint",
    },
    {
      name: "COURSES & RETREATS",
      path: "/courses-retreats",
    },
    {
      name: "RIVETING REFLECTIONS",
      path: "/blogs",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <div className="offcanvas__menu">
      <nav className="offcanvas__menu__wrapper">
        <ul className="offcanvas__menu__list">
          {mobileItems.map((item, index) => (
            <li key={index} className="offcanvas__menu__item">
              <Link href={item.path} className="offcanvas__menu__link">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="offcanvas__menu__item offcanvas__menu__button">
            <ButtonPrimary
              text="START YOUR JOURNEY"
              path="/contact"
              button="primary"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobileSimple;