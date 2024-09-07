import React, { useRef } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import OurProductsData from "../db/OurProductsData";
import OurProductsCard from "../layout/home-sections/products-card/OurProductsCard";
import "./styles/Carousel.scss";


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  const OurProducts = OurProductsData();
  const arrowRef = useRef(null);
  return (
    <div className="carousel">
      <div id="client" className="container">
        <div className="testimonials">
          <Slider ref={arrowRef} {...settings}>
            {OurProducts?.map((e) => (
              <OurProductsCard
                key={e.id}
                imgSrc={e.imgSrc}
                title={e.title}
                description={e.description}
                price={e.price}
                weight={e.weight}
              />
            ))}
          </Slider>
          <div className="line"></div>
          <div className="buttons">
            <button onClick={() => arrowRef.current.slickPrev()}>
              <HiOutlineArrowNarrowLeft />
            </button>
            <button onClick={() => arrowRef.current.slickNext()}>
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
