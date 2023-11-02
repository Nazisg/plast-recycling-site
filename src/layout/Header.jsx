import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import search from "../assets/icons/search.svg";
import { useTranslation } from "react-i18next";
import MenuData from "../db/MenuData";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Header() {
  const pathLocation = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathLocation.pathname]);

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
    if (window.scrollY >= 40) {
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
              <NavLink activeclassname="active" to={link.to}>
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
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 320 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              x: 320,
              transition: {
                duration: 0.5,
              },
            }}
            className="burger-menu"
          >
            <div className="menu-top">
              <GrClose onClick={CloseMenu} className="closebtn" />
              <div className="searchLangBtns">
                <Link to="/Search">
                  <img src={search} alt="search" onClick={CloseMenu} />
                </Link>
                <div className="lang" onClick={() => toggleLanguage("az")}>
                  {t("header.btn")}
                </div>
              </div>
            </div>
            <motion.div className="menulist">
              {navLinks.map((link) => (
                <React.Fragment key={link.to}>
                  <NavLink
                    activeclassname="active"
                    to={link.to}
                    onClick={CloseMenu}
                  >
                    {link.text}
                  </NavLink>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </header>
  );
}
