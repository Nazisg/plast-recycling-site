import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import down from "../../assets/icons/down.svg";
import ContextApi from "../../context-api/context";
import styles from "./styles/BgSection.module.scss";

export default function BgSection() {
  const { t } = useTranslation();

  const { setIsOpen } = useContext(ContextApi);
  const apply = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden";
  }
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <span>{t("bgSection.span")}</span>
        <h1>{t("bgSection.h1")}</h1>
        <div></div>
        <button onClick={apply}>{t("bgSection.btn")}</button>
        <img className={styles.down} src={down} alt="down-svg" />
      </div>
    </div>
  );
}
