import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Khuyến mãi mùa đông lên đến 50%",
    description:
      "Hoa ép thủ công từ những bông hoa tươi, lưu giữ vẻ đẹp tự nhiên theo thời gian. Ưu đãi đặc biệt cho bộ sưu tập hoa ép mùa đông.",
  },
  {
    id: 2,
    img: Image2,
    title: "Hoa ép nghệ thuật – Quà tặng tinh tế",
    description:
      "Mỗi sản phẩm hoa ép là một tác phẩm thủ công tỉ mỉ, phù hợp làm quà tặng, trang trí hoặc lưu giữ những kỷ niệm đáng nhớ.",
  },
  {
    id: 3,
    img: Image3,
    title: "Ưu đãi hoa ép – Số lượng có hạn",
    description:
      "Bộ sưu tập hoa ép cao cấp với thiết kế tinh tế, bền đẹp theo năm tháng. Đặt mua ngay để nhận ưu đãi hấp dẫn.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[500px] w-[500px] sm:h-[650px] sm:w-[650px]
                bg-primary/40 absolute -top-1/3 right-[-80px]
                rounded-3xl rotate-45 -z-10"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="300"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center overflow-hidden">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px]
                      h-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
