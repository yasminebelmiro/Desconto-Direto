import image01 from "../../../assets/HeroImages/image01.png";
import image02 from "../../../assets/HeroImages/image02.png";
import image03 from "../../../assets/HeroImages/image03.png";
import image04 from "../../../assets/HeroImages/image04.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
const images = [image01, image02, image03, image04];
const HeroCarousel = () => {

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      slidesPerGroup={1}
      spaceBetween={0}
      autoplay={{ delay: 3000 }}
      speed={2000}
      className="z-0"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-80 lg:h-140 object-cover z-0" src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
