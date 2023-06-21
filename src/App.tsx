import { useState } from "react";
import Button from "./components/Button";
import { Container, Row , Col} from "react-bootstrap";
import "./styles/App.css";

function App() {
  const [curr, setCurr] = useState(0);
  const [symbol, setSymbol] = useState("");
  const [total, setTotal] = useState(0);


  return (
    <>
      <Container className="app-container">
        <Row>
          <Col className="display" xs={12}> {curr} </Col>
        </Row>
        <Button />
      </Container>
    </>
  );
}

export default App;
