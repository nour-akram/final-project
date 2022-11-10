import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.gif'
import image5 from '../../assets/image5.gif'
import image6 from '../../assets/image6.jpg'
import "./Images.css"
import image7 from '../../assets/image7.jpg'
import image8 from '../../assets/image8.png'
export default function Images() {
  return (
    <div>

     <div className='plack-friday1'>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
    </div>


    <div className='plack-friday2'>
        <img src={image4}/>
        <img src={image5}/>
    </div>

    <div className='plack-friday3'>
        <img src={image6}/>
        <img src={image7}/>
        <img src={image8}/>
    </div>
    </div>
  )
}
