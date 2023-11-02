import React from "react";
import styles from "./styles/AboutSection.module.scss";
import aboutImg from "../../assets/images/about-img.png";
import polygonGreen from "../../assets/icons/polygon-green.svg";
import { useTranslation } from "react-i18next";
export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.aboutCon}>
          <div className={styles.left}>
            <img className={styles.aboutImg} src={aboutImg} />
            <div className={styles.comment}>
              <img src={polygonGreen} />
              <p>
                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis
                laoreet euismod nisi viverra. Pretium id massa adipiscing
                pellentesque euismod ut pharetra.
              </p>
              <h4>- Anton Çexov</h4>
            </div>
          </div>
          <div className={styles.rigth}>
            <h4>
              {t("about.h4")}
              <span>?</span>
            </h4>
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
              tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
              adipiscing pellentesque euismod ut pharetra.
            </p>
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
              tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
              adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci,
              sed in sed sed dictum tristique. Turpis laoreet euismod nisi
              viverra. Pretium id massa adipiscing pellentesque euismod ut
              pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
