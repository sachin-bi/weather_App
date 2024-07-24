import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox() {
  const INIT_IMG =
    "https://images.unsplash.com/photo-1641970304213-fadcccae478e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let info = {
    city: "Siliguri",
    feelsLike: 38.7,
    humidity: 74,
    temp: 31.7,
    tempMax: 31.7,
    tempMin: 31.7,
    weather: "overcast clouds",
  };

  return (
    <div className="InfoBox">
      <h2>WeatherInfo - {info.weather.toUpperCase()}</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_IMG}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Tempereture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp. = {info.tempMin}</p>
              <p>Mix Temp. = {info.tempMax}</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
