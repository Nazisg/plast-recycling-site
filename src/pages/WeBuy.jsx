import React from "react";
import PageHeader from "../layout/PageHeader";
import WeBuySection from "../layout/home-sections/WeBuySection";
import { useTranslation } from "react-i18next";

export default function WeBuy() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("pageHead.weBuy.title")}
        page_name={t("pageHead.weBuy.pageName")}
      />
      <WeBuySection />
    </div>
  );
}
