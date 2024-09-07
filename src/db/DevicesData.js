import { useTranslation } from "react-i18next";
const DevicesData = () => {
    const { t } = useTranslation();

    const DevicesProducts = [
        {
            id: 1,
            imgSrc: "https://img.directindustry.com/images_di/photo-m2/32942-15456200.webp",
            title: t("devicesData.data.1.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        },
        {
            id: 2,
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVz15QGW-_ZkoPnrY8-KUk6NUPLW9hPNLjA&s",
            title: t("devicesData.data.2.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        },
        {
            id: 3,
            imgSrc: "https://www.scanstore.com/downloads/ricoh/fi-8040_Image2.jpg",
            title: t("devicesData.data.3.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        },
        {
            id: 4,
            imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/8/WP/VQ/AD/3809499/waste-paper-recycling-machine-500x500.jpeg",
            title: t("devicesData.data.4.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        },
        {
            id: 5,
            imgSrc: "https://img2.exportersindia.com/product_images/bc-full/dir_182/5439834/paper-recycling-plant-1515051190-3559125.jpg",
            title: t("devicesData.data.5.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        },
        {
            id: 6,
            imgSrc: "https://2.imimg.com/data2/FA/IF/MY-3566731/waste-paper-recycling-plant.jpg",
            title: t("devicesData.data.6.title"),
            description: "Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.",
            price: "5,400 azn"
        }
    ]
    return DevicesProducts
}
export default DevicesData