import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg2 from "../assets/images/about-img2.png";
import AboutSection from "../layout/home-sections/AboutSection";
import PageHeader from "../layout/PageHeader";
import styles from './styles/About.module.scss';

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHeader title={t("pageHead.about.title")} page_name={t("pageHead.about.pageName")} />
      <AboutSection />
      <div className={styles.about}>
        <div className={styles.aboutCon}>
          <div className={styles.rigth}>
            <h4>
              {t("about.h4Page")}<span>?</span>
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
          <div className={styles.left}>
            <img className={styles.aboutImg} src={aboutImg2} />
            <div className={styles.comment}>
              <p>
                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis
                laoreet euismod nisi viverra. Pretium id massa adipiscing
                pellentesque euismod ut pharetra.
              </p>
              <h4>- Anton Çexov</h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
