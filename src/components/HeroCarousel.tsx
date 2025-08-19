import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image01 from "../assets/HeroImages/image01.png";
import image02 from "../assets/HeroImages/image02.png";
import image03 from "../assets/HeroImages/image03.png"; 
import image04 from "../assets/HeroImages/image04.png";


const HeroCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className="bg-black" >
      <img className="w-full h-80 lg:h-140 object-cover" src={image01} alt="" />
      <img className="w-full h-80 lg:h-140 object-cover" src={image02} alt="" />
      <img className="w-full h-80 lg:h-140 object-cover" src={image03} alt="" />
      <img className="w-full h-80 lg:h-140 object-cover" src={image04} alt="" />
    </Slider>
  );
};

export default HeroCarousel;
