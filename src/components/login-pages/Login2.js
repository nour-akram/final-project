import React ,{ useState }  from 'react'
import './Login2.css'
import JumiaIcon from "../../assets/jumia-icon.png";
import jumia2 from "../../assets/jumia2.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
 import {AiFillEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
export default function Login2() {

 
  const navigate = useNavigate();

  return (
    <div className="login2">

      <img src={JumiaIcon} className="image-jumia2" />
      <p className="email-address-jumia2">Welcome back!!</p>
      <p className="create-account2">
      Log back into your Jumia account.
      </p>

      

      
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.password) {
           errors.password = ' u seem forget ur password';
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
         <Form onSubmit={()=> navigate("/login3")}>
           
           <div className="email-box2 ">
              <Field required type="password" name="password" className="field2"/>
              <label>password</label>

               <AiFillEyeInvisible className='eye'/>
           </div>

           <ErrorMessage name="password" component="div" className="errorpass" />
           <button type="submit"className="btn-continue2"  disabled={isSubmitting} >
             login
           </button>
         </Form>
       )}
     </Formik>


     <div className="with-phone2">forgot your password</div>
      
     <p className="support2">
        For further support, you may visit the Help Center or contact our <br />
        <span>customer service team.</span>
      </p>
      <img src={jumia2} alt="Jumia Logo" className="image-jumia22" />
   
       

    </div>
  )
}
