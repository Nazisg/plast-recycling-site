import React from "react";
import styles from "../../../pages/styles/Devices.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function DevicesCard({ price, imgSrc, title, description }) {
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
    <motion.div variants={item} className={styles.item}>
      <div className={styles.price}>{price}</div>
      <img className={styles.img} src={imgSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnBox}>
        <button>{t("devicesData.btn")}</button>
        <button className={styles.submit}>{t("devicesData.btnSub")}</button>
      </div>
    </motion.div>
  );
}
