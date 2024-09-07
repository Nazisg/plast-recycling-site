import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../layout/PageHeader';
import ContactSection from '../layout/home-sections/ContactSection';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader title={t("pageHead.contact.title")}
        page_name={t("pageHead.contact.pageName")} />
      <ContactSection />
    </div>
  )
}
