import React, { Component } from "react";
import Slider from "react-slick";
import offer1  from '../../assets/offer1.gif'
import offer2 from '../../assets/offer2.png'
import offer3 from '../../assets/offer3.png'
import offer4 from '../../assets/offer4.png'
import offer5 from '../../assets/offer5.png'
import offer6 from '../../assets/offer6.png'
import offer7 from '../../assets/offer7.png'
import offer8 from '../../assets/offer8.png'
import offer9 from '../../assets/offer9.png'
import offer10 from '../../assets/offer10.png'
import offer11 from '../../assets/offer11.png'
import offer12 from '../../assets/offer12.png'
import  "./OfferSection.css"
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div  className="offer">
       
        <Slider {...settings}>
          <div>
            <img src={offer1}/>
          </div>
          <div>
          <img src={offer2}/>
          </div>
          <div>
          <img src={offer3}/>
          </div>
          <div>
          <img src={offer4}/>
          </div>
          <div>
          <img src={offer5}/>
          </div>
          <div>
          <img src={offer6}/>
          </div>
          <div>
          <img src={offer7}/>
          </div>
          <div>
          <img src={offer8}/>
          </div>
          <div>
          <img src={offer9}/>
          </div>
          <div>
          <img src={offer10}/>
          </div>
          <div>
          <img src={offer11}/>
          </div>
          <div>
          <img src={offer12}/>
          </div>
        </Slider>
      </div>
    );
  }
}