import React, { useState } from "react";
import styles from "./styles/ContactSection.module.scss";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const pathLocation = useLocation();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      mobileNumber,
      message,
    };

    const storedSubmissions = localStorage.getItem("formSubmissions");
    const existingSubmissions = storedSubmissions
      ? JSON.parse(storedSubmissions)
      : [];

    const submissions = [...existingSubmissions, formData];
    localStorage.setItem("formSubmissions", JSON.stringify(submissions));

    setName("");
    setMobileNumber("");
    setMessage("");
  };
  return (
    <div className={pathLocation.pathname === "/" ? "darkForm" : "lightForm"}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>{t("contact.name")}</label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder=" "
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <label>{t("contact.number")}</label>
            </div>
          </div>
          <div className={styles.textGroup}>
            <textarea
              cols="0"
              rows="7"
              placeholder=" "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label>{t("contact.message")}</label>
          </div>
          <button className={styles.submit} type="submit">
            {t("contact.btn")}
          </button>
        </form>
      </div>
    </div>
  );
}
