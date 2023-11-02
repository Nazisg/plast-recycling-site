import React from "react";
import styles from "./styles/WeBuySection.module.scss";
import WeBuyData from "../../db/WeBuyData";
import WeBuyCard from "./products-card/WeBuyCard";
import { motion } from "framer-motion";

export default function WeBuySection() {
  const weBuyProducts = WeBuyData();
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={styles.weItems}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={styles.items}
      >
        {weBuyProducts?.map((e) => (
          <WeBuyCard
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
  );
}
