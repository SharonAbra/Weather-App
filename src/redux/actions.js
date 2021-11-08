import {
  CURRENT,
  CITY,
  FORECAST,
  KEY,
  VIEW_FAVORITE,
  UNIT,
  UNIT_LETTER,
  DARK_MODE,
  VALID,
} from "./Constants";

export const fetchKey = (text) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT&q=${text}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: KEY, payload: data[0] });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchCurrent = (locationKey) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CURRENT, payload: data });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchCity = (locationKey) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CITY, payload: data });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchForecast = (locationKey, metric) => (dispatch) => {
  fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=0hVnfbrMivhYoDi6kGEMt3wIPpfMEDBT&metric=${metric}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FORECAST, payload: data.DailyForecasts });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const changeUnit = () => {
  return {
    type: UNIT,
  };
};

export const setUnitLetter = (letter) => {
  return {
    type: UNIT_LETTER,
    payload: letter,
  };
};

export const handleDarkMode = () => {
  return {
    type: DARK_MODE,
  };
};

export const handleViewFavorite = (favoriteKey) => {
  return {
    type: VIEW_FAVORITE,
    payload: favoriteKey,
  };
};

export const handleValid = () => {
  return {
    type: VALID,
  };
};
