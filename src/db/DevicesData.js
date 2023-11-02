import { useTranslation } from "react-i18next";
const DevicesData = () => {
  const { t } = useTranslation();

  const DevicesProducts = [
    {
      id: 1,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/14e0/75ec/233b9e651f503556ceb94ec0eec34668?Expires=1699228800&Signature=TaCXDn568xFKmAAf1CFVELnjzqvcKoiVmovTIE5oOfVRiuUttL7AVpPH1N~XF3csLa6oD8xppDov7uhF6YqM8u2VpzH3kSs60IOq01JUYiQRsjiUaQuYtpil9Bh0ZxHkDnDaWgC3eTbOn6uaPnUXgpR-FQS~Hy8SrdBBk5x~K1wPA9dLPAn7GV-2LPfIIlI-xsfDhMk5Mmi7j3pw46FM4MDD0JmaVuqeKB74Vhg-XFTpXbsrZ6~KS79G6oHPUtu7lREXy9UiwFQQVR5TcZw14rVtwnWBZuZQGz7mAIav0jWn6C2jfgPpl2EbAFOG~5pcpf5WhyCw3CvkfEqoXQm3Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.1.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
    {
      id: 2,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/77fa/2b30/63be0dc8876ade973d5b8f93a7047a3a?Expires=1699228800&Signature=JaCRfpTL3pGv0yHZ9WIjpHOHV8HQWrqi21c2RK9c5ADR1g6okXovCXp4iYMpyz63cN5Gct1O6LCk~KBXUPhAvrJaa6Jtlk8vIE43~cMIhTamo0mrEnDXeU5CnrQJNVxlO7rtHyUMf05Ck698P1ON~mD64gul5Q70DsyC4MfRJ-q27huR1TxqWFjRCqNNbVZQ2S8MXIVVNJmCP7C~ylhe3SyT2rNw3RMxTCG4N16n9M9d2F2ZGnfoxnZWkAvqr14-Cxw2Xm2mlDEudd~mmlzFGe3JCF1cIQJv~b1Rfwt43fUyGfqjI6kRWNQFqAY5btpanG7bxjltccSXf0njUC7msA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.2.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
    {
      id: 3,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/e203/c18a/7412a604e1c21d5d583dff3dc315b0f9?Expires=1699228800&Signature=QyM9SVqUSJExBvAJJH58R177~iwEC6fe~tuhcl915I~Sk~VP4jBPSck2uw~FS~awy7B9Cl6hlsK2KX5gDu5KcTN2Kt6OBb2kKt1lKQPgloRh8~FyobNfCXao2MFqd9~Dt0YnS50KevcFbcVzf3mwQpkHVWbEo5H1CCr0RqxEKwYBEs-Yri1ChS4vuNi316wVp3lA-Fyd-Y~hWLDAXnUBySLRoD5nvSSCkaPIig146fzl537T24IgeOMyi6MBUZU6017UgTEm~XOw6zEblrWXrl9xEeEOyG7pgaVG7I6b7bCjBhDvf4owgIautK7Phh-XoutLxeesJshlNbhLKsqEng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.3.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
    {
      id: 4,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/14e0/75ec/233b9e651f503556ceb94ec0eec34668?Expires=1699228800&Signature=TaCXDn568xFKmAAf1CFVELnjzqvcKoiVmovTIE5oOfVRiuUttL7AVpPH1N~XF3csLa6oD8xppDov7uhF6YqM8u2VpzH3kSs60IOq01JUYiQRsjiUaQuYtpil9Bh0ZxHkDnDaWgC3eTbOn6uaPnUXgpR-FQS~Hy8SrdBBk5x~K1wPA9dLPAn7GV-2LPfIIlI-xsfDhMk5Mmi7j3pw46FM4MDD0JmaVuqeKB74Vhg-XFTpXbsrZ6~KS79G6oHPUtu7lREXy9UiwFQQVR5TcZw14rVtwnWBZuZQGz7mAIav0jWn6C2jfgPpl2EbAFOG~5pcpf5WhyCw3CvkfEqoXQm3Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.4.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
    {
      id: 5,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/77fa/2b30/63be0dc8876ade973d5b8f93a7047a3a?Expires=1699228800&Signature=JaCRfpTL3pGv0yHZ9WIjpHOHV8HQWrqi21c2RK9c5ADR1g6okXovCXp4iYMpyz63cN5Gct1O6LCk~KBXUPhAvrJaa6Jtlk8vIE43~cMIhTamo0mrEnDXeU5CnrQJNVxlO7rtHyUMf05Ck698P1ON~mD64gul5Q70DsyC4MfRJ-q27huR1TxqWFjRCqNNbVZQ2S8MXIVVNJmCP7C~ylhe3SyT2rNw3RMxTCG4N16n9M9d2F2ZGnfoxnZWkAvqr14-Cxw2Xm2mlDEudd~mmlzFGe3JCF1cIQJv~b1Rfwt43fUyGfqjI6kRWNQFqAY5btpanG7bxjltccSXf0njUC7msA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.5.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
    {
      id: 6,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/e203/c18a/7412a604e1c21d5d583dff3dc315b0f9?Expires=1699228800&Signature=QyM9SVqUSJExBvAJJH58R177~iwEC6fe~tuhcl915I~Sk~VP4jBPSck2uw~FS~awy7B9Cl6hlsK2KX5gDu5KcTN2Kt6OBb2kKt1lKQPgloRh8~FyobNfCXao2MFqd9~Dt0YnS50KevcFbcVzf3mwQpkHVWbEo5H1CCr0RqxEKwYBEs-Yri1ChS4vuNi316wVp3lA-Fyd-Y~hWLDAXnUBySLRoD5nvSSCkaPIig146fzl537T24IgeOMyi6MBUZU6017UgTEm~XOw6zEblrWXrl9xEeEOyG7pgaVG7I6b7bCjBhDvf4owgIautK7Phh-XoutLxeesJshlNbhLKsqEng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("devicesData.data.6.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5,400 azn",
    },
  ];
  return DevicesProducts;
};
export default DevicesData;
