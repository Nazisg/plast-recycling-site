import React from "react";
import styles from "../layout/styles/PageHeader.module.scss";
import nextArrow from "../assets/icons/next-arrow.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PageHeader({ title, page_name }) {
  const { t } = useTranslation();

  return (
    <div className={styles.pageHeader}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <div className={styles.subLink}>
          <Link to="/">{t("pageHead.home")}</Link>
          <img src={nextArrow} alt="next-arrow" />
          <span>{page_name}</span>
        </div>
      </div>
    </div>
  );
}
