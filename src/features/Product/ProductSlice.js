import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const BRAND_LIST = [
  "Rolex",
  "Casio",
  "Cartier",
  "Calvin Klein",
  "Longines",
  "Jaeger-LeCoultre",
  "Apple",
];
const COUNTRY_LIST = ["USA", "Japan", "China", "Korea", "UK", "Switzerland"];
const PRODUCT_LIST = [
  {
    id: uuid(),
    name: "Calvin Klein Quartz 25200120 44mm Men",
    pictureURL:
      "https://donghotantan.vn/images/products/2022/10/31/large/dong-ho-calvin-klein-25200120-1_1667227874.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2021/03/Capture-107.png.webp",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://product.hstatic.net/1000093649/product/dong-ho-rolex-white-gold-gmt-master-ii-116759sa-40mm-1_435ccc274582408ea067c85014aee9e6_1024x1024.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://cdn.pnj.io/images/detailed/178/sp-wck00000433-dong-ho-calvin-klein-nam-25200293-day-kim-loai-44-mm-1.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://cdn.vuanhwatch.com/media/products/23292/dong-ho-calvin-klein-watch-only-time-woman-calvin-klein-polished-k9c2n116-mau-bac-621601fe9e386-23022022164430.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://cdn2.jomashop.com/media/catalog/product/c/a/calvin-klein-rise-quartz-silver-and-white-ladies-watch-k7a23646_1.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    pictureURL:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "White",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2021/04/Rolex-Steel-and-Everose-Rolesor-Datejust-36-Watch-Diamond-Bezel-Black-Diamond-Dial-Jubilee-Bracelet.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    pictureURL:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "White",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Linjer watch",
    pictureURL:
      "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt7074f7f53ea9dc54/60dc11cc22d24e38a38c2ebe/seffren_motus-22515-42mm.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    pictureURL:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "White",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    pictureURL:
      "https://rolex.dafc.com.vn/wp-content/uploads/2023/05/m128238-0008_collection_upright_landscape.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    pictureURL:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "White",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    pictureURL:
      "https://frodos.com.vn/wp-content/uploads/2022/03/Daytona-Eye-of-the-Tiger-Yellow-Gold-Gents-116588TBR-1-scaled.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 2999,
  },
];
const COLOR_LIST = ["White", "Black", "Red", "Silver"];

const productSlice = createSlice({
  name: "products",
  initialState: {
    product_list: PRODUCT_LIST,
    brand_list: BRAND_LIST,
    country_list: COUNTRY_LIST,
    color_list: COLOR_LIST,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
const { actions, reducer } = productSlice;
export default reducer;
export const {} = actions;
