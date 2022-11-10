import Checkbox from "./checkbox";
import Siedpars from "./siedpar1";
import ToChoose from "./siedpar2";
import ToChoose2 from "./ToChoose2";
import Button from 'react-bootstrap/Button';
import InputSlider from "./inputrang"
import "./list.css"
import BasicRating from "./star";

function Siedpar() {
    return (  
        <>
        {<ToChoose2 name="CATEGORY" />}
        {<a href="#"><ToChoose2 name="Computing" /></a>}
        {<a href="#"><ToChoose2 name="Computer Accessories" /></a>}
        {<a href="#"><ToChoose2 name="Computers & Accessories" /></a>}
        {<Siedpars />}
        <hr />
        {<ToChoose2 name="BRAND" />}
        {<ToChoose />}
        <hr />
        {<ToChoose2 name="CPU BRAND" />}
        {<Checkbox/>}
        <hr />
        {<ToChoose2 name="CPU SPEED" />}
        {<Checkbox />}
        <hr />
        {<ToChoose2 name="OPERATING SYSTEM" />}
        {<Checkbox />}
        {<Checkbox />}
        <hr />
        <div className="block h-15" >
        
        {<ToChoose2 name="PRICE (EGP)" />}
        <Button variant="warning" className="h-12">APPLY</Button>
        
        </div>
        <hr />
        <InputSlider />
        <br />
        <hr />
        
        {<BasicRating />}
        </>
    );
}

export default Siedpar;