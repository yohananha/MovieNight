import { Col, Row, Card } from "react-bootstrap";
import { useState } from "react";

function Movie(props) {
  const [checked, setChecked] = useState(false);
  const [borderColor, setBorderColor] = useState("0px");

  const handleClick = () => {
    if (props.clickable) {
      setChecked(!checked);
      setBorderColor(checked ? "0px" : "1px solid green");
      props.handleClick();
    }
  };

  return (
    <Card
      className='movie-card'
      xs={6}
      bg='light'
      onClick={handleClick}
      style={{ border: borderColor }}>
      <Card.Img
        variant='top'
        style={{ maxWidth: "200px" }}
        src={props.Poster}
        alt={props.Title}
      />
      <Card.Body className='info'>
        <Row>
          <Col>
            <Card.Title className='title'>{props.Title}</Card.Title>
            <Card.Text className='year'>{props.Year}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default Movie;
