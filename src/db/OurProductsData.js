import { useTranslation } from "react-i18next";
const OurProductsData = () => {
  const { t } = useTranslation()
  const OurProducts = [
    {
      id: 1,
      imgSrc:
        "https://gropharm.in/wp-content/uploads/2021/04/40561835-white-paper-napkins-on-wooden-table-1.jpg",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 2,
      imgSrc:
        "https://cdnn1.img.sputnik.az/img/40726/43/407264394_0:76:2560:1523_1920x0_80_0_0_dd20a37fce0df4880740306948fff4be.jpg",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 3,
      imgSrc:
        "https://d4iqe7beda780.cloudfront.net/resources/static/main/image/whp080.jpg",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 4,
      imgSrc:
        "https://www.arsinconline.com/files/5214/7863/5210/cardboardex.jpg",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 5,
      imgSrc:
        "https://www.rubicon.com/wp-content/uploads/2021/07/shutterstock_1074202973-scaled.jpg",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
  ];
  return OurProducts;
};
export default OurProductsData;
