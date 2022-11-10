import React, { useState, useEffect } from "react"
import "./Header.css"
import Banner from "../../assets/banner.jpg"
import JumiaIcon from "../../assets/jumia-icon.png"
import EnFlag from "../../assets/england.png"
import EgFlag from "../../assets/egypt.png"
import JumiaLogo from "../../assets/jumia-logo.png"
import fordark from "../../assets/fordark.png"
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoPersonOutline } from "react-icons/io5"
import {
  AiOutlineQuestionCircle,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiTwotoneProject,
} from "react-icons/ai"
import { BiHeart } from "react-icons/bi"
import { FiShoppingBag } from "react-icons/fi"
import { BsChatLeftDots } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { ThemeContext } from "../../App"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
function Header() {
  const [isAccountActive, setIsAccountActive] = useState(false)
  const [isHelpAcitve, setIsHelpAcitve] = useState(false)
  const [isCartAtive, setIsCartActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuOpened, setMenuOpened] = useState(true)
  const {username, setUsername} = useContext(ThemeContext)
  if(localStorage.getItem("username")){
   setUsername(  localStorage.getItem("username"))

  }

  useEffect(() => {
    if (window.innerWidth > 850) {
      setMenuOpened(true)
    } else {
      setMenuOpened(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      if (windowWidth > 850) {
        setMenuOpened(true)
      }
    })
  }, [window.innerWidth])

    // const navigate = useNavigate();
   
  //  const {Lang, setLang} =useContext(LanguageContext);

  //  const toggleLanguageArabic = ()=>{
  //    setLang("ar")
  //  }
  //  const toggleLanguageEnglish = ()=>{
  //   setLang("en")
  // }



  return (
    <>
    <header >
      <div className="header__banner">
        <img
          src="https://eg.jumia.is/cms/bf-22-live/Sticky-Banner/JE/EN.gif"
          alt="free shipping banner"
          className="header__banner__img"
        />
      </div>
      <div className="header__small-banner">
        <a className="header__small-banner__sellOnJumia" href="#">
          <img
            src={JumiaIcon}
            alt="Jumia icon"
            className="header__small-banner__img"
          />
          <span className="header__small-banner__text">Sell on Jumia</span>
        </a>
        <div className="header__small-banner__middle-icons">
          <span>FOOD</span>
          <span>PRIMO</span>
          <span>PAY</span>
          <span>LOGISTICS</span>
        </div>
        <div className="header__small-banner__lang">
          <div className="lang-flag">
            <span>
              <img src={EnFlag} alt="" className="half-transparent" />
            </span>
          <span>English</span>
          </div>
          <div
            className="lang-flag  "
            style={{ border: 0, marginRight: 0, paddingRight: 0 }}
          >
            <span>
              <img src={EgFlag} alt="" />
            </span>
            <span lang="ar" className="arabic" >
              عربي
            </span>
          </div>
          <div className="eg"></div>
        </div>
        <div className="w-3"></div>
      </div>
      <div className="header__header" style={{ position: 'sticky', top: '0'}}>
      
        
        
        <div className="header__header__logo">
          <img src={JumiaLogo} alt="Jumia Logo" />
        </div>
        <div className="header__header__search">
          <div className="header__header__search--input">
            <span className="search-icon">
              <MdOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Search Products, brands and categories"
              className="search-input"
            />
          </div>
          <div className="header__header__search--button">
            <button className="main-btn">search</button>
          </div>
        </div>
        {windowWidth <= 850 && (
          <div className={ "menu-icon-container"}>
            <AiOutlineMenu
              fontSize={25}
              onClick={() => setMenuOpened(!menuOpened)}
            />
          </div>
        )}
        {menuOpened && (
          <div className="header__header__account-help-cart">
            <div
              className={isAccountActive ? "account active" : "account"}
              onClick={() => {
                setIsAccountActive(!isAccountActive)
                setIsHelpAcitve(false)
                setIsCartActive(false)
              }}
            >
              {isAccountActive && (
                <div className="toggled-menu">
                   <Link to='/login1' style={{width:"200px",marginLeft:'30px'}}>  
                   <button className="main-btn">
                    sign in
                  </button>
                  </Link>
                 
                  <hr />
                  <ul className="account-menu">
                  <li className="account-item">
                      <IoPersonOutline />
                      My Account
                    </li>
                    <li className="account-item">
                      <FiShoppingBag />
                      Orders
                    </li>
                   <li className="account-item">
                      <BiHeart />
                      Saved Items
                    </li>
                  </ul>
                </div>
              )}
              <span>
                <IoPersonOutline />
              </span>
              <span>{username?`HI ${username}`:"Account"} </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            <div
              className={isHelpAcitve ? "help active" : "help"}
              onClick={() => {
                setIsAccountActive(false)
                setIsHelpAcitve(!isHelpAcitve)
                setIsCartActive(false)
              }}
            >
              {isHelpAcitve && (
                <div className="help-menu">
                  <ul>
                   <li>Help Center</li>
                    <li>Place &amp; track order</li>
                    <li>Order Cancellation</li>
                    <li>Return &amp; Refunds</li>
                    <li>Payment &amp; Jumia account</li>
                  </ul>
                  <hr />
                  <button className="main-btn">
                    <BsChatLeftDots fontSize={20} />
                    live chat
                  </button>
                </div>
              )}
              <span>
                <AiOutlineQuestionCircle />
              </span>
              <span>Help</span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            <div
              className={isCartAtive ? "cart active" : "cart"}
              onClick={() => {
                setIsAccountActive(false)
                setIsHelpAcitve(false)
                setIsCartActive(!isCartAtive)
              }}
            >
              <span>
                <AiOutlineShoppingCart />
              </span>
              <span>Cart</span>
            </div>
          </div>
        )}
      </div>
    </header>

        </>

  )
}

export default Header
