import { useState } from "react";
import Button from "./components/Button";
import { Container, Row , Col} from "react-bootstrap";
import "./styles/App.css";

function App() {
  // Using an array to display, current number, prev number, and total in that order.
  const [numsArr, setNumsArr] = useState([0, null, null]);
  const [symbol, setSymbol] = useState("");

  // Make special case foe AC, +/-, . and =
  // NEED TO FINISH EQUAL SIGN AND DECIMAL
  const buttonPress = (val: any) => {
    console.log(val);
    if (isNaN(val)) {
      if (val === "AC") {
        setNumsArr([0, null, null]);
        setSymbol("");
      }
    } else {
      setNumsArr([val, null, null])
    }
  };

  return (
    <>
      <Container className="app-container">
        <Row>
          <Col className="display" xs={12}> {numsArr[0]} </Col>
        </Row>
        <Button 
          buttonPress={buttonPress}
        />
      </Container>
    </>
  );
}

export default App;
