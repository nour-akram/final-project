import React from 'react'
import MainFooter from './MainFooter';
import Headeer from './Headeer';
export const Delivery = () => {
  return (
    <div>
       
       <body>
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
                  style={{paddingLeft: '50', width: "400px"}}
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

    <div className="main">
      <div className="row">
        <div className="col-10" style={{marginLeft: '100px', marginTop: "30px"}}>
          <img
            src="https://static.jumia.com.eg/cms/JPages-Revamp/Tiers/Artboard_1_copy_5.jpg"
            alt=""
          />
        </div>
      </div>

      <center
        style={{
          fontWeight: '600',
          fontSize: '17px',
          color: 'orange',
          marginTop: '28px'}}
        
      >
        Just enter your region's name & check when your order will be received
      </center>

      <div className="noura" style={{marginTop: "30px"}}>
        <i
          className="fa fa-search"
          aria-hidden="true"
          style={{fontSize: '20px', opacity: "0.6"}}
        ></i>
        <input
          className="inpt"
          style={{paddingLeft: '50x', width: "400px"}}
          type="text"
          placeholder=" ur region"
        />
      </div>

      <p style={{fontSize: '15px', marginTop: '40px', paddingLeft: "200px"}}>
        The timelines quoted are business days - Sunday to Thursday only,<span
          style={{fontWeight: '800', fontSize: "17px"}}
        >
          weekends and public holidays are NOT included.</span
        >
        They vary depending on <br />
        the delivery option chosen:
      </p>

      <ul style={{fontSize: '14px', marginLeft: "230px"}}>
        <li>
          <span style={{fontWeight: '900', fontSize: "13px"}}>Door Delivery:</span>
          Delivery time starts <span style={{color: "orange"}}>from</span> the day
          you place your order <span style={{color: "orange"}}>to</span> the day one
          of our delivery associates makes a first attempt to deliver to you.
          <br />
          Delivery will be attempted between 10.00 AM to 6.00 PM Sunday to
          Thursday.
        </li>

        <li>
          <span style={{fontWeight: '900', fontSize: "13px"}}
            >Pick Up Station:</span
          >
          Delivery time starts <span style={{color: "orange"}}>from</span> the day
          you place your order <span style={{color: "orange"}}>to</span> when you
          receive the first SMS to pick up your order from our pickup <br />
          station.
        </li>
      </ul>

      <p style={{fontSize: '15px', marginTop: '40px', paddingLeft: "200px"}}>
        <span style={{fontWeight: "900"}}>Jumia Express: </span> Order must be
        placed before 6pm for the timelines above. Otherwise, an additional 1
        business day may apply. To find out more <br />
        about Jumia Express,
        <a
          href="help center.html"
          style={{color: 'orange', textDecoration: 'none', fontWeight: "800"}}
        >
          click here</a
        >.
      </p>
      <p style={{fontSize: '15px', marginTop: '40px', paddingLeft: "200px"}}>
        <span style={{fontWeight: "900"}}>Standard Shipping: </span> are held in
        stock with sellers and shipped once received at our warehouse.
      </p>
      <p
        style={{
          fontSize: '15px',
          marginTop: '40px',
          paddingLeft: '200px',
          marginBottom: '130px'}}
        
      >
        <span style={{fontWeight: "900"}}> Jumia Global: </span> : Products are
        shipped from overseas. To find out more
        <a
          href="help center.html"
          style={{color: 'orange', textDecoration: 'none', fontWeight: "800"}}
        >
          click here</a
        >.
      </p>
    </div>
      </body>
<MainFooter/>


        </div>
  )
}

export default Delivery;