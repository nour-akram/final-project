import React, { Component } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import {db} from '../firebase/config'
import { collection } from "firebase/firestore";
import {getDocs} from 'firebase/firestore'
import "./TopSell.css"
export default function TopSell (){
   
    const  [phones,setPhones]= useState([]);
    const phonesCollectionRef= collection(db, 'phones');
  
    useEffect(() => {
      const getPhone =async() =>{
      const data = await getDocs (phonesCollectionRef) ;
       console.log (data);
       setPhones(data.docs.map(doc =>({...doc.data(),id: doc.id})));
      };
      getPhone();
    },)








    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
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
            initialSlide: 1
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
    }
    return (
      <div className="topsell">
        
        <h1>see all</h1>
        <Slider {...settings}>
        {phones.map(phone => {
          return (
            <div >
                    <h3>{phone.discount}</h3>
                    <img  src={phone.imageurl} />
                      <p>{phone.description}</p>
                      <h2>EGP {phone.price}</h2>
                      <span> <del> {phone.old}</del></span>
                    
                    
            </div>
                  
          
          )
         })}
        </Slider>
      </div>
    );
  }
