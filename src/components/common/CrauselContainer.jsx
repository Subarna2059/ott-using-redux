import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
const CrauselContainer = ({children,keyId}) => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      nextArrow: <i className="bi bi-arrow-left-circle-fill  "></i>,
      prevArrow: <i className="bi bi-arrow-right-circle-fill  "></i>
    }
  return (
    <>
    <div className="w-[80vw] mx-auto">
        <Slider {...settings} key={keyId}>
            {children}
        </Slider>
        </div>
    </>
  )
}

export default CrauselContainer