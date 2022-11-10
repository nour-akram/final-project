import React from 'react'
import image11 from '../../assets/image11.png'
import image12 from '../../assets/image12.png'
import image13 from '../../assets/image13.png'

import "./Images.css"
export default function Images() {
  return (
    <div>

     <div className='BEAUTY-HOT'>
        <h3>BEAUTY HOT DEALS!</h3>
     </div>
     <div className='plack-friday1'>
        <img src={image11}/>
        <img src={image12}/>
        <img src={image13}/>
    </div>

    </div>
  )
}
