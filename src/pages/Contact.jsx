import React from "react";
import PageHeader from "../layout/PageHeader";
import ContactSection from "../layout/home-sections/ContactSection";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("pageHead.contact.title")}
        page_name={t("pageHead.contact.pageName")}
      />
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}
