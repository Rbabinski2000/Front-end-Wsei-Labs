import { Button, Form, FormControl } from "react-bootstrap";
import { useState, useContext} from "react";
import AppContext from "../data/AppContext";


const eyesField = "eyes";
const birthField = "date";
const nameField = "name";
const rateField ="rate";
function AddForm() {

  const [errors, setErrors] = useState([]);        // stan kominikatów błędów
  const [isSendig, setSending] = useState(false);  // stan sygnalizujący wysyłanie

  //const context = useContext(AppContext);
  //const dispatch = context.dispatch;

  const {dispatch}=useContext(AppContext);

  const onSubmitFunction = async (e) => {
    e.preventDefault();                            //blokada wysyłania żądania  
    console.log("Submiting...")
    const data = new FormData(e.target);
    
    //przykład walidacji programowej
    //kolejne warunki powinny dodawać do stanu errors własne komunikaty
    //stan blokujący przycisk submit na czas wysyłania danych
    setSending(true);                                           
    //await new Promise((resolve) => setTimeout(resolve, 1000)); //symulacja wysyłania
    //odblokowanie przycisku submit
    dispatch({
        type: "add",
        newItem:{
            name:data.get("name"),
            birth:data.get("date"),
            eyes:data.get("eyes"),
            rating:parseInt(data.get("rate"),10)
        }
            });
    setSending(false);

    e.target.reset();
    //kod wysłania akcji do funkcji redukującej
    
  };

  return (
    <>
      <h1>Register</h1>
      
      <div className="text-danger">
        {errors.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      
      <Form className="text-primary w-50" onSubmit={onSubmitFunction}>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <FormControl
            id={nameField}
            type={nameField}
            name={nameField}
            className="text-lg"
            placeholder="Enter name"
          />
        
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={birthField}>Birth Date</Form.Label>
          <FormControl
            required
            id={birthField}
            type='Date'
            name={birthField}
            placeholder="Enter your birth date"
          />
          
        
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="eyes">Eyes</Form.Label>
          <FormControl
            required
            id={eyesField}
            type={eyesField}
            name={eyesField}
            placeholder="Enter color of your eyes"
          />
          
        </Form.Group>
        <Form.Group className="mb-3 w-10">
          <Form.Label htmlFor="rate">Rating</Form.Label>
          <FormControl
            required
            id={rateField}
            type="number"
            name={rateField}
            min={0}
            max={10}
            placeholder="Enter your preffered raiting"
          />
          
        </Form.Group>
        
        <div className="d-grid">
          <Button disabled={isSendig}  type="submit" variant="outline-primary" size="lg">
            Register
          </Button>
        </div>
        
      </Form>
    </>
  );
}

export default AddForm;