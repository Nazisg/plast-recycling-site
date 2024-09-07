import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import MenuData from "../db/MenuData";
import "./styles/Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  const CloseMenu = () => {
    setIsOpen(false);
  };
  const navLinks = MenuData();
  const [color, setColor] = useState(false);
  const [lang, setLang] = useState("az");
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    if (lang === "az") {
      changeLanguage("en");
    } else {
      changeLanguage("az");
    }
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <header className={color ? "header headerBg" : "header"}>
      <nav>
        <NavLink to="/">
          <img className="logo" src={logo} alt="plast-logo" />
        </NavLink>
        <div className="menu">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.to}>
              <NavLink activeClassName="active" to={link.to}>
                {link.text}
              </NavLink>
              {index < navLinks.length - 1 && <div className="circle"></div>}
            </React.Fragment>
          ))}
        </div>
        <RxHamburgerMenu className="menu-svg" onClick={toggleMenu} />
        <div className="searchLangBtns">
          <Link to="/Search">
            <img src={search} alt="search" />
          </Link>
          <div className="lang" onClick={() => toggleLanguage("az")}>
            {t("header.btn")}
          </div>
        </div>
      </nav>
      {isOpen ? (
        <div className="burger-menu">
          <div className="menu-top">
            <GrClose
              onClick={CloseMenu}
              className="closebtn"
            />
            <div className="searchLangBtns">
              <Link to="/Search">
                <img src={search} alt="search" onClick={CloseMenu} />
              </Link>
              <div className="lang" onClick={() => toggleLanguage("az")}>
                {t("header.btn")}
              </div>
            </div>
          </div>
          <div className="menulist">
            {navLinks.map((link) => (
              <React.Fragment key={link.to}>
                <NavLink
                  activeClassName="active"
                  to={link.to}
                  onClick={CloseMenu}
                >
                  {link.text}
                </NavLink>
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        null
      )}
    </header>
  );
}
