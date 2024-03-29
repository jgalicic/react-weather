import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudMoon, faCloudMoonRain, faCloudShowersHeavy, 
        faCloudRain, faCloudSun, faCloudSunRain, faIcicles, faMoon, faRainbow, faSmog, 
        faSnowflake, faSun, faWind  } from '@fortawesome/free-solid-svg-icons'


export default function getWeatherIcon(condition, is_day) {
  if (condition === null || condition === undefined) {
    console.log("Error: Condition is null or undefined")
    return <FontAwesomeIcon icon={faRainbow} />
  } else {

  const cc = condition.toLowerCase()

  // The following conditions are derived from the document at https://www.weatherapi.com/docs/weather_conditions.json
  // Day

  if (is_day) {
    if (cc === "sunny") return <FontAwesomeIcon icon={faSun} />
    if (cc === "mostly sunny") return <FontAwesomeIcon icon={faSun} />
    if (cc === "partly cloudy") return <FontAwesomeIcon icon={faCloudSun} />
    if (cc === "cloudy") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "overcast") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "mist") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "patchy rain possible") return <FontAwesomeIcon icon={faCloudSunRain} />
    if (cc === "patchy snow possible")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy sleet possible")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy freezing drizzle possible")return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "thundery outbreaks possible") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "blowing snow")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "blizzard")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "fog") return <FontAwesomeIcon icon={faSmog} />
    if (cc === "areas of fog") return <FontAwesomeIcon icon={faSun} />
    if (cc === "freezing fog") return <FontAwesomeIcon icon={faSmog} />
    if (cc === "patchy light drizzle") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "light drizzle") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "freezing drizzle") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "heavy freezing drizzle") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "patchy light rain") return <FontAwesomeIcon icon={faCloudSunRain} />
    if (cc === "light rain") return <FontAwesomeIcon icon={faCloudSunRain} />
    if (cc === "moderate rain at times") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "moderate rain") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "heavy rain at times") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "heavy rain") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "light freezing rain") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "moderate or heavy freezing rain") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "light sleet") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy sleet") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy light snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy moderate snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy heavy snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "heavy snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "light rain shower") return <FontAwesomeIcon icon={faCloudSunRain} />
    if (cc === "moderate or heavy rain shower") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "torrential rain shower") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "light sleet showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy sleet showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light snow showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy snow showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light showers of ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "moderate or heavy showers of ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "patchy light rain with thunder") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "moderate or heavy rain with thunder") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "patchy light snow with thunder") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy snow with thunder") return <FontAwesomeIcon icon={faSnowflake} />
  }


  // Night
  if (!is_day){
    if (cc === "clear") return <FontAwesomeIcon icon={faMoon} />
    if (cc === "partly clear") return <FontAwesomeIcon icon={faMoon} />
    if (cc === "mostly clear") return <FontAwesomeIcon icon={faMoon} />
    if (cc === "partly cloudy") return <FontAwesomeIcon icon={faCloudMoon} />
    if (cc === "cloudy") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "overcast") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "mist") return <FontAwesomeIcon icon={faCloud} />
    if (cc === "patchy rain possible") return <FontAwesomeIcon icon={faCloudMoonRain} />
    if (cc === "patchy snow possible")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy sleet possible")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy freezing drizzle possible")return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "thundery outbreaks possible") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "blowing snow")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "blizzard")return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "fog") return <FontAwesomeIcon icon={faSmog} />
    if (cc === "areas of fog") return <FontAwesomeIcon icon={faMoon} />
    if (cc === "freezing fog") return <FontAwesomeIcon icon={faSmog} />
    if (cc === "patchy light drizzle") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "light drizzle") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "freezing drizzle") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "heavy freezing drizzle") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "patchy light rain") return <FontAwesomeIcon icon={faCloudMoonRain} />
    if (cc === "light rain") return <FontAwesomeIcon icon={faCloudMoonRain} />
    if (cc === "moderate rain at times") return <FontAwesomeIcon icon={faCloudRain} />
    if (cc === "moderate rain") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "heavy rain at times") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "heavy rain") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "light freezing rain") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "moderate or heavy freezing rain") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "light sleet") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy sleet") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy light snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy moderate snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "patchy heavy snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "heavy snow") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "light rain shower") return <FontAwesomeIcon icon={faCloudMoonRain} />
    if (cc === "moderate or heavy rain shower") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "torrential rain shower") return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    if (cc === "light sleet showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy sleet showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light snow showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy snow showers") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "light showers of ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "moderate or heavy showers of ice pellets") return <FontAwesomeIcon icon={faIcicles} />
    if (cc === "patchy light rain with thunder") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "moderate or heavy rain with thunder") return <FontAwesomeIcon icon={faBolt} />
    if (cc === "patchy light snow with thunder") return <FontAwesomeIcon icon={faSnowflake} />
    if (cc === "moderate or heavy snow with thunder") return <FontAwesomeIcon icon={faSnowflake} />
  }

  // Fallback
  if (cc.includes("snow")) return <FontAwesomeIcon icon={faSnowflake} />
  if (cc.includes("thunder")) return <FontAwesomeIcon icon={faBolt} />
  if (cc.includes("smoke")) return <FontAwesomeIcon icon={faSmog} />
  if (cc.includes("smog")) return <FontAwesomeIcon icon={faSmog} />
  if (cc.includes("fog")) return <FontAwesomeIcon icon={faSmog} />
  if (cc.includes("wind")) return <FontAwesomeIcon icon={faWind} />
  if (cc.includes("rain")) return <FontAwesomeIcon icon={faCloudRain} />
  if (cc.includes("sun")) return <FontAwesomeIcon icon={faSun} />
  if (cc.includes("cloud")) return <FontAwesomeIcon icon={faCloud} />
  return <FontAwesomeIcon icon={faRainbow} />
  }
}



  
