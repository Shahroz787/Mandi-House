import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Menu.css';

const menu = [
  "Beef Biryani", "Chicken Biryani", "Aloo Keema", "Lassi", "Pasta",
  "Kebabs", "Salad", "Blueberry"
];

const Menu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 8, // For large screens
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    arrows: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (like tablets)
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-menu py-4 drop-shadow-2xl">
      <Slider {...settings}>
        {menu.map((item, index) => (
          <div key={index} className="menu-item ">
            <li className="text-center text-white">{item}</li>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Menu;
