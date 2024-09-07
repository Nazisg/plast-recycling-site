import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/WeBuySection.module.scss";

export default function WeBuyCard({
  price,
  weight,
  imgSrc,
  title,
  description,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.item}>
      <div className={styles.price}>
        {price} /{weight}
      </div>
      <img className={styles.img} src={imgSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnBox}>
        <button>{t("weBuyData.btn")}</button>
        <button className={styles.submit}>{t("weBuyData.btnSub")}</button>
      </div>
    </div>
  );
}
