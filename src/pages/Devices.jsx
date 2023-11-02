import React from "react";
import PageHeader from "../layout/PageHeader";
import styles from "./styles/Devices.module.scss";
import DevicesData from "../db/DevicesData";
import DevicesCard from "../layout/home-sections/products-card/DevicesCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Devices() {
  const { t } = useTranslation();
  const DevicesProducts = DevicesData();
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div>
      <PageHeader
        title={t("pageHead.devices.title")}
        page_name={t("pageHead.devices.pageName")}
      />
      <div className={styles.devicesItems}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className={styles.items}
        >
          {DevicesProducts?.map((e) => (
            <DevicesCard
              key={e.id}
              title={e.title}
              imgSrc={e.imgSrc}
              price={e.price}
              weight={e.weight}
              description={e.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
