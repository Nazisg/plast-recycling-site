import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styles from './styles/OurProductsCard.module.scss';
export default function OurProductsCard({
  imgSrc,
  title,
  description,
  price,
  weight,
}) {
  const pathLocation = useLocation();
  const { t } = useTranslation()
  return (
    <div className={pathLocation.pathname === '/' ? "darkCard" : "ligthCard"}>
      <img className={styles.imgBorder} src={imgSrc} />
      <h5>{title}</h5>
      <p>{description}</p>
      <div className={styles.subBox}>
        <button className={styles.submit}>{t("ourProductsData.btn")}</button>
        <div className={styles.priceBox}>
          {price} / {weight}
        </div>
      </div>
    </div>
  );
}
