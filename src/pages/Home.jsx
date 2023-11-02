import React from "react";
import styles from "./styles/Home.module.scss";
import WeBuySection from "../layout/home-sections/WeBuySection";
import AboutSection from "../layout/home-sections/AboutSection";
import BgSection from "../layout/home-sections/BgSection";
import ContactSection from "../layout/home-sections/ContactSection";
import polygonBlack from "../assets/icons/polygon-black.svg";
import polygonWhite from "../assets/icons/polygon-white.svg";
import Carousel from "../components/Carousel";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <BgSection />
      <div className={styles.dark}>
        <h2>
          {t("homeHead.we.h2")} <span> {t("homeHead.we.span")}</span>!
        </h2>
        <img className={styles.svg} src={polygonBlack} alt="polygon-black" />
      </div>
      <WeBuySection />
      <div className={styles.ligth}>
        <h2>
          {t("homeHead.our.h2")}
          <span> {t("homeHead.our.span")}</span>.
        </h2>
        <img className={styles.svg} src={polygonWhite} alt="polygon-black" />
      </div>
      <Carousel />
      <div className={styles.dark}>
        <h2>
          {t("homeHead.about.h2")} <span> {t("homeHead.about.span")}</span>.
        </h2>
        <img className={styles.svg} src={polygonBlack} alt="polygon-black" />
      </div>
      <AboutSection />
      <div className={styles.ligth}>
        <h2>
          {t("homeHead.contact.h2")}
          <span> {t("homeHead.contact.span")}</span>.
        </h2>
        <img className={styles.svg} src={polygonWhite} alt="polygon-black" />
      </div>
      <ContactSection />
    </div>
  );
}
