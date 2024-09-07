import React from "react";
import WeBuyData from "../../db/WeBuyData";
import WeBuyCard from "./products-card/WeBuyCard";
import styles from "./styles/WeBuySection.module.scss";

export default function WeBuySection() {
  const weBuyProducts = WeBuyData()
  return (
    <div className={styles.weItems}>
      <div className={styles.items}>
        {weBuyProducts?.map((e) => (
          <WeBuyCard key={e.id} title={e.title} imgSrc={e.imgSrc}
            price={e.price} weight={e.weight} description={e.description} />
        ))}
      </div>
    </div>
  );
}
