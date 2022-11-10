import React from 'react'
import MainFooter from './MainFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpCenter.css'
import Headeer from './Headeer';
export const HelpCenter = () => {
  return (
    <div>


<div>
<div class="container-fluid">
      <div class="row">
        <div class="col-12 ps-0 pe-0">
          <img
            src="https://static.jumia.com.eg/cms/BFS-22-Live/Sticky-Banners/Sensodyne/DE-EN-(1).gif"
            alt=""
            width="100%"
          />
        </div>
      </div>
    </div>
     <Headeer/>
    <header className=" border ">
        <div className="conterainer">
            <div className="row   justify-content-around  ">

                <div className="col-2  mt-3 ">
                    <log className="d-flex align-items-center ">
                        <img src="https://th.bing.com/th/id/OIP.SLq-CIFrKxTGUdR3eiHkYwHaBR?pid=PersonalBing&rs=1"
                            alt="jumia" className="image-log mt-1 mb-2"/>
                    </log>
                </div>

                <div className="col-6 mt-3   ">
                    <form className="d-flex  " >
                        <div className=" search-div me-2  ps-2 ">
                            <i className="fa fa-search" aria-hidden="true" style={{fontSize:'20px' , opacity:"0.6;"}}></i>
                            <input className="inpt" style={{paddingLeft: '50x', width:'400px' }
                             } type="text" placeholder="search for product"/>
                        </div>
                        <button className="btn " type="submit">SEARCH</button>
                    </form>
                </div>

                <div className="col-3 ">
                    <div className="d-flex mt-3 ">
                        <button className="button-nav" id="button-nav" onclick="bgc">
                            {/* <!-- <span className="-fsh0 -mrs"><svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                                            <use
                                                xlink:href="https://www.jumia.com.eg/assets_he/images/i-icons.48f69aa0.svg#person">
                                            </use>
                                        </svg></span> --> */}
                            <i className="fa-regular fa-user me-2"></i>
                            Account
                            <i className="fa fa-arrow-down" aria-hidden="true" style={{opacity: '0.6', fontSize:'15px', paddingLeft:'10px',paddingTop:'5px'}}></i>
                        </button>
                        <button className="me-2 button-nav " id="button-nav1" onclick="bgc">
                         
                            Help
                            <i className="fa fa-arrow-down" aria-hidden="true"style={{opacity: '0.6', fontSize:'15px',paddingLeft:'10pxp',paddingTop:'5px'}}></i>
                        </button>
                        <a href="#" className="me-2 button-nav-cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true" style={{opacity: '0.6' ,fontSize:'20px',paddingRight:'10px'}}></i>
                            Cart
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </header>


   <div className="section">
      <div className="row">
        <div className="col-10 "style={{marginLeft:'100px',marginTop:'20px'}}>
            <img src="help center.jpg" alt=""/>
        </div>

      </div>

      <center style={{fontWeight:'700',fontSize:'19px',color:'orange',marginTop:'20px'}}>
        How can we help you?
      </center>

      <div className="noura">
        <i className="fa fa-search" aria-hidden="true" style={{fontSize:'20px' , opacity:'0.6'}}></i>
        <input className="inpt" style={{paddingLeft: '50px', width:'400px'}}  type="text" placeholder="Discribe ur issue"/>
    </div>


    <div className="container">
        <div className="row nan" style={{marginLeft:'240px' ,marginTop:"30px"}}>
           <div className="col-2 " style={{width:'170px' ,paddingLeft: "20px"}}>
             <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/place-track-order.png" width="50px" style={{marginLeft:'40px'}}/>
              <p style={{fontWeight: '600', color:'orange',marginTop:'10px'}}>  $place-track-order</p>
            </div>
           <div className="col-2 " style={{width:'170px', paddingLeft: "20px"}}>
             <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/cancelation.png"  width="50px" alt=""style={{marginLeft:'40px '}}/>
             <p style={{fontWeight: '600',color:'orange',marginTop:'10px'}}> order cancellation</p>
           </div>
           <div className="col-2 "  style={{width:'170px',paddingLeft: "30px"}}>
            <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/returns.png"  width="50px" alt=""style={{marginLeft:"30px"}}/>
            <p style={{fontweight: '600',color:'orange',marginTop:"10px"}}>  returns $ refunds</p>
           </div>
           <div className="col-2 "  style={{width:"170px",paddingLeft: "50px"}}>
            <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/payment.png"   width="50px" alt=""style={{marginLeft:'10px'}}/>
            <p style={{fontWeight: '600',color:'orange',marginTop:'10px'}}> payment</p>
            
           </div>
        </div>
    </div>



     <p className="word">Choose Your Desired Service</p>

   <div className="container-fluid">
    <div className="row">


     <div className="fourdiv  col-lg-3 col-10">
      <div className="zz" data-list=".listOne">
        <div>place $ track-order</div>
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
     </div>
     <div className="zz" data-list=".listTwo">
       <div>Order cancellation</div>
       <i className="fa fa-angle-double-right" aria-hidden="true"></i>
     </div>
     <div className="zz" data-list=".listThree">
       
       <div>returns $refunds</div>
       <i className="fa fa-angle-double-right" aria-hidden="true"></i>
     </div>
     <div className="zz" data-list=".listFour">
       <div>payment</div>
       <i className="fa fa-angle-double-right" aria-hidden="true"></i>
     </div>
     </div>



      <div className="col-lg-6   col-10" id="mydiv">
        <ul className="position-absolute hide listOne data-list">
          <li className="li1">Place & Track order</li>
          <li>How to Shop on Jumia?</li>
          <li>How to Track your order?</li>
          <li>Delivery Timelines</li>
        </ul>
        <ul className="position-absolute hide listTwo data-list">
            <li className="li1">Order Cancellation</li>
            <li>FAQs</li>
            <li>Steps to cancel your order</li>
        </ul>
        <ul className="position-absolute hide listThree data-list">
            <li className="li1">Returns & Refunds</li>
            <li>Return Policy</li>
            <li>How to return your order?</li>
            <li>Refund Policy</li>
            <li>FAQs</li>
            <li>Warranty & Service Center</li>
        </ul>
        <ul className="position-absolute hide listFour data-list">
            <li className="li1">Payment & Jumia Account</li>
            <li>Jumia Pay</li>
            <li>Cash on delivery</li>
            <li>Vouchers</li>
            <li>How to choose your payment?</li>
        </ul>

      </div>





    </div>
    </div>


     <center style={{fontWeight: '500',fontSize:'29px',color:'orange',marginTop:'30px'}}>Other Services</center>

   
     <div className="sixdiv">
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-global.png" alt=""/>
          <button >learn more</button>
        </div>
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-primo.png" alt=""/>
          <button>learn more</button>
        </div>
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-pay.png" alt=""/>
          <button>learn more</button>
        </div>
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-food.png" alt=""/>
          <button>learn more</button>
        </div>
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/jumia-express.png" alt=""/>
          <button>learn more</button>
        </div>
        <div className="">
          <img src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/official-stores.png" alt=""/>
          <button>learn more</button>
        </div>


     </div>
</div>
</div>
<MainFooter/>
    </div>
  )
}

export default HelpCenter