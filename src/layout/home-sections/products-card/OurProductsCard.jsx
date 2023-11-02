import React from "react";
import styles from "./styles/OurProductsCard.module.scss";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function OurProductsCard({
  imgSrc,
  title,
  description,
  price,
  weight,
}) {
  const pathLocation = useLocation();
  const { t } = useTranslation();
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <motion.div
      variants={item}
      className={pathLocation.pathname === "/" ? "darkCard" : "ligthCard"}
    >
      <img className={styles.imgBorder} src={imgSrc} />
      <h5>{title}</h5>
      <p>{description}</p>
      <div className={styles.subBox}>
        <button className={styles.submit}>{t("ourProductsData.btn")}</button>
        <div className={styles.priceBox}>
          {price} / {weight}
        </div>
      </div>
    </motion.div>
  );
}
