import React from "react";
import image9 from '../../assets/image9.png'
import image10 from '../../assets/image10.gif'
import "./Images2.css"
export default function Images2() {
  return (
    <div>
      <div className="free-shopping">
        <h2>FREE SHIPPING!</h2>
      </div>
      <div className="images2">
        <img src={image9}/>
        <img src={image10}/>
      </div>
    </div>
  );
}
