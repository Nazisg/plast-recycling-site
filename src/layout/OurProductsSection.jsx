import React from "react";
import styles from "./styles/OurProductsSection.module.scss";
import OurProductsData from "../db/OurProductsData";
import OurProductsCard from "./home-sections/products-card/OurProductsCard";
import { motion } from "framer-motion";

export default function OurProductsSection() {
  const OurProducts = OurProductsData();
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div>
      <div className={styles.ourProducts}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className={styles.items}
        >
          {OurProducts?.map((e) => (
            <OurProductsCard
              key={e.id}
              imgSrc={e.imgSrc}
              title={e.title}
              description={e.description}
              price={e.price}
              weight={e.weight}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
