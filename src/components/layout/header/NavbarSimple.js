import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const NavbarSimple = () => {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "SPEAKING", 
      path: "/speaking",
    },
    {
      name: "BOOK",
      path: "/audacity-blueprint",
    },
    {
      name: "COURSES",
      path: "/courses-retreats", 
    },
    {
      name: "BLOG",
      path: "/blogs",
    },
  ];

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={pathname === item.path ? "active" : ""}>
                <Link className="headerarea__has__dropdown" href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="headerarea__button__mobile">
              <ButtonPrimary
                text="CONNECT"
                path="/contact"
                button="primary"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarSimple;