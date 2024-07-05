import "./InfoBox.css";
import Card from "@mui/material/Card";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
export default function InfoBox({ Info }) {
  let hot_img_url =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let cold_img_url =
    "https://images.unsplash.com/photo-1677164853410-ab77e4a0dd49?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rain_img_url =
    "https://images.unsplash.com/photo-1561634666-669fe33c3d0a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <h2>The Weather Detail will be displayed here</h2>
      <div className="cardContianer">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Weather Image"
            height="140"
            image={
              Info.humidity > 80
                ? rain_img_url
                : Info.temp < 15
                ? cold_img_url
                : hot_img_url
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city} - {Info.weather}{" "}
              {Info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : Info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature = {Info.temp}&deg;C</div>
              <div>Humidity {Info.humidity}%</div>
              <div>Maximum Temprature {Info.tempMax}&deg;C</div>
              <div>Minimum Temprature {Info.tempMin}&deg;C</div>
              <br />
              <div>
                Outside it is <i>{Info.weather}</i> and it Feels Like{" "}
                {Info.feelsLike}
                &deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
