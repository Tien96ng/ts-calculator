import { useState, useEffect } from "react";
import Button from "./components/Button";
import { Container, Row , Col} from "react-bootstrap";
import "./styles/App.css";

function App() {
  const [prev, setPrev] = useState(null);
  const [curr, setCurr] = useState(0);
  const [total, setTotal] = useState(null);
  const [symbol, setSymbol] = useState("");

  // Make special case foe AC, +/-, . and =
  // NEED TO FINISH EQUAL SIGN AND DECIMAL
  const buttonPress = (val: string) => {
    console.log(val);
    if (isNaN(val)) {
      if (val === "AC") {
        setNumsArr(["0", null, null]);
        setSymbol("");
      } else {
        setSymbol(val);
      }
    } else {
     //
      
    }
  };

  const displayScreen = () => {
    if(total === null) {
      return curr;
    } else {
      return total;
    }
  }

  return (
    <>
      <Container className="app-container">
        <Row>
          <Col className="display" xs={12}> {displayScreen()} </Col>
        </Row>
        <Button 
          buttonPress={buttonPress}
        />
      </Container>
    </>
  );
}

export default App;
