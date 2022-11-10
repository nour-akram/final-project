import React from 'react'
import MainFooter from './MainFooter'
import HelpCenter from './HelpCenter'
import Contactus from './Contactus'
import ShopOnJumia from './ShopOnJumia'
import PayOnJumia from './PayOnJumia'
import Headeer from './Headeer'
import Delivery from './Delivery'
import Report from './Report'
export const Footer = () => {
  return (
    <div>
        
      <MainFooter/> 
      <br></br> 
       <HelpCenter/> 
        <br></br>

        <Contactus/>
        <br></br>

        <ShopOnJumia/>
        <br></br>

        <PayOnJumia/>

        <br></br>

        <Delivery/>

        <br></br>

        <Report/>
    </div>
  )
}
export default Footer