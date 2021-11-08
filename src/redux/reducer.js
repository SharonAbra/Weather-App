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

const initialState = {
  locationKey: process.env.REACT_APP_DEFAULT_LOCATION_KEY,
  location: "",
  currentWeather: "",
  unit: "",
  forecast: [],
  weatherText: "",
  favoritesArray: [],
  metric: true,
  unitLetter: "C",
  darkMode: false,
  darkButton: "Dark Mode",
  invalidCity: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CURRENT:
      if (state.metric === true) {
        return {
          ...state,
          currentWeather: action.payload[0].Temperature.Metric.Value,
          unit: action.payload[0].Temperature.Metric.Unit,
          weatherText: action.payload[0].WeatherText,
        };
      } else {
        return {
          ...state,
          currentWeather: action.payload[0].Temperature.Imperial.Value,
          unit: action.payload[0].Temperature.Imperial.Unit,
          weatherText: action.payload[0].WeatherText,
        };
      }

    case CITY:
      return { ...state, location: action.payload.LocalizedName };

    case VALID:
      return { ...state, invalidCity: false };

    case DARK_MODE:
      if (state.darkMode === true) {
        return { ...state, darkMode: false, darkButton: "Dark Mode" };
      } else {
        return { ...state, darkMode: true, darkButton: "Light Mode" };
      }

    case UNIT:
      if (state.metric === true) {
        return { ...state, metric: false };
      } else {
        return { ...state, metric: true };
      }

    case FORECAST:
      return { ...state, forecast: action.payload };

    case UNIT_LETTER:
      return { ...state, unitLetter: action.payload };

    case KEY:
      if (action.payload === undefined) {
        return { ...state, invalidCity: true };
      }
      return {
        ...state,
        locationKey: action.payload.Key,
        location: action.payload.LocalizedName,
      };

    case VIEW_FAVORITE:
      return { ...state, locationKey: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
