import React from 'react';
import { useTranslation } from "react-i18next";
import OurProductsSection from '../layout/OurProductsSection';
import PageHeader from '../layout/PageHeader';

export default function OurProducts() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader page_name={t("pageHead.ourPro.pageName")}
        title={t("pageHead.ourPro.title")} />
      <OurProductsSection />
      <OurProductsSection />
    </div>
  )
}
