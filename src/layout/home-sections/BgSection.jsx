import React from "react";
import styles from "./styles/BgSection.module.scss";
import down from "../../assets/icons/down.svg";
import ContextApi from "../../context-api/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function BgSection() {
  const { t } = useTranslation();

  const { setIsOpen } = useContext(ContextApi);
  const apply = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <div className={styles.bg}>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.container}
      >
        <span>{t("bgSection.span")}</span>
        <h1>{t("bgSection.h1")}</h1>
        <div></div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          onClick={apply}
        >
          {t("bgSection.btn")}
        </motion.button>
        <img
          className={styles.down}
          src={down}
          alt="down-svg"
          onClick={handleScrollClick}
        />
      </motion.div>
    </div>
  );
}
