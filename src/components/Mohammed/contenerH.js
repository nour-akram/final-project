import Siedpar from "./siedbar";
import Alealanat from "./alealanat";
import ProadactLiast from "./Prodact-list";
import ProdactItms from "./prodactitmes";
import "./hashim.css"
import Producte from "./Producte";
function ContinerHashim() {
    return ( 
        <>
        <div  className=" Continer m-3 sed ">
       <Alealanat />
      <Producte />
                <div className="row d-flex justify-content-evenly ">
                    <div className="col-2 mt-2 ">
                    <Siedpar/>
                </div>
                <div className="col-8 p-3  d-flex ">
                
                <ProadactLiast />
              
           </div>
            </div>
        </div>
    
        </>
     );
}

export default ContinerHashim;