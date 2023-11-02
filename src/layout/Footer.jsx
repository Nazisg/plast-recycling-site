import React from "react";
import styles from "./styles/Footer.module.scss";
import work from "../assets/icons/work-green.svg";
import headset from "../assets/icons/headset-green.svg";
import location from "../assets/icons/location-green.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const pathLocation = useLocation();
  const { t } = useTranslation();

  return (
    <div className={pathLocation.pathname === "/" ? "dark" : "ligth"}>
      <div className={styles.footer}>
        <div className={styles.footerCon}>
          <div className={styles.work}>
            <img src={work} />
            <h2>{t("footer.work.h2")}</h2>
            <div className="activelinks">
              <div className={styles.links}>
                <NavLink activeclassname="active" to="/our-products">
                  {t("footer.work.links.ourPro")}
                </NavLink>
                <NavLink activeclassname="active" to="/we-buy">
                  {t("footer.work.links.weBuy")}
                </NavLink>
                <NavLink activeclassname="active" to="/devices">
                  {t("footer.work.links.devices")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.headset}>
            <img src={headset} />
            <h2>{t("footer.headset.h2")}</h2>
            <span>+994 12 222 22 22</span>
            <span>info@plast.az</span>
            <div className={styles.svgBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g opacity="0.5" clipPath="url(#clip0_28_79)">
                  <path
                    d="M12.25 0H1.75C0.784875 0 0 0.784875 0 1.75V12.25C0 13.2151 0.784875 14 1.75 14H7V9.1875H5.25V7H7V5.25C7 3.80013 8.17513 2.625 9.625 2.625H11.375V4.8125H10.5C10.017 4.8125 9.625 4.767 9.625 5.25V7H11.8125L10.9375 9.1875H9.625V14H12.25C13.2151 14 14 13.2151 14 12.25V1.75C14 0.784875 13.2151 0 12.25 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_79">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g opacity="0.5" clipPath="url(#clip0_28_69)">
                  <path
                    d="M9.625 0H4.375C1.95913 0 0 1.95913 0 4.375V9.625C0 12.0409 1.95913 14 4.375 14H9.625C12.0409 14 14 12.0409 14 9.625V4.375C14 1.95913 12.0409 0 9.625 0ZM12.6875 9.625C12.6875 11.3138 11.3138 12.6875 9.625 12.6875H4.375C2.68625 12.6875 1.3125 11.3138 1.3125 9.625V4.375C1.3125 2.68625 2.68625 1.3125 4.375 1.3125H9.625C11.3138 1.3125 12.6875 2.68625 12.6875 4.375V9.625Z"
                    fill="white"
                  />
                  <path
                    d="M7 3.5C5.06712 3.5 3.5 5.06712 3.5 7C3.5 8.93288 5.06712 10.5 7 10.5C8.93288 10.5 10.5 8.93288 10.5 7C10.5 5.06712 8.93288 3.5 7 3.5ZM7 9.1875C5.79425 9.1875 4.8125 8.20575 4.8125 7C4.8125 5.79338 5.79425 4.8125 7 4.8125C8.20575 4.8125 9.1875 5.79338 9.1875 7C9.1875 8.20575 8.20575 9.1875 7 9.1875Z"
                    fill="white"
                  />
                  <path
                    d="M10.7625 3.70398C11.0201 3.70398 11.2289 3.49518 11.2289 3.23761C11.2289 2.98004 11.0201 2.77124 10.7625 2.77124C10.505 2.77124 10.2962 2.98004 10.2962 3.23761C10.2962 3.49518 10.505 3.70398 10.7625 3.70398Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_69">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M13.405 3.115C13.0252 2.4395 12.6131 2.31525 11.774 2.268C10.9358 2.21113 8.82788 2.1875 7.00175 2.1875C5.17212 2.1875 3.06337 2.21113 2.226 2.26713C1.38862 2.31525 0.975625 2.43862 0.592375 3.115C0.20125 3.78962 0 4.95163 0 6.99738C0 6.99913 0 7 0 7C0 7.00175 0 7.00263 0 7.00263V7.00437C0 9.04138 0.20125 10.2121 0.592375 10.8798C0.975625 11.5553 1.38775 11.6778 2.22513 11.7346C3.06337 11.7836 5.17212 11.8125 7.00175 11.8125C8.82788 11.8125 10.9358 11.7836 11.7749 11.7355C12.614 11.6786 13.0261 11.5561 13.4059 10.8806C13.8005 10.213 14 9.04225 14 7.00525C14 7.00525 14 7.00263 14 7.00088C14 7.00088 14 6.99913 14 6.99825C14 4.95163 13.8005 3.78962 13.405 3.115ZM5.25 9.625V4.375L9.625 7L5.25 9.625Z"
                    fill="white"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g opacity="0.5" clipPath="url(#clip0_28_61)">
                  <path
                    d="M7.00175 0H6.99825C3.13863 0 0 3.1395 0 7C0 8.53125 0.4935 9.9505 1.33263 11.1029L0.46025 13.7034L3.15088 12.8433C4.25775 13.5765 5.57812 14 7.00175 14C10.8614 14 14 10.8596 14 7C14 3.14038 10.8614 0 7.00175 0ZM11.0749 9.88488C10.906 10.3617 10.2358 10.7572 9.70113 10.8727C9.33537 10.9506 8.85763 11.0128 7.24937 10.346C5.19225 9.49375 3.8675 7.40337 3.76425 7.26775C3.66537 7.13212 2.933 6.16088 2.933 5.15637C2.933 4.15188 3.44313 3.66275 3.64875 3.45275C3.81763 3.28038 4.09675 3.20162 4.3645 3.20162C4.45113 3.20162 4.529 3.206 4.599 3.2095C4.80463 3.21825 4.90788 3.2305 5.0435 3.55513C5.21238 3.962 5.62362 4.9665 5.67262 5.06975C5.7225 5.173 5.77238 5.313 5.70238 5.44863C5.63675 5.58863 5.579 5.65075 5.47575 5.76975C5.3725 5.88875 5.2745 5.97975 5.17125 6.1075C5.07675 6.21863 4.97 6.33763 5.089 6.54325C5.208 6.7445 5.61925 7.41562 6.22475 7.95462C7.00612 8.65025 7.63962 8.8725 7.86625 8.967C8.03512 9.037 8.23637 9.02038 8.35975 8.88913C8.51637 8.72025 8.70975 8.44025 8.90662 8.16463C9.04663 7.96688 9.22338 7.94237 9.40888 8.01237C9.59788 8.078 10.598 8.57237 10.8036 8.67475C11.0092 8.778 11.1449 8.827 11.1947 8.91363C11.2437 9.00025 11.2437 9.40712 11.0749 9.88488Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_61">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.location}>
            <img src={location} />
            <h2>{t("footer.location.h2")}</h2>
            <p>{t("footer.location.p")}</p>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className="footText">
          <p>
            {t("footer.foot.1.p")}
            <span> {t("footer.foot.1.span")} </span> {t("footer.foot.1.p2")}
          </p>
          <p>
            {t("footer.foot.2.p")} <span>{t("footer.foot.2.span")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
