import './list.css'
import Form from 'react-bootstrap/Form';
function Checkbox() { 
   
  return(
    <Form>
 <Form.Group className="mb-3 " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Intel Core i5" />
      </Form.Group>
      
      </Form>)
      
}
export default Checkbox;