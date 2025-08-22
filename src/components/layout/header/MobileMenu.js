"use effect";

import LogoMobile from "./LogoMobile";
import NavbarMobileSimple from "./NavbarMobileSimple";

const MobileMenu = () => {
  return (
    <div className="offcanvas__header">
      <div className="offcanvas__inner">
        <LogoMobile />
        <NavbarMobileSimple />
      </div>
    </div>
  );
};

export default MobileMenu;
