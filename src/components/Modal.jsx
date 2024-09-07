import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arrow from "../assets/icons/arrow-down-green.svg";
import close from "../assets/icons/close.svg";
import ContextApi from "../context-api/context";
import styles from "./styles/Modal.module.scss";

export default function Modal() {
  const { t } = useTranslation();
  const contentData = [
    t("modal.data.category1"),
    t("modal.data.category2"),
    t("modal.data.category3"),
    t("modal.data.category4"),
  ];
  const { setIsOpen } = useContext(ContextApi);
  const [showOptions, setShowOptions] = useState();
  const [selectText, setSelectText] = useState(t("modal.select"));
  const [modalData, setModalData] = useState({
    category: "",
    weight: "",
    fullName: "",
    contactNumber: "",
  });

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSelect = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (e) => {
    setShowOptions(false);
    setSelectText(e.target.outerText);
    setModalData({
      ...modalData,
      category: e.target.outerText,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("modalData");
    const existingData = storedData ? JSON.parse(storedData) : [];
    const allData = [...existingData, modalData];
    localStorage.setItem("modalData", JSON.stringify(allData));

    setModalData({
      category: "",
      weight: "",
      fullName: "",
      contactNumber: "",
    });
    setSelectText(t("modal.select"));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("modalData");
    if (storedData) {
      setModalData(JSON.parse(storedData));
      setSelectText(modalData.category || t("modal.select"));
    }
  }, []);

  return (
    <div className={styles.modalBg} onClick={handleClose}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.head}>
          <h2>{t("modal.h2")}</h2>
          <div className={styles.closebtn} onClick={handleClose}>
            <img src={close} alt="Close" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.dropdown}>
            <div className={styles.select} onClick={handleSelect}>
              <span
                className={
                  selectText !== t("modal.select") ? styles.selectedOption : ""
                }
              >
                {selectText}
              </span>
              <img src={arrow} alt="Arrow" />
            </div>
            {showOptions ? (
              <div className={styles.content}>
                {contentData.map((e) => (
                  <React.Fragment key={e}>
                    <span onClick={selectOption}>{e}</span>
                  </React.Fragment>
                ))}
              </div>
            ) : null}
          </div>
          <input
            type="text"
            name="weight"
            value={modalData.weight}
            onChange={handleInputChange}
            placeholder={t("modal.inputPlaceh.weight")}
          />
          <input
            type="text"
            name="fullName"
            value={modalData.fullName}
            onChange={handleInputChange}
            placeholder={t("modal.inputPlaceh.fullName")}
          />
          <input
            type="text"
            name="contactNumber"
            value={modalData.contactNumber}
            onChange={handleInputChange}
            placeholder={t("modal.inputPlaceh.number")}
          />
          <button type="submit" className={styles.submit}>
            {t("modal.btn")}
          </button>
        </form>
      </div>
    </div>
  );
}