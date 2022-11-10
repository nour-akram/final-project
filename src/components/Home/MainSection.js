import React, { useEffect, useState } from "react"
import "./MainSection.css"
import { CiApple } from "react-icons/ci"
import { IoShirtOutline } from "react-icons/io5"
import { BiFoodMenu, BiCar } from "react-icons/bi"
import { GiBabyFace, GiWeightLiftingUp } from "react-icons/gi"
import { VscHome } from "react-icons/vsc"
import { IoGameControllerOutline } from "react-icons/io5"
import { MdOutlineOndemandVideo, MdOutlinePersonalVideo } from "react-icons/md"
import { TbDotsCircleHorizontal } from "react-icons/tb"
import { SliderComponent } from "../../utils/SliderComponent"
import slider_1 from "../../assets/slider_1.png"
import slider_2 from "../../assets/slider_2.jpg"
import slider_3 from "../../assets/slider_3.png"
import slider_4 from "../../assets/slider_4.jpg"
import slider_5 from "../../assets/slider_5.png"
import slider_6 from "../../assets/slider_6.gif"
import slider_7 from "../../assets/slider_7.gif"
import sale_1 from "../../assets/sale_1.jpg"
import sale_2 from "../../assets/sale_2.png"
import {Link} from "react-router-dom"

