import React from 'react'
import"./Footer.css"
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF} from 'react-icons/fa';
import {SlSocialYoutube} from 'react-icons/sl';
import {BsInstagram} from 'react-icons/bs';
import {TfiTwitter} from 'react-icons/tfi';
import {TfiApple} from 'react-icons/tfi';
import {FaCcMastercard} from 'react-icons/fa';
import {RiVisaLine} from 'react-icons/ri';
import {FaCcPaypal} from 'react-icons/fa';
import {RiPaypalLine} from 'react-icons/ri';
export const MainFooter = () => {
  return (
    <div>


<footer style={{backgroundColor: "#323232"}}>
      <div className="container-fluid">
        <div className="row" style={{height: "160px"}}>
          <div
            className="col-4 text-white pt-4 ps-5"
            style={{backgroundColor: '#282828'}}
          >
            <img src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png" width="255px" height="125px" style={{marginTop:'-40px'}}/>
          </div>
          <div className="col-4 text-white pt-4" style={{backgroundColor: "#282828"}}>
            <div>
              <h6 className="fontt">NEW TO JUMIA?</h6>
              <p className="font1">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
            </div>

            <form className="d-flex justify-content-between" id="email-form">
              <div
                className="btn border-2 ps-4 position-relative d-flex"
                id="nour"
                style={{backgroundColor: 'white' , width: '380', height: "45px"}}
                onclick="changecolor('orange')"
              >
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={{opacity: '0.5', fontSize: '23px'}}
                ></i>

                <input
                  className="text-opacity-50"
                  type="email"
                  id="nn"
                  placeholder=" Enter E-mail Address "
                />
              </div>

              <button className="ps-2 pt-1 ms-2 nn bg-dark text-uppercase">
                male
              </button>
              <button className="ps-2 pt-1 ms-2 nn bg-dark text-uppercase">
                female
              </button>
            </form>

            <div id="req" style={{color: "brown"}}></div>
          </div>

          <div
            className="col-4 text-white pt-4 ps-5"
            style={{backgroundColor: "#282828"}}
          >
            <div className="d-flex">
              <div className="ps-5">
                <img style={{backgroundColor:''}} src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw" width="40px" height="40px" />

                
              </div>
              <div className="ps-3">
                <h6 className="fontt">DOWNLOAD JUMIA FREE APP</h6>
                <p className="font1">Get access to exclusive offers!</p>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <a
                href="https://apps.apple.com/app/id925015459"
                style={{textDecoration: 'none', color: "white"}}
                target="_blank"
              >
                <div className="d-flex justify-content-between na">










                    <TfiApple size={'50px' }  style={{width:'26px' , color:'white'}}/>
                  <i
                    className="fa fa-apple"
                    aria-hidden="true"
                    style={{
                      fontSize: '25px',
                      paddingLeft: '10px',
                      paddingTop: '5px'}}
                    
                  >
                  </i>
                  <div className="mm">
                    <p style={{fontSize: '8px', opacity: '0.6'}}>download on the</p>
                    <h6 className="fontt nnn">APP STORE</h6>
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.jumia.android&referrer=adjust_reftag%3DcdTxOjM"
                target="_blank"
                style={{textDecoration: 'none', color: "white"}}
              >
                <div className="d-flex justify-content-between no">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    />
                  </svg>
                  <div className="mm">
                    <p style={{fontSize: '8px', opacity: "0.6"}}>get it on</p>
                    <h6 className="fontt nnn">GOOGLE PLAY</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>




       <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          <div
            className="col-3 text-white pt-4 div1"
            style={{backgroundColor: "#323232"}}
          >
            <p style={{fontWeight: '800', fontSize: '13px', marginRight: '25px'}}>
              LET US HELP YOU
            </p>
            <ul>
              <a href="help center.html"><li>Help Center</li></a>
              <a href="contact us.html"><li>Contact us</li></a>
              <a href="howToShop.html"><li>How to shop on jumia ?</li></a>
              <a href="howtopay.html"><li>How to pay on jumia ?</li></a>
              <a href="delivery.html"><li>Delivery timelines</li></a>
              <a href="report.html"><li>Report a product</li></a>
              <a href="#"><li>Dispute Resolution policy</li></a>
            </ul>

            <div
              className="col-4 text-white pad"
              style={{
                marginRight: '25px',
                backgroundColor: '#323232',
                fontWeight: '900',
                fontSize: '12px'}}
              
            >
              JOIN US ON
            </div>

            <div className="nancy">
              <FaFacebookF/>
              <i
               className="fa fa-twitter"
               aria-hidden="true"
                style={{fontSize: '23px', paddingLeft: "25px"}}

                
              ></i>
              <TfiTwitter/>
              <i
                className="fa fa-twitter"
                aria-hidden="true"
                style={{fontSize: '23px', paddingLeft: "25px"}}
              ></i>
              <BsInstagram/>
              <i
                className="fa fa-instagram"
                aria-hidden="true"
                style={{fontSize: '23px', paddingLeft: "25px"}}
              ></i>
              <SlSocialYoutube/>
              <i
                className="fa fa-youtube-play"
                aria-hidden="true"
                style={{fontSize: '23px', paddingLeft: "25px"}}
              ></i>
            </div>
          </div>

          <div
            className="col-3 text-white pt-4 div1 ps-5"
            style={{backgroundColor: "#323232"}}
          >
            <p style={{fontWeight: '800', fontSize: '13px', marginRight: "25px"}}>
              ABOUT JUMIA EGYPT
            </p>
            <ul>
              <a href="service.html"><li>Jumia logistics services</li></a>
              <a href="jumiaCareer.html"><li>Jumia careers</li></a>
              <a href="#"><li>Terms and Conditions</li></a>
              <a href="#"><li>Privacy and policy</li></a>
              <a href="#"><li>Jumia Express</li></a>
              <a href="#"><li>Jumia Mall</li></a>
              <a href="#"><li>flash sales</li></a>
              <a href="#"><li>join the jumia DA Academy</li></a>
            </ul>

            <div
              className="col-8 text-white pad2"
              style={{
                marginRight: '25px',
                backgroundColor: '#323232',
                fontWeight: '900',
                fontSize: '12px',
                marginLeft: '40px'
              }}
            >
              PAYMENT METHODS
            </div>

            <div className="nancy2">
              <RiPaypalLine/>
              <i
                className="fa fa-paypal"
                aria-hidden="true"
                style={{fontSize: '20px', paddingLeft: "25px"}}
              ></i>
           <FaCcMastercard/>
              <i
                className="fa fa-cc-visa"
                aria-hidden="true"
                style={{fontSize: '20px', paddingLeft: "25px"}}
              ></i>
              <RiVisaLine/>
              <i
                className="fa fa-cc-paypal"
                aria-hidden="true"
                style={{fontSize: '20px', paddingLeft: "25px"}}
              ></i>
              <FaCcPaypal  style={{width:'70px'}}/>
            </div>
          </div>

          <div
            className="col-3 text-white pt-4 div1 pe-5"
            style={{backgroundColor: "#323232"}}
          >
            <p style={{fontWeight: '800', fontSize: '13px', marginRight: "25px"}}>
              MAKE MONEY WITH JUMIA
            </p>
            <ul>
              <a href="#"><li>Sell on Jumia</li></a>
              <a href="#"><li>Become a Jumia Partner</li></a>
              <a href="#"><li>Become a sales consultant (j-force)</li></a>
            </ul>
          </div>
          <div
            className="col-3 text-white pt-4 pe-5 div1"
            style={{backgroundColor: "#323232"}}
          >
            <p style={{fontWeight: "800", fontSize: '13px', marginRight: "25px"}}>
              JUMIA INTERNATIONAL
            </p>
            <div className="div2">
              <ul>
                <a href="#"><li>Algeria</li></a>
                <a href="#"><li>Ivory coast</li></a>
                <a href="#"><li>Ghana</li></a>
                <a href="#"><li>Kenya</li></a>
                <a href="#"><li>Morocco</li></a>
              </ul>

              <ul>
                <a href="#"><li>Nigeria</li></a>
                <a href="#"><li>Senegal</li></a>
                <a href="#"><li>Tunisia</li></a>
                <a href="#"><li>Uganda</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row down" style={{marginLeft: "60px"}}>
          <div className="col-2 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>Active</li></a>
              <a href="#"><li>Adidas</li></a>
              <a href="#"><li>American Eagle</li></a>
              <a href="#"><li>Andora</li></a>
            </ul>
          </div>

          <div className="col-1 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>Apple</li></a>
              <a href="#"><li>Braun</li></a>
              <a href="#"><li>Casio</li></a>
              <a href="#"><li>Cotonil</li></a>
            </ul>
          </div>

          <div className="col-1 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>Defacto</li></a>
              <a href="#"><li>Dejavo</li></a>
              <a href="#"><li>Dice</li></a>
              <a href="3"><li>Fresh</li></a>
            </ul>
          </div>

          <div className="col-1 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>Garnier</li></a>
              <a href="#"><li>Kady</li></a>
              <a href="#"><li>HP</li></a>
              <a href="#"><li>Izor</li></a>
            </ul>
          </div>

          <div className="col-2 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>l'Oreal paris</li></a>
              <a href="#"><li>LC Waikiki</li></a>
              <a href="#"><li>Lenovo</li></a>
              <a href="#"><li>Maybelline New York</li></a>
            </ul>
          </div>
          <div
            className="col-1 text-white text-white pt-5"
            style={{backgroundColor: "#323232"}}
          >
            <ul>
              <a href="#"><li>Mesery</li></a>
              <a href="#"><li>Mothercare</li></a>
              <a href="#"><li>NIVEA</li></a>
              <a href="#"><li>Nokia</li></a>
            </ul>
          </div>
          <div className="col-1 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>OPPO</li></a>
              <a href="#"><li>Ravin</li></a>
              <a href="#"><li>SAMSUNG</li></a>
              <a href="#"><li>SHEIN</li></a>
            </ul>
          </div>

          <div className="col-2 text-white pt-5" style={{backgroundColor: "#323232"}}>
            <ul>
              <a href="#"><li>Sokany</li></a>
              <a href="#"><li>Tornado</li></a>
              <a href="#"><li>XIAOMI</li></a>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="row overflow-hidden"
          style={{
            borderTop: '1px solid gray',
            height: '70px',
            paddingTop: '20px',
            alignItems: 'center',
            marginTop: "20px"}}
          
        >
          <div className="col es" style={{paddingLeft: "420px"}}>
            <div style={{display: 'inline', margin: '10px'}}>
              <svg
                style={{width: '100px', height: '60px', margin: 'auto'}}
               width="150"
                height="21"
                viewBox="0 0 150 21"
              >
                <g fill="none" fill-rule="evenodd">
                  <g fill="#FFF">
                    <path
                      d="M12.49 4.619c0-.475-.04-.865-.121-1.17-.081-.304-.22-.545-.419-.721-.198-.176-.455-.298-.77-.366-.317-.068-.704-.102-1.162-.102H2.156v5.795h7.899c.458 0 .842-.03 1.152-.092.31-.06.56-.173.753-.335.192-.163.328-.39.409-.681.08-.292.12-.668.12-1.129v-1.2zM2.156 9.986v4.087H0V.227h10.036c.88 0 1.614.078 2.202.233.589.156 1.063.41 1.422.761.36.352.614.805.762 1.36.149.554.224 1.237.224 2.049v1.177c0 .811-.072 1.484-.214 2.018-.143.535-.39.964-.744 1.289-.353.325-.827.551-1.422.68-.594.128-1.338.192-2.23.192h-7.88zM19.047 8.74h7.223l-3.611-6.246-3.612 6.246zm8.31 1.906H17.96l-1.971 3.427h-2.524l7.59-13.018c.173-.311.378-.565.618-.76.24-.197.58-.295 1.023-.295.43 0 .767.098 1.013.294.245.196.454.45.626.76l7.555 13.02h-2.543l-1.99-3.428zM35.637 14.073L35.637 7.394 28.11.227 31.073.227 36.76 5.506 42.539.227 45.354.227 37.772 7.414 37.772 14.073z"
                      transform="translate(104.646 4.54)"
                    />
                  </g>
                  <g transform="translate(75.031)">
                    <path
                      fill="#FFF"
                      d="M18.276 2.154c-.032-.223-.061-.444-.096-.673l-.034-.21h-.223c-3.007 0-6.435-.498-8.533-1.238L9.305 0l-.093.033C7.115.773 3.686 1.271.682 1.271H.46l-.035.21C.155 3.19.054 4.785.096 6.271c.226 7.787 4.427 12.532 9.13 13.908l.08.023.071-.023c.027-.008.053-.018.082-.026 3.193-.963 6.143-3.482 7.763-7.453-.147-.099-.292-.202-.43-.313l-.539-.483c-.07-.069-.137-.14-.202-.212-.729 2.055-1.833 3.799-3.274 5.077-.962.854-2.079 1.504-3.318 1.936L9.305 1.458l.08.026.074.023c1.948.605 4.573 1.01 7.223 1.114l.224.009.024.215.006.077c.08-.06.16-.117.242-.173.196-.13.395-.254.604-.364.16-.082.324-.16.494-.231"
                    />
                    <path
                      fill="#FFF"
                      d="M24.297 6.63l-1.83 1.756.431 2.479-2.26-1.17-2.262 1.17.432-2.48-1.83-1.754 2.53-.362 1.13-2.254 1.131 2.254 2.528.362zm.583-1.33c-.083-.134-.172-.263-.267-.389-.143-.188-.3-.365-.468-.53-.056-.055-.113-.11-.172-.162-.117-.105-.24-.205-.367-.298-.128-.094-.26-.182-.396-.264-.068-.04-.137-.08-.208-.117-.702-.376-1.508-.59-2.364-.59-.855 0-1.662.214-2.364.59-.071.037-.14.077-.208.117-.137.082-.27.17-.396.264-.128.093-.25.192-.367.298-.06.052-.117.106-.173.161-.168.166-.324.344-.467.531-.429.564-.736 1.222-.885 1.936-.066.318-.1.647-.1.983 0 .506.077.993.222 1.451.073.23.162.451.266.665.07.142.147.28.23.414.04.068.084.134.128.199.09.13.186.254.286.375.202.241.428.463.672.662.123.1.25.194.382.28.132.089.269.17.41.245.702.376 1.508.59 2.364.59.856 0 1.661-.213 2.363-.59.071-.037.14-.076.208-.117.205-.122.4-.259.584-.408.122-.1.24-.205.352-.315.112-.11.219-.226.32-.347.102-.12.197-.246.286-.375.045-.066.088-.131.129-.199.456-.738.719-1.603.719-2.53 0-.926-.262-1.792-.719-2.53z"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <i
              className="fa fa-paypal"
              aria-hidden="true"
              style={{fontSize: '19px', paddingLeft: "25px"}}
            ></i>
             <svg
              style={{width: '50px', paddingLeft: '25px', paddingTop: "10px"}}
          
            >
              <path
              />
            </svg>  
          </div>

          <div className="col-3" style={{display: 'inline', paddingLeft: "120px"}}>
            <div
              style={{
                display: 'inline',
                color: 'white',
                borderRight: '1px solid #c7c7cd',
                margin: '10px',
                opacity: '0.2'
              }}
            >
              العربي
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{width: '25px', height: '25px', borderRadius: "50%"}}
              />
            </div>
            <div style={{display: 'inline', color: "white"}}>
              English

              <img
                src="united-kingdom.svg"
                style={{width: '25px', height: '25px', borderRadius: "50%"}}
              />
            </div>
          </div>
        </div>
      </div>














       </footer>


    </div>
  )
}

export default MainFooter