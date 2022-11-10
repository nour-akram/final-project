import React, { Component } from "react";
import Slider from "react-slick";
import pro1 from "../../assets/pro1.png"
import pro2 from "../../assets/pro2.png"
import pro3 from "../../assets/pro3.png"
import pro4 from "../../assets/pro4.png"
import pro5 from "../../assets/pro5.png"
import pro6 from "../../assets/pro6.png"
import pro7 from "../../assets/pro7.png"
import pro8 from "../../assets/pro8.png"
import pro9 from "../../assets/pro9.png"
import pro10 from "../../assets/pro10.png"
import pro11 from "../../assets/pro11.png"
import pro12 from "../../assets/pro12.png"
import "./Rows.css"

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };
    return (
      <div className="rows">
        
        <Slider {...settings}>
          <div>
            <img src={pro1}/>
          </div>
          <div>
          <img src={pro2}/>
          </div>
          <div>
          <img src={pro3}/>
          </div>
          <div>
          <img src={pro4}/>
          </div>
          <div>
          <img src={pro5}/>
          </div>
          <div>
          <img src={pro6}/>
          </div>
          <div>
          <img src={pro7}/>
          </div>
          <div>
          <img src={pro8}/>
          </div>
          <div>
          <img src={pro9}/>
          </div>
          <div>
          <img src={pro10}/>
          </div>
          <div>
          <img src={pro11}/>
          </div>
          <div>
          <img src={pro12}/>
          </div>
        </Slider>
      </div>
    );
  }
}