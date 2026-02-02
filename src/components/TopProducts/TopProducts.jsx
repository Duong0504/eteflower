import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Hoa ép nghệ thuật khung gỗ",
    description:
      "Hoa ép thủ công được sắp xếp tinh tế trong khung gỗ sang trọng, phù hợp trang trí phòng khách hoặc làm quà tặng ý nghĩa.",
  },
  {
    id: 2,
    img: Img2,
    title: "Hoa ép bookmark",
    description:
      "Bookmark hoa ép mỏng nhẹ, giữ trọn vẻ đẹp tự nhiên của hoa, thích hợp làm quà lưu niệm hoặc phụ kiện đọc sách.",
  },
  {
    id: 3,
    img: Img3,
    title: "Hoa ép kỷ niệm trong khung kính",
    description:
      "Hoa ép được bảo quản trong khung kính trong suốt, lưu giữ khoảnh khắc đặc biệt và cảm xúc theo thời gian.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Những sản phẩm được đánh giá cao nhất dành cho bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Sản phẩm tốt nhất
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Tuyển chọn những sản phẩm hoa ép được yêu thích nhất, thiết kế tinh tế và bền đẹp theo thời gian.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
