import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_KEY = "ec03164413cda89fbbec3344599ef704";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather/";

  let getWeatherInfo = async () => {
    try {
      let weatherInfo = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let response = await weatherInfo.json();

      let res = {
        city: city,
        feelsLike: response.main.feels_like,
        temp: response.main.temp,
        tempMax: response.main.temp_max,
        tempMin: response.main.temp_min,
        humidity: response.main.humidity,
        weather: response.weather[0].description,
      };

      console.log(res);
      return res;
    } catch (e) {
      throw e;
    }
  };

  let handleInput = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (e) {
      setError(true);
    }
  };
  return (
    <div className="Search-Panel">
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        {error && <p>No such place exist</p>}
      </form>
    </div>
  );
}
