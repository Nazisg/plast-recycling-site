import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import search from "../assets/icons/search-green.svg";
import OurProductsData from "../db/OurProductsData";
import styles from "./styles/Search.module.scss";

export default function Search() {
  const { t } = useTranslation();
  const OurProducts = OurProductsData();

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
          <p className={styles.resultText}>
            <span>“{inputValue}”</span>
            {t("pageHead.search.p")}
          </p>
          <div className={styles.items}>
            {inputValue.length > 0 ? (
              filterData.map((e) => (
                <div className={styles.item} key={e.id}>
                  <img className={styles.imgBorder} src={e.imgSrc} alt={e.title} />
                  <h5>{e.title}</h5>
                  <p>{e.description}</p>
                </div>
              ))
            ) : (
              OurProducts.map((e) => (
                <div className={styles.item} key={e.id}>
                  <img className={styles.imgBorder} src={e.imgSrc} alt={e.title} />
                  <h5>{e.title}</h5>
                  <p>{e.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
