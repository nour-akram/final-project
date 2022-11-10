import React from "react";
import MainSection from "./MainSection";
import OfferSection from "./OfferSection"
import JumiaPay from "../../assets/JumiaPay.gif"
import "./home.css"
import TopSell from "./TopSell";
import TopSell2 from "./TopSell2";
import TopSell3 from "./TopSell3";
import  Images from "./Images";
import  Images3 from "./Images3";
import SeeAll from "./SeeAll";
import Slider from "./Slider";
import Images2 from "./Images2";
import baby from "../../assets/baby.jpg";
import Rows from "./Rows"
import FooterOfHome from "./FooterOfHome"
export default function Home() {
  return (
    <div className=" home">
      <MainSection />
      <OfferSection/>
      <TopSell/>
      <div className="pay">
        <img src={JumiaPay}/>
      </div>
      <Images/>
      <SeeAll/>
      <Slider/>
      <Images2/>
      <TopSell2/>
      <Images3/>
      <div className="baby">
        <img src={baby}/>
      </div>
      <TopSell3/>
      <Rows/>
      <FooterOfHome/>
   
     
    </div>
  );
}
