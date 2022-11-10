import React from 'react'
import "./ShopOnJumia.css"
import MainFooter from './MainFooter'
import Headeer from './Headeer'
export const ShopOnJumia = () => {
  return (
    <div>



<body>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <img src="https://static.jumia.com.eg/cms/bf-22-live-2/Sticky-banner/maybelline/EN.gif" alt=""width="100%"/>
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
                            <i className="fa fa-search" aria-hidden="true" style={{fontSize:'20px', opacity:"0.6"}}></i>
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
                            <i className="fa fa-arrow-down" aria-hidden="true" style={{opacity: '0.6', fontSize:'15px',paddingLeft:'10px',paddingTop:"5px"}}></i>
                        </button>
                        <button className="me-2 button-nav " id="button-nav1" onclick="bgc">
                         
                            Help
                            <i className="fa fa-arrow-down" aria-hidden="true"style={{opacity: '0.6', fontSize:'15px',paddingLeft:'10px',paddingTop:"5px"}}></i>
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

    <main className="container">
      <img className="mb-3" src="https://static.jumia.com.eg/cms/JPages-Revamp/How-to-shop/Banner/Artboard_1_copy_5-(1).jpg" alt=""/>
      <div className="text-center">
        <iframe src="https://www.youtube.com/embed/yA6QArKm-0s" style={{width: '560px', height: "315px"}}></iframe>
      </div>
        <p className="mt-4" style={{fontSize:'1.5rem', marginLeft: "5em"}}>You can find a product by following these steps:</p>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="container" style={{maxWidth: "80rem"}}>
            <div style={{marginLeft: '5em', backgroundColor: "#efefef"}} className="p-3 mb-3">
              <p style={{color: '#ff9a02'}} className="fw-bold h3">1. Find The Product</p>
              <div className="p-2" style={{backgroundColor: "#f7f7f7"}}>
                <ul>
                  <li>All products are arranged by categories and subcategories. We can search for any item by category or name.</li>
                  <li>You can use the search bar to find specific products, brands, or categories.</li>
                </ul>
                <p className="add-button fw-bold mb-4 shadow-sm p-1 w-75 ms-5 fs-6 d-flex justify-content-between" style={{cursor: "pointer"}}>To learn more, check out the screenshot below. <span>+</span></p>
                <img className="toggle-img" src="https://static.jumia.com.eg/cms/JPages-Revamp/How-to-shop/Steps/1/Find_the_product-EN.jpg" alt=""/>
              </div>
            </div>
            <div style={{marginLeft: '5em', backgroundColor: '#efefef'}} className="p-3 mb-3">
              <p style={{color: "#ff9a02"}} className="fw-bold h3">2. Product Information</p>
              <div className="p-2" style={{backgroundColor: "#f7f7f7"}}>
                <ul>
                  <li>Check the general information about the product, shipping, and return policy, and then click on the “Add to cart” button</li>
                  <li>Details on the product are below the general information.</li>
                  <li>Confirm selection if needed before viewing cart and checking out.
                    <ul style={{listStyle: "circle"}}>
                      <li>Check the product</li>
                      <li>Check the quantity</li>
                      <li>Check the total price</li>
                    </ul>
                  </li>
                </ul>
                <p className="add-button fw-bold mb-4 shadow-sm p-1 w-75 ms-5 fs-6 d-flex justify-content-between" style={{cursor: "pointer"}}>To learn more, check out the screenshot below. <span>+</span></p>
                <img className="toggle-img" src="https://static.jumia.com.eg/cms/JPages-Revamp/How-to-shop/Steps/2/Product_Details_-EN.jpg" alt=""/>
              </div>
            </div>
            <div style={{marginLeft: '5em', backgroundColor: "#efefef"}} className="p-3 mb-3">
              <p style={{color: "#ff9a02"}} className="fw-bold h3">3. Order Placement</p>
              <div className="p-2" style={{backgroundColor: "#f7f7f7"}}>
                <ul>
                  <li>When proceeding to checkout, You should:
                    <ul style={{listStyle: "circle"}}>
                      <li>Verify personal details (name, address, phone number)</li>
                      <li>Choose the delivery method: Door Delivery or Pickup Station</li>
                      <li>Then click on "Proceed to the next step"</li>
                    </ul>
                  </li>
                  
                  <li>You can select the preferred payment method:
                    <ul style={{listStyle: "circle"}}>
                      <li>Online via JumiaPay, with a credit or debit card</li>
                      <li>Via Mobile Money (MEZA) or Vodafone cash</li>
                      <li>Via Cash on delivery</li>
                      <li>Via Fawry</li>
                    </ul>
                  </li>
                  
                  <li>Add a voucher (if you have one) regardless of the payment method.</li>
                  
                </ul>
                <p className="add-button fw-bold mb-4 shadow-sm p-1 w-75 ms-5 fs-6 d-flex justify-content-between" style={{cursor: "pointer"}}>To learn more, check out the screenshot below. <span>+</span></p>
                <img className="toggle-img" src="https://static.jumia.com.eg/cms/JPages-Revamp/How-to-shop/Steps/3/Order_Placement_1000x560_-EN_copy.jpg" alt=""/>
              </div>
            </div>
            <div style={{marginLeft: '5em', backgroundColor: "#efefef"}} className="p-3 mb-3">
              <p style={{color: "#ff9a02"}} className="fw-bold h3">4. Order Confirmation</p>
              <div className="p-2" style={{backgroundColor: "#f7f7f7"}}>
                <ul>
                  <li>After choosing the payment method, click on "Confirm Order" and you will receive an email with all the details.</li>
                </ul>
                <p className="add-button fw-bold mb-4 shadow-sm p-1 w-75 ms-5 fs-6 d-flex justify-content-between" style={{cursor: 'pointer'}}>To learn more, check out the screenshot below. <span>+</span></p>
                <img className="toggle-img" src="https://static.jumia.com.eg/cms/JPages-Revamp/How-to-shop/Steps/4/830x1300-_EN_Confirm_order.jpg" alt=""/>
              </div>
            </div>
        </div>
      </div>
      <a href="#" className="shop-now mb-3">shop now</a>
    </main>
</body>






<MainFooter/>





    </div>
  )
}


export default ShopOnJumia