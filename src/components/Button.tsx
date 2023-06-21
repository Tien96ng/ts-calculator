import { Row, Col } from "react-bootstrap";

export default function Button() {
  const renderButtons = buttonArr.map((x, y) => {
    return (
      <Col className={`${x[1]} button`} key={y} xs={x[0] === "0" ? 6 : 3}>
        {x[0]}
      </Col>
    );
  });

  return <Row>{renderButtons}</Row>;
}

const buttonArr: string[][] = [
  ["AC", "extra"],
  ["±", "extra"],
  ["%", "extra"],
  ["÷", "symbol"],
  ["7", "num"],
  ["8", "num"],
  ["3", "num"],
  ["x", "symbol"],
  ["4", "num"],
  ["5", "num"],
  ["6", "num"],
  ["-", "symbol"],
  ["1", "num"],
  ["2", "num"],
  ["9", "num"],
  ["+", "symbol"],
  ["0", "zero"],
  [".", "num"],
  ["=", "symbol"],
];
