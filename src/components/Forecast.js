import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { fetchForecast } from "../redux/actions.js";
import Day from "./Day";

export default function Forecast() {
  const dispatch = useDispatch();
  const locationKey = useSelector((state) => state.locationKey);
  const forecast = useSelector((state) => state.forecast);
  const metric = useSelector((state) => state.metric);
  const unitLetter = useSelector((state) => state.unitLetter);
  let day = "";

  useEffect(() => {
    dispatch(fetchForecast(locationKey, metric));
  }, [locationKey, metric]);

  const getDay = (date) => {
    switch (new Date(date).getDay()) {
      case 0:
        day = "Sunday";
        return day;
      case 1:
        day = "Monday";
        return day;
      case 2:
        day = "Tuesday";
        return day;
      case 3:
        day = "Wednesday";
        return day;
      case 4:
        day = "Thursday";
        return day;
      case 5:
        day = "Friday";
        return day;
      case 6:
        day = "Saturday";
        return day;
      default:
        day = "";
        return day;
    }
  };

  return (
    <div className="forecast-container">
      <Container>
        <Row className="d-flex justify-content-center text-center">
          {forecast.map((item, i) => {
            return (
              <Col key={i} md={2}>
                <Day
                  day={getDay(item.Date)}
                  minTemp={item.Temperature.Minimum.Value}
                  maxTemp={item.Temperature.Maximum.Value}
                  unitLetter={unitLetter}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
