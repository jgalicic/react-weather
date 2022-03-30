export default function config() {
  return {
    rapidDevelopmentMode: true,
    font_color_day: `rgb(255, 253, 240)`,
    font_color_night: `rgb(224, 210, 137)`,
    lat: `47.6`,
    lng: `-122.3`,
    openweathermap_ID: process.env.REACT_APP_OPEN_WEATHER_MAP_ID,
    weatherAPI_key : process.env.REACT_APP_OPEN_WEATHER_MAP_KEY,
    ambeeAPI_key: process.env.REACT_APP_AMBEE_API_KEY,
    backend_username : ``,
    backend_password : ``,
    day_of_weekNames : [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurs",
      "Friday",
      "Saturday",
    ],
    monthNames : [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ]
  }
}