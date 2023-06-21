import { Row, Col } from "react-bootstrap";


export default function Button() {
    const renderButtons = buttonArr.map((x, y) => {
        return <Col className={x[1]} key={y} xs={x[0] === '0' ? 6 : 3}>{x[0]}</Col>
    })

    return(
        <>
            <Row>
                {renderButtons}
            </Row>
        </>
    )
}

const buttonArr = [
    ["0", "num"], [".", "num"], ["=", "symbol"],
    ["1", "num"], ["2", "num"], ["9", "symbol"], ["+", "symbol"],
    ["4", "num"], ["5", "num"], ["6", "symbol"], ["-", "symbol"],
    ["7", "num"], ["8", "num"], ["3", "symbol"], ["x", "symbol"],
    ["AC", "extra"], ["±", "extra"], ["%", "extra"], ["÷", "symbol"]
]