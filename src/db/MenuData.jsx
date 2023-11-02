import { useTranslation } from "react-i18next";
const MenuData = () => {
  const { t } = useTranslation();

  const navLinks = [
    { to: "/", text: t("header.homepage") },
    { to: "/we-buy", text: t("header.webuy") },
    { to: "/our-products", text: t("header.ourproducts") },
    { to: "/devices", text: t("header.devices") },
    { to: "/about", text: t("header.aboutus") },
    { to: "/contact", text: t("header.contact") },
  ];

  return navLinks;
};

export default MenuData;