function MainSection() {
  const [contentOnHoverOne, setContentOnHoverOne] = useState(false)
  const [contentOnHoverTwo, setContentOnHoverTwo] = useState(false)
  const [contentOnHoverThree, setContentOnHoverThree] = useState(false)
  const [contentOnHoverFour, setContentOnHoverFour] = useState(false)
  const [contentOnHoverFive, setContentOnHoverFive] = useState(false)
  const [contentOnHoverSix, setContentOnHoverSix] = useState(false)
  const [contentOnHoverSeven, setContentOnHoverSeven] = useState(false)
  const [contentOnHoverEight, setContentOnHoverEight] = useState(false)
  const [contentOnHoverNine, setContentOnHoverNine] = useState(false)
  const [contentOnHoverTen, setContentOnHoverTen] = useState(false)
  const [contentOnHoverEleven, setContentOnHoverEleven] = useState(false)
  const [contentOnHoverTwelve, setContentOnHoverTwelve] = useState(false)

 
  // console.log(products)

  return (
    <>
      <div className="main-section">
        <ul className="main-section__left">
         <Link to="/Hashim">
         <li
            onMouseMove={() => setContentOnHoverOne(true)}
            onMouseLeave={() => setContentOnHoverOne(false)}
          >
            <CiApple fontSize={15} />
            Supermarket
          </li>
         </Link>
          <li
            onMouseMove={() => setContentOnHoverTwo(true)}
            onMouseLeave={() => setContentOnHoverTwo(false)}
          >
            <IoShirtOutline fontSize={15} />
            Fashion
          </li>
          <li
            onMouseMove={() => setContentOnHoverThree(true)}
            onMouseLeave={() => setContentOnHoverThree(false)}
          >
            <BiFoodMenu fontSize={15} />
            Health & Beauty
          </li>
          <li
            onMouseMove={() => setContentOnHoverFour(true)}
            onMouseLeave={() => setContentOnHoverFour(false)}
          >
            <GiBabyFace fontSize={15} />
            Baby Products
          </li>
          <li
            onMouseMove={() => setContentOnHoverFive(true)}
            onMouseLeave={() => setContentOnHoverFive(false)}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fontSize="15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              ></path>
            </svg>
            Phones & Tablets
          </li>
          <li
            onMouseMove={() => setContentOnHoverSix(true)}
            onMouseLeave={() => setContentOnHoverSix(false)}
          >
            <VscHome fontSize={15} />
            Home & Office
          </li>
          <li
            onMouseMove={() => setContentOnHoverSeven(true)}
            onMouseLeave={() => setContentOnHoverSeven(false)}
          >
            <MdOutlineOndemandVideo fontSize={15} />
            Electronics
          </li>
          <li
            onMouseMove={() => setContentOnHoverEight(true)}
            onMouseLeave={() => setContentOnHoverEight(false)}
          >
            <MdOutlinePersonalVideo fontSize={15} />
            Computing
          </li>
          <li
            onMouseMove={() => setContentOnHoverNine(true)}
            onMouseLeave={() => setContentOnHoverNine(false)}
          >
            <GiWeightLiftingUp fontSize={15} />
            Sporting Goods
          </li>
          <li
            onMouseMove={() => setContentOnHoverTen(true)}
            onMouseLeave={() => setContentOnHoverTen(false)}
          >
            <IoGameControllerOutline fontSize={15} />
            Gaming
          </li>
          <li
            onMouseMove={() => setContentOnHoverEleven(true)}
            onMouseLeave={() => setContentOnHoverEleven(false)}
          >
            <BiCar fontSize={15} />
            Automobile
          </li>
          <li
            onMouseMove={() => setContentOnHoverTwelve(true)}
            onMouseLeave={() => setContentOnHoverTwelve(false)}
          >
            <TbDotsCircleHorizontal fontSize={15} />
            Other categories
          </li>

          {contentOnHoverOne && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverOne(true)}
              onMouseLeave={() => setContentOnHoverOne(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  FOOD CUPBOARD
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Grains & Rice</li>
                  <li>Pasta & Noodles</li>
                  <li>Cooking Oil</li>
                  <li>Vinegar</li>
                  <li>Sauce & Dressings</li>
                  <li>Sugars & Sweeteners</li>
                  <li>Flour</li>
                  <li>Herbs & Spices</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BEVERAGES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Juices</li>
                  <li>Soft Drinks</li>
                  <li>Coffee, Tea & Cocoa</li>
                  <li>Water</li>
                  <li>Powdered Drink Mixes & Flavorings</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  CANNED, JARRED & PACKAGED FOODS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Antipasto</li>
                  <li>Beans & Peas</li>
                  <li>Vegetables</li>
                  <li>Meat, Poultry & Seafood</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BREAKFAST FOODS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Cereal</li>
                  <li>Breakfast Biscuits & Cookies</li>
                  <li>Jams, Jellies & Sweet Spreads</li>
                  <li>Candy & Chocolate</li>
                  <li>Crisps & Chips</li>
                  <li>Nuts & Seeds</li>
                </ul>
              </div>

              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HOUSEHOLD CLEANING
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Dishwashing</li>
                  <li>Air Fresheners</li>
                  <li>Kitchen Cleaners</li>
                  <li>Bathroom Cleaners</li>
                  <li>Floor Cleaners</li>
                  <li>Glass Cleaners</li>
                  <li>Disinfectants</li>
                  <li>Cleaning Tools</li>
                  <li>Paper & Plastic</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverTwo && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverTwo(true)}
              onMouseLeave={() => setContentOnHoverTwo(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  WOMEN'S FASHION
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Blouses</li>
                  <li>Shirts</li>
                  <li>Dresses</li>
                  <li>Skirts</li>
                  <li>Pants</li>
                  <li>Jeans</li>
                  <li>Swimsuits</li>
                  <li>Slippers</li>
                  <li>Sneakers</li>
                  <li>Flats & Ballerinas</li>
                  <li>Heels</li>
                  <li>Jumpsuits</li>
                  <li>Sleepwear</li>
                  <li>Sunglasses</li>
                  <li>Bags</li>
                  <li>Jewelry</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  MEN'S FASHION
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>T-Shirts</li>
                  <li>Polos</li>
                  <li>Shirts</li>
                  <li>Pants</li>
                  <li>Jeans</li>
                  <li>Shorts</li>
                  <li>Underwear</li>
                  <li>Swimsuits</li>
                  <li>Sportswear</li>
                  <li>Sneakers</li>
                  <li>Loafers</li>
                  <li>Slippers</li>
                  <li>Sandals</li>
                  <li>Jewelry</li>
                  <li>Watches</li>
                  <li>Belts</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">BABY</div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Baby Boys</li>
                  <li>Baby Girls</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  KID'S FASHION
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Boys Fashion</li>
                  <li>Girls Fashion</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOP BRANDS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>American Eagle</li>
                  <li>DeFacto</li>
                  <li>Reebok</li>
                  <li>Adidas</li>
                  <li>LC Waikiki</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverThree && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverThree(true)}
              onMouseLeave={() => setContentOnHoverThree(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BEAUTY & PERSONAL CARE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Skin Care</li>
                  <li>Feminine Care</li>
                  <li>Shave & Hair Removal</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HAIR CARE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Styling Tools & Appliances</li>
                  <li>Styling Products</li>
                  <li>Shampoo</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  FRAGRANCE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Women's</li>
                  <li>Men's</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  MAKEUP
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Foundation</li>
                  <li>Powder</li>
                  <li>Concealers & Neutralizers</li>
                  <li>Lipstick</li>
                  <li>Lip Liners</li>
                  <li>Lip Glosses</li>
                  <li>Mascara</li>
                  <li>Eyeliner</li>
                  <li>Eyeshadow</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HEALTH CARE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Wellness & Relaxation</li>
                  <li>Sexual Wellness</li>
                  <li>Medical Supplies & Equipment</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOP BRANDS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Braun</li>
                  <li>L'oreal</li>
                  <li>Durex</li>
                  <li>Maybelline</li>
                  <li>Veet</li>
                  <li>The Body Shop</li>
                  <li>Nivea</li>
                  <li>P&G</li>
                  <li>Johnson's</li>
                  <li>GSK</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverFour && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverFour(true)}
              onMouseLeave={() => setContentOnHoverFour(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  DIAPERING
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Diapers</li>
                  <li>Baby Wipes</li>
                  <li>Diaper bags</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BABY FEEDING
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Bottle Feeding</li>
                  <li>Breast feeding</li>
                  <li>Baby Food</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BATH & SKIN CARE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Baby Creams & Lotions</li>
                  <li>Baby Shampoo</li>
                  <li>Baby Soaps</li>
                  <li>Baby Conditioners</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BABY SAFETY
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Rails & Rail Guards</li>
                  <li>Kitchen Safety</li>
                  <li>Monitors</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  STROLLERS & ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Strollers Accessories</li>
                  <li>Strollers</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">GEAR</div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Swings, Jumpers & Bouncers</li>
                  <li>Backpacks & Carriers</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  NURSERY
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Beds, Cribs & Bedding</li>
                  <li>Nursery Decor</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BABY & TODDLER TOYS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Toy Gift Sets</li>
                  <li>Blocks</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOYS & GAMES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Dolls & Accessories</li>
                  <li>Learning & Education</li>
                  <li>Action Figures & Statues</li>
                  <li>Arts & Crafts</li>
                  <li>Dress Up & Pretend Play</li>
                  <li>Puzzles</li>
                  <li>Toy Remote Control & Play Vehicles</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverFive && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverFive(true)}
              onMouseLeave={() => setContentOnHoverFive(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  MOBILE PHONES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Smartphones</li>
                  <li>Cell Phones</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TABLETS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>iPad Tablets</li>
                  <li>Tablet Accessories</li>
                  <li>Bags & Cases</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  MOBILE ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Phone Cases</li>
                  <li>Screen Protectors</li>
                  <li>Bluetooth Headsets</li>
                  <li>Corded Headsets</li>
                  <li>Cables</li>
                  <li>Portable Power Banks</li>
                  <li>Smart Watches</li>
                  <li>Memory Cards</li>
                  <li>Chargers</li>
                  <li>Car Accessories</li>
                  <li>Mounts & Stands</li>
                  <li>Selfie Sticks & Tripods</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOP BRANDS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Realme</li>
                  <li>Samsung</li>
                  <li>Huawei</li>
                  <li>Xiaomi</li>
                  <li>Lenovo</li>
                  <li>Tecno</li>
                  <li>Infinix</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverSix && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverSix(true)}
              onMouseLeave={() => setContentOnHoverSix(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HOME & KITCHEN
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Bedding</li>
                  <li>Bath</li>
                  <li>Storage & Organization</li>
                  <li>Kitchen & Dining</li>
                  <li>Furniture</li>
                  <li>Home Decor</li>
                  <li>Lighting</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOOLS & HOME IMPROVEMENT
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Building Supplies</li>
                  <li>Electrical</li>
                  <li>Hardware</li>
                  <li>Light Bulbs</li>
                  <li>Power & Hand Tools</li>
                  <li>Painting Supplies & Wall Treatments</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  OFFICE PRODUCTS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Office Electronics</li>
                  <li>Office Furniture & Lighting</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  SMALL APPLIANCES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Blenders</li>
                  <li>Mixers</li>
                  <li>Ovens & Toasters</li>
                  <li>Microwave Ovens</li>
                  <li>Food Processors</li>
                  <li>Deep Fryers</li>
                  <li>Juicers</li>
                  <li>Coffee, Tea & Espresso Appliances</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HEATING, COOLING & AIR QUALITY
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Air Conditioners</li>
                  <li>Household Fans</li>
                  <li>Space Heaters</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  APPLIANCES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Dishwashers</li>
                  <li>Freezers</li>
                  <li>Refrigerators</li>
                  <li>Washers & Dryers</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  COOKING APPLIANCES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Cookers</li>
                  <li>Cook Top</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverSeven && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverSeven(true)}
              onMouseLeave={() => setContentOnHoverSeven(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TELEVISION & VIDEO
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>LED & LCD TVs</li>
                  <li>Receiver</li>
                  <li>Streaming Media Players</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  CAMERAS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Digital Cameras</li>
                  <li>Wearable & Action cameras</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HOME AUDIO
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Home Theater Systems</li>
                  <li>Speakers</li>
                  <li>Portable Speakers & Docks</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HEADPHONES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Over-Ear Headphones</li>
                  <li>Earbud Headphones</li>
                  <li>On-Ear Headphones</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverEight && (
            <div className="content-on-hover">
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  LAPTOPS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>2 in 1 Laptops</li>
                  <li>Gaming Laptops</li>
                  <li>Traditional Laptops</li>
                  <li>Macbooks</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  DATA STORAGE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>USB Flash Drives</li>
                  <li>External Hard Drives</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  COMPUTERS & ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Laptop Accessories</li>
                  <li>Desktops</li>
                  <li>Monitors</li>
                  <li>Printers</li>
                  <li>Scanners</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  COMPUTER COMPONENTS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Internal Hard Drives</li>
                  <li>Graphics Cards</li>
                  <li>Fans & Cooling</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  COMPUTER ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Audio & Video Accessories</li>
                  <li>Computer Cable Adapters</li>
                  <li>Keyboards, Mice & Accessories</li>
                  <li>Printer Ink & Toner</li>
                  <li>USP Gadgets</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  NETWORKING PRODUCTS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Routers</li>
                  <li>Wireless Access Points</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  TOP BRANDS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>HP</li>
                  <li>Lenovo</li>
                  <li>Dell</li>
                  <li>Apple</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverNine && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverNine(true)}
              onMouseLeave={() => setContentOnHoverNine(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  CARDIO TRAINING
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Treadmills</li>
                  <li>Exercise Bike</li>
                  <li>Elliptical Trainers</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  STRENGTH TRAINING EQUIPMENT
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Dumbbells</li>
                  <li>Bars</li>
                  <li>Core & Abdominal Trainers</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Exercise Bands</li>
                  <li>Jump Ropes</li>
                  <li>Exercise Mats</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  SPORTS & FITNESS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Accessories</li>
                  <li>Swimming</li>
                  <li>Team Sports</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  OUTDOOR & ADVENTURE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Cycling</li>
                  <li>Running</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverTen && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverTen(true)}
              onMouseLeave={() => setContentOnHoverTen(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  PLAYSTATION 5
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Consoles</li>
                  <li>Games</li>
                  <li>Controllers</li>
                  <li>Cards</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  PLAYSTATION 4
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>PS4</li>
                  <li>PS4 Games</li>
                  <li>PS4 Controllers</li>
                  <li>Cards</li>
                  <li>Accessories</li>
                  <li>PS4 Cases</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">XBOX</div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Games</li>
                  <li>Controllers</li>
                  <li>Accessories</li>
                  <li>Nintendo Switch</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  PC GAMING
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Gaming Laptops</li>
                  <li>Headsets</li>
                  <li>Keyboards</li>
                  <li>Mouse</li>
                  <li>Gaming Chairs</li>
                  <li>Monitors</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverEleven && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverEleven(true)}
              onMouseLeave={() => setContentOnHoverEleven(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  CAR CARE
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Cleaning Kits</li>
                  <li>Exterior Care</li>
                  <li>Interior Care</li>
                  <li>Finishing</li>
                  <li>Glass Care</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  CAR ELECTRONICS & ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Car Electronics</li>
                  <li>Car Electronics Accessories</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  LIGHTS & LIGHTING ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Light Covers</li>
                  <li>Bulbs</li>
                  <li>Accent & Off Road Lighting</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  OILS & FLUIDS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Brake Fluids</li>
                  <li>Flushes</li>
                  <li>Greases & Lubricants</li>
                  <li>Oils</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  EXTERIOR ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Car Covers</li>
                  <li>Mirrors</li>
                  <li>Bumper Stickers, Decals & Magnets</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  INTERIOR ACCESSORIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Air Fresheners</li>
                  <li>Consoles & Organizers</li>
                  <li>Covers</li>
                  <li>Cup Holders</li>
                  <li>Mirrors</li>
                  <li>Key Chains</li>
                  <li>Floor Mats & Cargo Liners</li>
                  <li>Sun Protection</li>
                  <li>Seat Covers & Accessories</li>
                </ul>
              </div>
            </div>
          )}
          {contentOnHoverTwelve && (
            <div
              className="content-on-hover"
              onMouseMove={() => setContentOnHoverTwelve(true)}
              onMouseLeave={() => setContentOnHoverTwelve(false)}
            >
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  GARDEN & OUTDOORS
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Outdoor Decor</li>
                  <li>Outdoor Furniture & Accessories</li>
                  <li>Grills & Outdoor Cooking</li>
                  <li>Gardening & Lawn Care</li>
                  <li>Watering Equipment</li>
                  <li>Farm & Ranch</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  BOOKS, MOVIES AND MUSIC
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Art & Humanities</li>
                  <li>Bestselling Books</li>
                  <li>Biography & Autobiography Books</li>
                  <li>Business & Finance Books</li>
                  <li>Education & Learning</li>
                  <li>Entertainment Books</li>
                  <li>Family & Lifestyle Books</li>
                  <li>Fiction Books</li>
                  <li>Journals & Planners</li>
                  <li>Magazines</li>
                  <li>Motivational & Self-Help Books</li>
                  <li>Religion Books</li>
                  <li>Science & Technology Books</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  HAND CRAFTED
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Women Accessories</li>
                  <li>Baby Products</li>
                  <li>Bags</li>
                  <li>Bedding</li>
                  <li>Home Décor</li>
                  <li>Jewelry & Accessories</li>
                </ul>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  INDUSTRIAL & SCIENTIFIC
                </div>
              </div>
              <div className="topic">
                <div className="content-on-hover__topic__topic-name">
                  PET SUPPLIES
                </div>
                <ul className="content-on-hover__topic__topic-item">
                  <li>Dogs</li>
                  <li>Cats</li>
                  <li>Birds</li>
                </ul>
              </div>
            </div>
          )}
        </ul>
        <div className="main-section__middle">
          <SliderComponent isResponsive={false}>
            <div>
              <img src={slider_1} alt="Slider 1" />
            </div>
            <div>
              <img src={slider_2} alt="Slider 2" />
            </div>

            <div>
              <img src={slider_4} alt="Slider 4" />
            </div>
            <div>
              <img src={slider_5} alt="Slider 5" />
            </div>
            <div>
              <img src={slider_6} alt="Slider 6" />
            </div>
            <div>
              <img src={slider_7} alt="Slider 7" />
            </div>
          </SliderComponent>
        </div>
        <div className="main-section__right">
          <img src={sale_1} alt="Sale 1" />
          <img src={sale_2} alt="Sale 2" />
        </div>
</div>
    </>
  )
}

export default MainSection
