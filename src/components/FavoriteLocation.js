import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { fetchCurrent, handleViewFavorite } from "../redux/actions.js";

export default function FavoriteLocation({ id, favoriteKey }) {
  const dispatch = useDispatch();
  const [temp, setTemp] = useState();
  const [text, setText] = useState();
  const [city, setCity] = useState();
  const unitLetter = useSelector((state) => state.unitLetter);
  const metric = useSelector((state) => state.metric);
  const darkMode = useSelector((state) => state.darkMode);

  // A fetch is made for each individual location, according to its key.

  useEffect(() => {
    fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${favoriteKey}?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT`
    )
      .then((res) => res.json())
      .then((data) => {
        if (metric) {
          setTemp(data[0].Temperature.Metric.Value);
        } else {
          setTemp(data[0].Temperature.Imperial.Value);
        }
        setText(data[0].WeatherText);
      })
      .catch((e) => {
        console.log(e);
      });

    fetch(
      `https://dataservice.accuweather.com/locations/v1/${favoriteKey}?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity(data.LocalizedName);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handleFavoriteClick() {
    dispatch(handleViewFavorite(favoriteKey));
    dispatch(fetchCurrent(favoriteKey));
  }

    return (
        <Card
        id={id}
        name={city}
        className={`text-center ${darkMode ? "box-dark" : "box"}`}
        >
        <Card.Header>{city}</Card.Header>
        <Card.Body>
            <Card.Title>
            {temp} &deg;{unitLetter}
            </Card.Title>
            <Card.Title>{text}</Card.Title>
        </Card.Body>
        <Link to="/" onClick={handleFavoriteClick}>
            Forecast
        </Link>
        </Card>
    );
}
