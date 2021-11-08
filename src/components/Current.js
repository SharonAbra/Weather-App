import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { fetchCurrent, fetchCity } from "../redux/actions.js";
import star from "../images/star.png";

export default function Current() {
  const dispatch = useDispatch();
  const locationKey = useSelector((state) => state.locationKey);
  const location = useSelector((state) => state.location);
  const currentWeather = useSelector((state) => state.currentWeather);
  const metric = useSelector((state) => state.metric);
  const unitLetter = useSelector((state) => state.unitLetter);
  const weatherText = useSelector((state) => state.weatherText);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoritesList")) || []
  );

  // The second endpoint is required in order to retrieve a city name
  useEffect(() => {
    dispatch(fetchCurrent(locationKey));
    dispatch(fetchCity(locationKey));
  }, [locationKey, metric]);

  function handleAdd() {
    let currentList = JSON.parse(localStorage.getItem("favoritesList")) || [];
    currentList.push(locationKey);
    localStorage.setItem("favoritesList", JSON.stringify(currentList));
    setFavorites(currentList);
  }

  function handleRemove() {
    let currentList = JSON.parse(localStorage.getItem("favoritesList")) || [];
    const position = favorites.indexOf(locationKey);
    currentList.splice(position, 1);
    localStorage.setItem("favoritesList", JSON.stringify(currentList));
    setFavorites(currentList);
  }

  return (
    <Container className="current-container">
      <Row className="d-flex align-items-center justify-content-center text-center">
        <Col sm={4}>
          <div className="city-container">
            <div>
              <h1>{location}</h1>
              <h1>
                {currentWeather} &deg;{unitLetter}
              </h1>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="description">
            <p>{weatherText}</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="button-container mx-auto">
            <div>
              {favorites.includes(locationKey) ? (
                <img src={star} alt="star" className="star" width="40px"></img>
              ) : (
                ""
              )}
            </div>
            <button
              className="btn btn-primary fav-button"
              onClick={
                favorites.includes(locationKey) ? handleRemove : handleAdd
              }
            >
              {favorites.includes(locationKey)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
