import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../layout/PageHeader";
import WeBuySection from "../layout/home-sections/WeBuySection";
import styles from "./styles/WeBuy.module.scss";

export default function WeBuy() {
  const { t } = useTranslation();

  return (
    <div className={styles.weBuy}>
      <PageHeader title={t("pageHead.weBuy.title")}
        page_name={t("pageHead.weBuy.pageName")} />
      <WeBuySection />
    </div>
  );
}
