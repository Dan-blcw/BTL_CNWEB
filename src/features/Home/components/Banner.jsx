import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";

Banner.propTypes = {
  sliderList: PropTypes.array,
};

const BannerList = [
  {
    id: 1,
    src: "https://www.casio.com/content/casio/locales/vn/vi/products/watches/_jcr_content/root/responsivegrid/image.casiocoreimg.jpeg/1660092798793/teaser-gm-b2100-pc.jpeg",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/td-robb-media/2022/01/Rolex_cosmograph_daytona.jpeg",
  },
  {
    id: 3,
    src: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2019/10/Screen-Shot-2021-07-22-at-3.30.10-PM.jpg",
  },
];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Chuyển ảnh sang phải (tăng index) và quay về index 0 nếu đang ở cuối danh sách
      setCurrentImageIndex((prevIndex) =>
        prevIndex === BannerList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Chạy một lần khi component được mount

  const handleBackBanner = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? BannerList.length - 1 : prevIndex - 1
    );
  };

  const handleNextBanner = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === BannerList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div
        onClick={handleBackBanner}
        className="absolute top-1/2 left-4 cursor-pointer hover:text-gray-200 text-4xl font-bold text-gray-500"
      >
        <MdArrowBackIos />
      </div>
      <div
        onClick={handleNextBanner}
        className="absolute top-1/2 right-4 cursor-pointer hover:text-gray-200 text-4xl font-bold text-gray-500"
      >
        <GrNext />
      </div>
      <img
        alt="slider"
        src={BannerList[currentImageIndex].src}
        className="w-full h-[var(--height-banner)] transition ease-out duration-1000"
      />
    </div>
  );
}

export default Banner;
