import { useTranslation } from "react-i18next";

const WeBuyData = () => {
  const { t } = useTranslation();
  const weBuyProducts = [
    {
      id: 1,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/37f5/aab4/3ca7b374d0e62aaeb8236c1fc6860d49?Expires=1699228800&Signature=ZRO9n3pHn~yMNguaZSC7OU46cEwAo~o9ytbQ0fbCh9T0I53xmLl5PAvNHBr3ITve8pLB4edey7QYC~QXCQnC2gGdtkFwWGanAwzVIECAXPfv-A2b4q2GEAccaZ4U7g-9ibO3ppegj0rE1ykEEIPeVo6D16M-8t48eMQifuycHJf3YfX0I1uyXfQDpPQ5aSvDlicuwaGStpwbDq5nfrymetibnLc3qhSUbhf1KiCiraM5knHoCsWkw0o4cEHbzl7QYNG1x5hesp562uq0MhAJL-yVTTnecy29SwH8FhY75Kb~tlepVemMFw9hFdaJY9GV4OUF-scmnUM7jULJ~Sb0~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("weBuyData.data.1.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 2,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/1be3/7626/591f19105f5e01583d5f5748f7a1a72e?Expires=1699228800&Signature=HSBkXEqXE3OuuDxUbhLWtqArDuS9~azur4X9LjBOX-weiZ5RHbqwSxD2OcTp200tZzpMp4CWGpUdEcpxcgKFTSFhaoLERSGpFrqiNk3ki4THG7PHvZYUm24p8TuFrMlCxMuf~vSxDrWLPWhxmGgYHWdWM2qOsUG8hUE7VQUD51YJdTCDQ~zmxwW~iWhkfduLVRC9BWL2MDkMiiREc1gVElfZ9h8EKdJ5jpTNOYdqjmMOYPDyRPI~3WsCatA7AE-Z5HT5rP5tgu3QNdr3yAxVXVEQ4B8WOtrqbDuyABB35-7WJqGETNRsplj-Imabjy~aBHjapK3CIjXv2myjJVwLcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("weBuyData.data.2.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 3,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/669c/bd1b/3b3d36960abd60058692d04963436182?Expires=1699228800&Signature=qI0ySIcimLiGTuUE~cLpXzr98b8GmlLDzXpeGR2QUMUrXJ2uHQYK~1DS5jtJLH0-ALHJ3UUlsO-tjX-G5r0f~AZnmegrpocle9iHHd6U21Q8m5shd02nmeWTikPRgDqe6tGkeg-IsKBxZdnWAr7bpvdT~7yScziDEKsoi7dayAWVQK1BoBmn7MIMMjpKA7BZc8KoQWyJLuLjY44IduMdHnr24hbe1q8xrHVdYrGBhF9FNjQA2lQNhgYcEiJBbP9rQXtL1swB8PQ5VHhNYaImaQkcypdIC1iXfGSXmMKJZxkJ0vmIcSLZE14QeaJ7M4b7ippFVwt7tRDmaY3sq8-lvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("weBuyData.data.3.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 4,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/033e/d312/23d4b40f2eb260d508d68f22725a843c?Expires=1699228800&Signature=mXEjzmvPsM8EygMLzB8576Oo~~hZzAFuRyFBBD2bJmNl8HnpbySAN8IeZGvfU34gqCNaWLNNjdLBLepCgBGr882DXJyRbV85JLGpFvfh2bF1OS7DJ3S5k-vMUmMY-O~kmnIIB11OYTPCI8nIVOcKZ3kKXX0a1-g57P46hJvnidpFOqGLd5MQj05unRP4TxIbz4DkIKf~Ao6gJfgHVlpOVfkgPYfKyFUBoJeWBj1urLUFGyJBuH-sfkdOJOir7JXZNj6FZxV6LLQsTps4B30xP2Xw0RteXl~ynXcdQ~M1jI67ux8vfKh8QfHbnof6mgGqPTL0zvO1YP4ZwBVja5ZZgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("weBuyData.data.4.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
    {
      id: 5,
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/3815/6715/4b602d522d40e6516128da661e076dab?Expires=1699228800&Signature=kg1hJ1EKhCY~yiiPVIlJbDupY-WJm6QKTa-funPcINMU5kUyAkFXvGTaEYCh63B3nGBXR-zGcpnxP4Y1n-2FaBX0xoS3kbsaMb16sukkqdwpd1F-4neh~Qz82-Ti4Zwghou9d7778fxua63NEXb0SWaWBjcGKHXS1yIkg7~ADXL1uXsnGLMrCImNLVSoS7Zl8rkI6zSSXTYju6yX14lDv8YScySXtkBBMvh~MWUP14exAJLJWzm41xxmXeakBLPU5fsbOJDNqZsDmi6OudMAohHaZWfBvdr6hm-AuSSvtu2NorbEdh42Y0JZ0vduEBDCaepANkMbPzi6EmTqsIQo4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: t("weBuyData.data.5.title"),
      description:
        "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
      price: "5 azn",
      weight: " 1 kg",
    },
  ];
  return weBuyProducts;
};
export default WeBuyData;
