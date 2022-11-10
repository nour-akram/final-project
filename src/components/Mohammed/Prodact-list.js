import { useEffect, useState } from "react";
import Product from "./Producte";
function ProadactLiast() {
    const apiurl = "https://fakestoreapi.com/products";
    const [products,setproducs]=useState([]);
    const [categories,setcategories]=useState([]);
    const getproducts=()=>{
        fetch(apiurl)
        .then((res)=>res.json())
        .then((data)=>setproducs(data))
    };
    const getcategories=()=>{
        fetch(`${apiurl}/categories`)
        .then((res)=>res.json())
        .then((data)=>setcategories(data))
    };
    const getProductInCategory=(catName)=>{
        fetch(`${apiurl}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setproducs(data))
    }
    useEffect (()=>{
        getproducts()
        getcategories()
    },[]);
    return ( 
        <> <div className="container" >
            
                <div className="row">
                {products.map((product)=>{
                    return(
                        
                         <div className="col-sm-12 col-md-6 col-lg-3 justify-content-sm-12" key={product.id}>
                    <Product  product={product}/>
                     </div>
                       
                    )
                })}           
                </div>
            </div>
        </>
     );
}

export default ProadactLiast;