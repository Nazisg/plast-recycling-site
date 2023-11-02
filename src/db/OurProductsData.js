import { useTranslation } from "react-i18next";
const OurProductsData = () => {
  const { t } = useTranslation();
  const OurProducts = [
    {
      id: 1,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/baec/58c7/7147532e98f622dd756b9892571783ac?Expires=1699228800&Signature=PpLFXrw1imL0d6ZmUvRk0saqPQMAHMhS85lL37XGwydfcBhsQ7nLn9MxDzeBjJJvwheTzS0Hrnfxp9lTp8ei3mjFd7BDfSFQSodRiAv8DBun-mwZ0BE4vTH6SUAsg4HdD8zf7yX~YMO4zv4cTcYqpw8gFz7DurXWrLIohhDZ~QjkITQc8Ic~~xdLoft3qsU-vD3QePpQXA-7Ek39ce6Og8Mn~SfEqAfwvffnRlvWFIW4Aay2cXGQN2-ReGqTINao6jzI1Zts8KP5aU3a54jSwdQkTn5HUapHIZeBiTEQPmu0s3YXOWV4Ptw8NDfnmAhTl9gsrtJneP8FCL75phJyvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 2,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/f201/2d4f/28c118986e5b502eba818065f409af56?Expires=1699228800&Signature=O50TLzkySpFmY93fpypeV~vSlzXutT9O7LiAjCADFf16kwx~~M6l6fEdX8rpTj~Do1HVdmHc8AnqcoCyrhQ2mNpmCHPQu5Uwazm7kF01Zg4zfEZODAn-ApgrrE4qNvHtzloXSj9cgiufBtaPiAThzNI~5ZWDfkZOcTLXw3od5dDFD3zoVGhfOPIKwF27CNW7D~dQ6amcmB3X8kOxjwZD-V-0SeIeLQAT06dyLOV7-Bt62Nj-WT6rN8qSwGmAQg4IPQbQ6Ua96BoqiVZOKJR~kbjXmfc4N0ydvqQDJXTlIozlBRKgxiotDQEqEWDWs09TYoXLJ0v9CHapFWQFn3GaXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 3,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/1063/3b0f/3491d782c77dd7526666f669fba51593?Expires=1699228800&Signature=MT1dqXfhdnebhWOU6XRdED2fQYBy3qxKugG~0Uzz56jSy7bKTul2sG4-pw0EN4xtiwt07cDq8niXmR7BWcM8uhAsYIm1gnNyuO5hOTE0Ow1x3ef0H0~69xN~z1efHy8tADVG9c5l~DkjJbDyLc22li~dO8zsiCIt8hesb4gguLoMFi3rVpWi7qlT-oRT2lf5LCDgMDO8cfkIB8FJX9f7kUn17rMje~GY81f~FPfSe2oLqltH-K-tpvr3RLNXsvyJua~19rOLYt1gWXndNl6h0iknbMiSFVZn6fQrH94zQWPmPpIA9v3tgnm-ShJLcHFKDYhvOicQdw5GGmG-8Unmjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 4,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/537f/02c1/1b83b30030ec040ff0f375b84f48aa70?Expires=1699228800&Signature=kYWmwx0EhEQR-p~bE4VkwE9~c~xtZZQ6lsXtECSOwoG1vb7j~TqRvIkhJHPShT-8jNlIMtpg2sQiGFz7LSsfDGgY-qJ6B3nX9WVZE5t~xbRQtZZtYNjGguXcgiVy2sx2nsB~5unFsC9KongUKoUXSUg3WdGgYiUsAwH7xQ9EzRldxIH7cM5F58ohxLV1Kc~FU0~mQr6MaAkcd6FEZgJRCFJTFpg0mYctE-oycDmPO-vVyVMFysSkIKIRURJdQnVlVyBZO6PBAuepGCSRrxVNdT5VT-DZhrRV8kJNufYF4GSP3lRakJ-56i6Fx-xD3swVTi4MKYSV791ebdJEFPMY1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 5,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/1710/a72c/f06addf0cc591e3dac41a87e963add90?Expires=1699228800&Signature=FpEETeYQek6F7Pz9F61ajH5LZG8oYqhSQs178Ey-i4WqdP-N1O0wrCDehrjuW-oriVhtI7RCRCX1KxWBpqgsZ8PexfgUf14cwUtsSPX7uaxrMv6~qNdO4Bhlp8t437zlWpCEVtf0To-YeD~0Ih0~uV7ckXnPM~zHIHqSi~lQno1Jg1In2GdBhmuDnQ42H~LiQFv2dZZ3nqe~1SNPJ9Q8obtHt9cJrlNEMiQ8XemYcAo9PeeCiiJsU3IfoM7dCC65UHW8pSOgfu8mXgXFT6pqbw3kFZQtIHCDFrd8RNKIt~sSJ2y9JhV7p9VxXMV4Au4-eHM6o0ECSkRDW4Bhhjr2-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 6,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/baec/58c7/7147532e98f622dd756b9892571783ac?Expires=1699228800&Signature=PpLFXrw1imL0d6ZmUvRk0saqPQMAHMhS85lL37XGwydfcBhsQ7nLn9MxDzeBjJJvwheTzS0Hrnfxp9lTp8ei3mjFd7BDfSFQSodRiAv8DBun-mwZ0BE4vTH6SUAsg4HdD8zf7yX~YMO4zv4cTcYqpw8gFz7DurXWrLIohhDZ~QjkITQc8Ic~~xdLoft3qsU-vD3QePpQXA-7Ek39ce6Og8Mn~SfEqAfwvffnRlvWFIW4Aay2cXGQN2-ReGqTINao6jzI1Zts8KP5aU3a54jSwdQkTn5HUapHIZeBiTEQPmu0s3YXOWV4Ptw8NDfnmAhTl9gsrtJneP8FCL75phJyvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 7,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/f201/2d4f/28c118986e5b502eba818065f409af56?Expires=1699228800&Signature=O50TLzkySpFmY93fpypeV~vSlzXutT9O7LiAjCADFf16kwx~~M6l6fEdX8rpTj~Do1HVdmHc8AnqcoCyrhQ2mNpmCHPQu5Uwazm7kF01Zg4zfEZODAn-ApgrrE4qNvHtzloXSj9cgiufBtaPiAThzNI~5ZWDfkZOcTLXw3od5dDFD3zoVGhfOPIKwF27CNW7D~dQ6amcmB3X8kOxjwZD-V-0SeIeLQAT06dyLOV7-Bt62Nj-WT6rN8qSwGmAQg4IPQbQ6Ua96BoqiVZOKJR~kbjXmfc4N0ydvqQDJXTlIozlBRKgxiotDQEqEWDWs09TYoXLJ0v9CHapFWQFn3GaXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 8,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/1063/3b0f/3491d782c77dd7526666f669fba51593?Expires=1699228800&Signature=MT1dqXfhdnebhWOU6XRdED2fQYBy3qxKugG~0Uzz56jSy7bKTul2sG4-pw0EN4xtiwt07cDq8niXmR7BWcM8uhAsYIm1gnNyuO5hOTE0Ow1x3ef0H0~69xN~z1efHy8tADVG9c5l~DkjJbDyLc22li~dO8zsiCIt8hesb4gguLoMFi3rVpWi7qlT-oRT2lf5LCDgMDO8cfkIB8FJX9f7kUn17rMje~GY81f~FPfSe2oLqltH-K-tpvr3RLNXsvyJua~19rOLYt1gWXndNl6h0iknbMiSFVZn6fQrH94zQWPmPpIA9v3tgnm-ShJLcHFKDYhvOicQdw5GGmG-8Unmjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 9,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/537f/02c1/1b83b30030ec040ff0f375b84f48aa70?Expires=1699228800&Signature=kYWmwx0EhEQR-p~bE4VkwE9~c~xtZZQ6lsXtECSOwoG1vb7j~TqRvIkhJHPShT-8jNlIMtpg2sQiGFz7LSsfDGgY-qJ6B3nX9WVZE5t~xbRQtZZtYNjGguXcgiVy2sx2nsB~5unFsC9KongUKoUXSUg3WdGgYiUsAwH7xQ9EzRldxIH7cM5F58ohxLV1Kc~FU0~mQr6MaAkcd6FEZgJRCFJTFpg0mYctE-oycDmPO-vVyVMFysSkIKIRURJdQnVlVyBZO6PBAuepGCSRrxVNdT5VT-DZhrRV8kJNufYF4GSP3lRakJ-56i6Fx-xD3swVTi4MKYSV791ebdJEFPMY1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("ourProductsData.data.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 10,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/1710/a72c/f06addf0cc591e3dac41a87e963add90?Expires=1699228800&Signature=FpEETeYQek6F7Pz9F61ajH5LZG8oYqhSQs178Ey-i4WqdP-N1O0wrCDehrjuW-oriVhtI7RCRCX1KxWBpqgsZ8PexfgUf14cwUtsSPX7uaxrMv6~qNdO4Bhlp8t437zlWpCEVtf0To-YeD~0Ih0~uV7ckXnPM~zHIHqSi~lQno1Jg1In2GdBhmuDnQ42H~LiQFv2dZZ3nqe~1SNPJ9Q8obtHt9cJrlNEMiQ8XemYcAo9PeeCiiJsU3IfoM7dCC65UHW8pSOgfu8mXgXFT6pqbw3kFZQtIHCDFrd8RNKIt~sSJ2y9JhV7p9VxXMV4Au4-eHM6o0ECSkRDW4Bhhjr2-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
