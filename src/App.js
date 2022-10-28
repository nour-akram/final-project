// import logo from './logo.svg';
// import { useState,useEffect } from 'react';
import './App.css';
// import {firestore} from './firebase/config';
import Phones from './components/product/products/Phones';
function App() {
  // const [phone,setphone] = useState([]);
  // const fetch = async () =>{
  //   const req = await firestore.collection("phones").get();
  //  const tempPhone = req.docs.map((phone)=>({...phone.data(),id:phone.id}));
  //  console.log(tempPhone);
  // }
  // useEffect(() => {
  // fetch()
  // }, []);
  return (
    <>
      
   <Phones/>
    
     
    </>
  );
}

export default App;
