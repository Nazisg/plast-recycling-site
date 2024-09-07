import { useTranslation } from "react-i18next";

const WeBuyData = () => {

  const { t } = useTranslation()
  const weBuyProducts = [
    {
      id: 1,
      imgSrc:
        "https://i5.walmartimages.com/seo/A4-White-Paper-For-Copy-Printing-Writing-210-x-297-mm-8-27-x-11-69-inches-20lb-Bond-60lb-Text-Paper-75gsm-250-Sheets-Per-Pack_1cbd52d0-b3a6-4386-a929-7669692f73d1.961cafe7c53c2bc014560fe92a3edfe6.jpeg",
      title: t("weBuyData.data.1.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 2,
      imgSrc:
        "https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/08/64c965f438c996.16365641.jpeg?w=2560&h=1440&crop=1",
      title: t("weBuyData.data.2.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 3,
      imgSrc:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/305163655/GH/CD/JN/11882109/cardboard-paper-500x500.jpg",
      title: t("weBuyData.data.3.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 4,
      imgSrc:
        "https://blogsmedia.lse.ac.uk/blogs.dir/104/files/2021/12/Screenshot-2021-12-03-at-12.55.53.png",
      title: t("weBuyData.data.4.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 5,
      imgSrc:
        "https://media.baumpub.com/files/slides/locale_image/full/0167/41648_en_f7594_44371_rick-z-mixed-paper-deinking20003.jpg",
      title: t("weBuyData.data.5.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
  ];
  return weBuyProducts
}
export default WeBuyData
