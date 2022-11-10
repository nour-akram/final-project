import React from "react"
import "./SingleProduct.css"
// import JumiaExpressLogo from "../../assets/jexpress-logo.png"
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { MdAddShoppingCart } from "react-icons/md"
import { BsStarHalf, BsStarFill } from "react-icons/bs"
import { formatCurrency } from "../../utils/formatCurrency"
// import JumiaIcon from "../../assets/jumia-icon-small.png"
// import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

function SingleProduct() {
  const [toggleOverlay, setToggleOverlay] = useState(false)
  // const { productId } = useParams()

  useEffect(() => {
    // dispatch(fetchSingleProdcut(productId))
  }, [])

  // const singleProduct = useSelector((state) => state.product.singleProduct)

  // if (!Object.keys(singleProduct).length) {
  //   return <LoadingAnimation />
  // }

  const params = useParams();

  return (
    <div className="single-product">
      {toggleOverlay && (
        <div
          className="overlay-container"
          onClick={(e) => {
            setToggleOverlay(false)
          }}
        >
          <div
            className="img-container"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <div className="close-icon" onClick={() => setToggleOverlay(false)}>
              <AiOutlineClose />
            </div>
            <h3>Product Image</h3>
            {/* <img src={singleProduct.thumbnail} alt="single product thumbnail" /> */}
          </div>
        </div>
      )}

      <div className="single-product__left">
        <div className="single-product__left__left">
          <img
            onClick={() => setToggleOverlay(true)}
            src={params.imageurl}
            className="product-img"
            alt=""
          />
          <div className="share">
            <h3>share this product</h3>
            <div className="social-icons">
              <div className="social-icon">
                <FaFacebookF />
              </div>
              <div className="social-icon">
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="single-product__left__right">
          <div className="title">{params.description}</div>
          <div className="brand">
            Brand: <span>{params.brand}</span>
          </div>
          <div className="stars">
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarFill color="#ff9900" />
            <BsStarHalf color="#ff9900" /> (<span>{params.rating}</span>
            {""}){""}
          </div>
          <div className="price">{params.price}</div>
          <div className="discount">
            <span className="lastPrice">
            {params.old}
            </span>
            <span className="discount-value">
              {params.discount}
            </span>
          </div>
          <button className="addToCartButton main-btn">
            <MdAddShoppingCart fontSize={25} /> <span>Add To Cart</span>{" "}
          </button>
          <div className="promotions">
            <h3>promotions</h3>
            <ul>
              <li>
                {/* <img src={JumiaIcon} alt="jumia icon" />6 months installments, */}
                0% interest, 0% down payment and 0% purchase fees with valU.

</li>
              <li>
                {/* <img src={JumiaIcon} alt="jumia icon" /> */}
                Use "GAM15" at checkout to get 15% Cash back on all gaming
                vouchers with a maximum discount of 25EGP
              </li>
              <li>
                {/* <img src={JumiaIcon} alt="jumia icon" /> */}
                Your landline bill is available now, pay it from here in
                seconds!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="single-product__right">
        <h2>Delivery & Returns</h2>
        <article>
          <h3>
            {/* <img src={JumiaExpressLogo} alt="Jumia Express Logo" /> */}
          </h3>
          <p>
            Order from Jumia Express items and get free shipping.{" "}
            <span className="details-popup">Details</span>
          </p>
        </article>
        <div className="location-container">
          <h2>Choose your location</h2>
          <div className="select-box">
            <select required defaultValue={"DEFAULT"}>
              <option disabled>Please select</option>
              <option>Al Beheira</option>
              <option>Al Daqahliya</option>
              <option>Al Fayoum</option>
              <option>Al Gharbia</option>
              <option>Al Meniya</option>
              <option>Al Monufia</option>
              <option>Al Sharqia</option>
              <option>Alexandria</option>
              <option>Aswan</option>
              <option>Asyut</option>
              <option>Bani Souaif</option>
              <option>Cairo</option>
              <option>Damietta</option>
              <option value="DEFAULT">Giza</option>
              <option>Ismailia</option>
              <option>Kafr El-Sheikh</option>
              <option>Luxor</option>
              <option>North Coast</option>
              <option>Port Said</option>
              <option>Qalyubia</option>
              <option>Qena</option>
              <option>Red Sea</option>
              <option>Sohag</option>
              <option>South Sinai</option>
              <option>Suez</option>
            </select>
            <AiOutlineCaretDown className="dropdown-menu" />
          </div>
          <div className="select-box">
            <select required>
              <option value disabled>
                Please select
              </option>
              <option>Abnoub</option>
              <option>Abouteag</option>
              <option>Aelbdarey</option>
              <option>Arab Elawamer</option>
              <option>Assuit Elgdeda</option>
              <option>Asyut</option>
              <option>Beny Hossien</option>
              <option>Dayrout</option>
              <option>Dronka</option>
              <option>Elfath</option>
              <option>Elghnayem</option>
              <option>Elqusya</option>
              <option>Elzawya</option>
              <option>Manflout</option>
              <option>Manqbad</option>
              <option>Refa</option>
              <option>Sahel Selim</option>
              <option>Serfa</option>
            </select>
            <AiOutlineCaretDown className="dropdown-menu" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
