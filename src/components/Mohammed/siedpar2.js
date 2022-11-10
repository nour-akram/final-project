 import './list.css'
import Form from 'react-bootstrap/Form';
 function ToChoose() {
    return ( 
       <>

<Form>
 <Form.Group className="mb-3 list" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Check type="checkbox" label="Apple" />
        <Form.Check type="checkbox" label="Canon" />
        <Form.Check type="checkbox" label="Boya" />
        <Form.Check type="checkbox" label="Arctic Hunte" />
        <Form.Check type="checkbox" label="Cardoo"/>
        <Form.Check type="checkbox" label="DELL"/>
        <Form.Check type="checkbox" label="Force" />
        <Form.Check type="checkbox" label=" Generic" />
        <Form.Check type="checkbox" label="GIGAHERTZ" />
        <Form.Check type="checkbox" label="   Kingston" />
        <Form.Check type="checkbox" label="  RAHALA" />
        <Form.Check type="checkbox" label="Razer" />
        <Form.Check type="checkbox" label="ZERO" />
      </Form.Group>
      </Form>
 </>
      );
 }

 export default ToChoose ;

