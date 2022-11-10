
import { Link, useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import "../App.css"
import Product from "./Producte";
function DataApi(){
     
  const apiusrl = "https://fakestoreapi.com/products";
  const [product,setproduct] = useState({});
  const params=useParams();
  console.log(params);
  useEffect (()=>{
      fetch(`${apiusrl}/${params.ProdactId}`)
      .then((res)=>res.json())
      .then((product)=>setproduct(product));
  },[]);
          
          
     return(
      <>

     <div>
        
     <Product  product={product}/>
     
     </div>
  
         
         
         
     
       
        

      </>
    )
    
}
export default DataApi;