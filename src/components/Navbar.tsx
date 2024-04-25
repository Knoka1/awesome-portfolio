import { NavLink } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <NavLink
        to="/"
        className="md:w-10 md:h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md sm:w-8 sm:h-8"
      >
        <p className="blue-gradient_text">AC</p>
      </NavLink>
      <nav className="flex md:text-lg gap-7 md:font-medium sm:text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("components.navbar.about")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("components.navbar.projects")}
        </NavLink>
        <LanguageSelector />
      </nav>
    </header>
  );
};

export default Navbar;
