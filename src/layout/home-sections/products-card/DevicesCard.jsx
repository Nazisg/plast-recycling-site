import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../../pages/styles/Devices.module.scss";

export default function DevicesCard({
  price,
  imgSrc,
  title,
  description,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.item}>
      <div className={styles.price}>
        {price}
      </div>
      <img className={styles.img} src={imgSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnBox}>
        <button>{t("devicesData.btn")}</button>
        <button className={styles.submit}>{t("devicesData.btnSub")}</button>
      </div>
    </div>
  );
}
