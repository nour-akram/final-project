import React ,{useState}from 'react'
import './Login3.css'
import JumiaIcon from "../../assets/jumia-icon.png";
import jumia2 from "../../assets/jumia2.png";
import {  Form,Formik, ErrorMessage,Field} from 'formik';
import { useNavigate } from 'react-router-dom';
import  {ThemeContext} from '../../App'
import { useContext } from 'react';
// import Input from 'react-validation/build/input';
export default function Login3() {

  const {setUsername}= useContext(ThemeContext);
 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('username', e.target.value);
    setUsername(e.target.value);
    console.log('value is:', e.target.value);
  };
 

  return (
    <div className="login3">

      <img src={JumiaIcon} className="image-jumia3" />
      <p className="email-address-jumia3">Personal details</p>
      <p className="create-account3">
      We just need you to fill in some details.
      </p>

      

     
       
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.password) {
           errors.password = ' Please type your first name as in your national ID';
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
         <Form onSubmit={()=> navigate("/")}>
           
           <div className="email-box3 ">
              <Field required type="text" name="password" className="field3" id="message"
        
        onChange={handleChange}
        value={name}/>
              <label>first name</label>

              
           </div>

           <ErrorMessage name="password" component="div" className="errorpass" />

           
           <button type="submit"className="btn-continue3"  disabled={isSubmitting} >
             login
           </button>
         </Form>
       )}
     </Formik>

       


     
      
     <p className="support3">
        For further support, you may visit the Help Center or contact our <br />
        <span>customer service team.</span>
      </p>
      <img src={jumia2} alt="Jumia Logo" className="image-jumia3" />
   
    </div>
  )
}

