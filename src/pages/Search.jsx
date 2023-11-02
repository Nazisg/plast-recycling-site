import React, { useEffect, useState } from "react";
import styles from "./styles/Search.module.scss";
import search from "../assets/icons/search-green.svg";
import OurProductsData from "../db/OurProductsData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Search() {
  const OurProducts = OurProductsData();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const filteredData = OurProducts.filter((item) =>
      Object.values(item)
        .join("")
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );
    setFilterData(filteredData);
  }, [inputValue]);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <div>
      <div className={styles.search}>
        <div className={styles.text}>
          <h1>{t("pageHead.search.h1")} </h1>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder={t("pageHead.search.placeh")}
              onChange={InputChange}
              value={inputValue}
            />
            <img src={search} alt="Search Icon" />
          </div>
        </div>
      </div>
      <div className={styles.resultBox}>
        <div className={styles.result}>
          {inputValue.length > 0 ? (
            <p className={styles.resultText}>
              <span>“{inputValue}”</span>
              {t("pageHead.search.p")}
            </p>
          ) : null}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className={styles.items}
          >
            {inputValue.length > 0
              ? filterData.map((e) => (
                  <motion.div
                    variants={item}
                    className={styles.item}
                    key={e.id}
                  >
                    <img
                      className={styles.imgBorder}
                      src={e.imgSrc}
                      alt={e.title}
                    />
                    <h5>{e.title}</h5>
                    <p>{e.description}</p>
                  </motion.div>
                ))
              : OurProducts.map((e) => (
                  <motion.div
                    variants={item}
                    className={styles.item}
                    key={e.id}
                  >
                    <img
                      className={styles.imgBorder}
                      src={e.imgSrc}
                      alt={e.title}
                    />
                    <h5>{e.title}</h5>
                    <p>{e.description}</p>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
