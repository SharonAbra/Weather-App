import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

export default function Day({ day, minTemp, maxTemp, unitLetter }) {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Card className={`text-center ${darkMode ? "box-dark" : "box"}`}>
      <Card.Header>{day}</Card.Header>
      <Card.Body>
        <Card.Title>
          {minTemp} &deg;{unitLetter}
        </Card.Title>
        <Card.Title>
          {maxTemp} &deg;{unitLetter}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
