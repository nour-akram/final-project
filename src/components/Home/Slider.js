import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.jpg'
import "./Slider.css"
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="slides">
       
        <Slider {...settings}>
          <div>
            <img  src={slide1}/>
          </div>
          <div>
          <img  src={slide2}/>
          </div>
          <div>
          <img  src={slide3}/>
          </div>
          <div>
          <img  src={slide4}/>
          </div>
          
        </Slider>
      </div>
    );
  }
}