import React from "react";
import OurProductsData from '../db/OurProductsData';
import OurProductsCard from "./home-sections/products-card/OurProductsCard";
import styles from './styles/OurProductsSection.module.scss';

export default function OurProductsSection() {
  const OurProducts = OurProductsData()
  return (
    <div>
      <div className={styles.ourProducts}>
        <div className={styles.items}>
          {OurProducts?.map((e) => (
            <OurProductsCard key={e.id} imgSrc={e.imgSrc}
              title={e.title} description={e.description}
              price={e.price} weight={e.weight} />
          ))}
        </div>
      </div>
    </div>
  );
}
