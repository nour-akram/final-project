import React from 'react'
import Headeer from './Headeer'
import MainFooter from './MainFooter'
import'./PayOnJumia.css'

export const PayOnJumia = () => {
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



    <header className="border">
      <div className="conterainer">
        <div className="row justify-content-around">
          <div className="col-2 mt-3">
            <log className="d-flex align-items-center">
              <img
                src="https://th.bing.com/th/id/OIP.SLq-CIFrKxTGUdR3eiHkYwHaBR?pid=PersonalBing&rs=1"
                alt="jumia"
                className="image-log mt-1 mb-2"
              />
            </log>
          </div>

          <div className="col-6 mt-3">
            <form className="d-flex">
              <div className="search-div me-2 ps-2">
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{fontSize: '20px', opacity: "0.6"}}
                ></i>
                <input
                  className="inpt"
                  style={{paddingLeft: '50x', width: '400px'}}
                  type="text"
                  placeholder="search for product"
                />
              </div>
              <button className="btn" type="submit">SEARCH</button>
            </form>
          </div>

          <div className="col-3">
            <div className="d-flex mt-3">
              <button className="button-nav" id="button-nav" onclick="bgc">
                {/* <!-- <span className="-fsh0 -mrs"><svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                                            <use
                                                xlink:href="https://www.jumia.com.eg/assets_he/images/i-icons.48f69aa0.svg#person">
                                            </use>
                                        </svg></span> --> */}
                <i className="fa-regular fa-user me-2"></i>
                Account
                <i
                  className="fa fa-arrow-down"
                  aria-hidden="true"
                  style={{
                    opacity: '0.6',
                    fontSize: '15px',
                    paddingLeft: '10px',
                    paddingTop: '5px'}}
                  
                ></i>
              </button>
              <button className="me-2 button-nav" id="button-nav1" onclick="bgc">
                Help
                <i
                  className="fa fa-arrow-down"
                  aria-hidden="true"
                  style={{
                    opacity: '0.6',
                    fontSize: '15px',
                    paddingLeft: '10px',
                    paddingTop: '5px'}}
                  
                ></i>
              </button>
              <a href="#" className="me-2 button-nav-cart">
                <i
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                  style={{opacity: '0.6', fontSize: '20px', paddingRight: "10px"}}
                ></i>
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="section">
      <div className="row">
        <div className="col-10" style={{marginLeft: '100px', marginTop: "20px"}}>
          <img

            src="https://static.jumia.com.eg/cms/JPages-Revamp/How-To-Pay/Banners/Artboard_1_copy_7-2.jpg"
            alt=""
          />
        </div>
      </div>

      <center
        style={{
          fontSize: '26px',
          opacity: '0.6',
          fontWeight: '900',
          marginTop: '40px',
          marginBottom: '40px'}}
        
      >
        Your Different Payment Options
      </center>

      <div className="threesdiv">
        <div className="onediv">
          <p style={{marginTop: '10px', marginLeft: '40px'}}>Jumia Pay</p>
          <img
            src="https://static.jumia.com.eg/cms/15-19/JUMIAPay_Lp2i_02.jpg"
            alt=""
          />
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity: '0.5',
              marginTop: '10px'}}
            
          >
            Create your own & safe account
          </p>
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity: '0.5',
              marginTop: '-10px'}}
            
          >
            Make more top-ups & receive more gifts
          </p>
          <a href="contact us.html"><div>LEARN MORE</div></a>
        </div>

        <div className="twodiv">
          <p style={{marginTop: '10px', marginLeft: "40px"}}>Pay on Delivery</p>
          <img
            src="https://static.jumia.com.eg/cms/content-pages/pay/KE_W17_LP_Content_Page_Update_27042016-01_03.jpg"
            alt=""
          />
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity: '0.5',
              marginTop: '10px'}}
            
          >
            Shop like a store, but at home!
          </p>
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity:'0.5',
              marginTop: '-10px'}}
      >
            No rush, just pay at your doorstep
          </p>
          <a href="contact us.html"><div>LEARN MORE</div></a>
        </div>

        <div className="threediv">
          <p style={{marginTop: '10px', marginLeft: '40px'}}>Vouchers</p>
          <img
            src="https://static.jumia.com.eg/cms/external/cms/how-to-shop_en_EG/images-(2).png"
            alt=""
          />
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity: '0.5',
              marginTop: '10px'}}
            
          >
            You can use your voucher
          </p>
          <p
            style={{
              fontSize: '17px',
              color: 'black',
              opacity: '0.5',
              marginTop: -'10px'}}
        
          >
            as a means of payment
          </p>
          <a href="contact us.html"><div>LEARN MORE</div></a>
        </div>
      </div>

      <center
        style={{
          fontSize: '26px',
          opacity: '0.3',
          fontWeight: '900',
          marginTop: '40px',
          marginBottom: '40px'}}
      >
        How To Select Payment Options During Checkout?
      </center>
      <center
        style={{
          fontSize: '20px',
          opacity: '0.2',
          fontWeight: '700',
          marginTop: '-40px',
          marginBottom: '40px'}}
        
      >
        During the payment step, you can choose your preferred payment method
        from the menu on the left as below.
      </center>

      <div>
        <img
          style={{
            marginLeft: '120px',
            border: '2px solid #dcdcdc',
            marginBottom: '30px'}}
          
          src="https://static.jumia.com.eg/cms/JPages-Revamp/How-To-Pay/Screenshots/EN-(1).jpg"
          alt=""
        />
      </div>
      <center style={{color: 'orange', fontWeight: '600', fontSize: "22px"}}>
        It's Simple, It's Easy and It's Safe.
      </center>
      <center>
        <a href="#" id="nano"><div>SHOP NOW</div></a>
      </center>
    </div>
</body>

<MainFooter/>
    </div>
  )
}


export default PayOnJumia