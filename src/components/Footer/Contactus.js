import React from 'react'
import"./Contactus.css"
import Footer from './Footer'
import Headeer from './Headeer'
import MainFooter from './MainFooter'
export const Contactus = () => {
  return (
    <div>
        
        <body>
        <div class="container-fluid">
      <div class="row">
        <div class="col-12 ps-0 pe-0">
          <img
            src="https://static.jumia.com.eg/cms/bf-22-live-2/Sticky-banner/maybelline/EN.gif"
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
                            <i className="fa fa-search" aria-hidden="true" style={{fontSize:'20px' , opacity:'0.6'}}></i>
                            <input className="inpt" style={{paddingLeft: '50x', width:'400px'}}  type="text" placeholder="search for product"/>
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
                            <i className="fa fa-arrow-down" aria-hidden="true" style={{opacity: '0.6' , fontSize:'15px',paddingLeft:'10px',paddingTop:'5px'}}></i>
                        </button>
                        <button className="me-2 button-nav " id="button-nav1" onclick="bgc">
                         
                            Help
                            <i className="fa fa-arrow-down" aria-hidden="true"style={{opacity: '0.6', fontSize:'15px',paddingLeft:'10px',paddingTop:'5px'}}></i>
                        </button>
                        <a href="#" className="me-2 button-nav-cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true" style={{opacity: '0.6', fontSize:'20px',paddingRight:'10px'}}></i>
                            Cart
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </header>

    <main className="text-center container">
      <div className="img-container">
        <img src="https://eg.jumia.is/cms/JPages-Revamp/Contact-Us/Banners/1170x295_-EN.jpg" alt="contact us img" />
      </div>
      <h1 className="text-center fs-3 mt-4 mb-5 fw-bold" style={{color: '#fd9b01'}}>Check Our Working Hours & Don't Hesitate To Reach Out For Help!</h1>
      <img className="w-100" src="https://eg.jumia.is/cms/JPages-Revamp/Contact-Us/Working-Hours/Desk/new-logos.jpg" alt=""/>
      <div className="row mb-5 ms-5 ps-1">
        <div className="p-4 text-center rounded-3 me-2" style={{width:'48%', backgroundColor: '#fe9900', height: "190px"}}>
          <h2 className="text-white fs-3">Customer Service</h2>
          <p className="fs-5 fw-bold">7 Days a week</p>
          <p className="text-white fs-6">09:00 am - 08:00 pm</p>
          <p className="fs-6 fw-bold">Hotline: <span className="text-white">19586</span></p>
        </div>
        <div className="p-4 text-center rounded-3 me-2" style={{width: '24%', backgroundColor: '#ea4d22', height: "190px"}}>
          <h2 className="text-white fs-4">Jumia Food Live Chat</h2>
          <p className="fs-5 fw-bold">7 Days a week</p>
          <p className="text-white fs-6">08:00 am - 03:00 am</p>
        </div>
        <div className="p-4 text-center rounded-3" style={{width: '24%',backgroundColor: '#0099ff' , height: "190px"}}>
          <h2 className="text-white fs-4">Jumia Pay Email</h2>
          <p className="fs-5 fw-bold mb-1">7 Days a week</p>
          <p className="text-white fs-6 mb-1">09:00 am - 07:00 pm</p>
          <p className="text-white fw-bold">You Can Contact us through our<br></br>email <span className="text-dark">cs.pay.eg@jumia.com</span></p>
        </div>
      </div>
      <h1 className="mb-5 fs-3 fw-bold">Our Online Serivces</h1>
      
      
      <div className="rounded-3 pe-4 py-2 mb-2 ms-5 ps-1 card-hover d-flex align-items-center" style={{backgroundColor: '#efefef', width: "60%"}}>
        <img className="me-3" style={{width: '3rem'}} src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/place-track-order.png" alt=""/>
        <p className="h5 fw-bold">How to track your order?</p>
        <span className="h5 pe-2" style={{flex: '1', textAlign: 'right'}}>+</span>
      </div>
      <div className="position-relative rounded-3 pe-4 py-2 mb-2 ms-5 ps-1 card-hover d-flex align-items-center" style={{backgroundColor: '#efefef', left: '20rem', width: "60%"}}>
        <img className="me-3" style={{width: '3rem'}} src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/cancelation.png" alt=""/>
        <p className="h5 fw-bold">How to cancel your order</p>
        <span className="h5 pe-2" style={{flex: '1', textAlign: 'right'}}>+</span>
      </div>
      <div className="position-relative rounded-3 pe-4 py-2 mb-5 ms-5 ps-1 card-hover d-flex align-items-center" style={{backgroundColor: '#efefef', left: '30rem', width: "60%"}}>
        <img className="me-3" style={{width: '3rem' }}src="https://eg.jumia.is/cms/JPages-Revamp/Help-Center/returns.png" alt=""/>
        <p className="h5 fw-bold">How to return your order</p>
        <span className="h5 pe-2" style={{flex: '1', textAlign: 'right'}}>+</span>
      </div>
    </main>
        </body>
        <MainFooter/>
        </div>
  )
}

export default Contactus