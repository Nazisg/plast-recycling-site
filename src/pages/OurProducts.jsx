import React from "react";
import PageHeader from "../layout/PageHeader";
import OurProductsSection from "../layout/OurProductsSection";
import { useTranslation } from "react-i18next";

export default function OurProducts() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        page_name={t("pageHead.ourPro.pageName")}
        title={t("pageHead.ourPro.title")}
      />
      <OurProductsSection />
    </div>
  );
}
