import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import JumiaIcon from "../../assets/jumia-icon.png";
import jumia2 from "../../assets/jumia2.png";
import "./Login1.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { auth ,provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {GoogleButton} from "react-google-button";
import { UserAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
export default function Login1({setIsAuth}) {

  const {googleSignIn} =UserAuth();

const handelGoogleSignIn = async ()=>{
  
  try{
    await googleSignIn();

  }
  catch(err){
    console.log(err);
  }
}
  
const navigate = useNavigate();




  return (
    <div className="login1">
      <img src={JumiaIcon} className="image-jumia1" />
      <p className="email-address-jumia1">What's your email address?</p>
      <p className="create-account">
        Type your email to log in or create a Jumia account.
      </p>
  

<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Type your email to login or create an account.';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
      //  onSubmit={(values, { setSubmitting }) => {
      //    setTimeout(() => {
      //      alert(JSON.stringify(values, null, 2));
      //      setSubmitting(false);
      //    }, 400);
      //  }}
     >
       {({ isSubmitting }) => (
         <Form onSubmit={()=> navigate("/login2")}>
          
           <div className="email-box ">
              <Field required type="email" name="email" id="email" className="field" />
              <label>EMAIL</label>
           </div>
           <ErrorMessage name="email" component="div" className="erroremail" />
          
          
           <button type="submit"  className="btn-continue" disabled={isSubmitting}
           >
             continue
           </button>
           
         </Form>
       )}
     </Formik>






      <div className="with-phone">Log in or register with phone number</div>
      {/* <button className="login-with-facebook" onClick={signInWithGoogle}>
        <AiFillFacebook className="ai" />
        <p>login with facebook</p>
      </button> */} 

      <div className="login-with-facebook" >
         <GoogleButton onClick={handelGoogleSignIn}/>
      </div>
      <p className="support">
        For further support, you may visit the Help Center or contact our <br />
        <span>customer service team.</span>
      </p>
      <img src={jumia2} alt="Jumia Logo" className="image-jumia2" />
    </div>
  );
}
