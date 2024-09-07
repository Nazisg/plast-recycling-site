import React from "react";
import { useTranslation } from "react-i18next";
import DevicesData from "../db/DevicesData";
import DevicesCard from "../layout/home-sections/products-card/DevicesCard";
import PageHeader from "../layout/PageHeader";
import styles from "./styles/Devices.module.scss";

export default function Devices() {
  const { t } = useTranslation();
  const DevicesProducts = DevicesData();

  return (
    <div>
      <PageHeader
        title={t("pageHead.devices.title")}
        page_name={t("pageHead.devices.pageName")}
      />
      <div className={styles.devicesItems}>
        <div className={styles.items}>
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
        </div>
      </div>
    </div>
  );
}
