// Created By Justin Galicic



//TODO: Fix async calls so that bgImg is called AFTER date, time, weather, and solar info is received. Calling getBgImg should only be done a few times an hour.

import React, { Component } from 'react'
import DateContainer from './_components/DateContainer'
import axios from 'axios';
import CustomMessageContainer from './_components/CustomMessageContainer';
import TimeContainer from './_components/TimeContainer'
import TempContainer from './_components/TempContainer'
import SolarContainer from './_components/SolarContainer'
import LunarContainer from './_components/LunarContainer'
import ShortForecastContainer from './_components/ShortForecastContainer'
import bgImg from './_functions/getBgImg';
import customMsg from './_functions/createCustomMsg';
import getHoliday from './_functions/getHoliday';
import getSeason from './_functions/getSeason';
import getDayPeriod from './_functions/getDayPeriod';
import getRGB from './_functions/getRGB';
import calculateDayOrNight from './_functions/calculateDayOrNight';


const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
]

const day_of_weekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const config = {
  font_color_day: "white",
  font_color_night: "rgb(255, 249, 189)",
  lat: `47.6`,
  lng: `-122.3`,
  openweathermap_ID: `95eb4164df570d00c9c5789f2ddad3dd`,
  weatherAPI_key : `510c4f5105f741c88ac164527212210`,
  backend_username : ``,
  backend_password : ``
}

export default class WeatherDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      aqi : {
        aqi_msg: "",
        aqi_val: null,
        co_msg: "",
        co_ppm: null,
        nh3_msg: "",
        nh3_val: null,
        no_msg: "",
        no_val: null,
        no2_msg: "",
        no2_val: null,
        o3_msg: "",
        o3_val: null,
        pm10_msg: "",
        pm10_val: null,
        pm2_5_msg: "",
        pm2_5_val: null,
        so2_msg: "",
        so2_val: null
      },
      current_weather : {
        chance_hail: null,
        chance_precip: null,
        chance_rain: null,
        chance_snow: null,
        chance_thunder: null,
        cloud_cover: null,
        gust_mph: null,
        humidity: null,
        pressure_mb: null,
        pressure_in: null,
        temp_curr_f: null,
        temp_high_f: null,
        temp_low_f: null,
        uv_index: null,
        visibility_mi: null,
        wind_dir: null,
        wind_speed_mph: null,
      },
      custom_message : "",
      forecast_weather : {
        forecast_detailed: "",
        forecast_short: "",
        rain_accum_max_in: null,
        rain_accum_min_in: null,
        snow_accum_max_in: null,
        snow_accum_min_in: null,
      },
      historical_weather : {
      },
      is_day: true,
      img : {
        weather_bg_url : "",
        weather_icon : "",
      },
      lunar : {
        moon_illumination : "",
        moon_phase : "",
        moonrise : "",
        moonset : "",
      },
      pollen : {
        grass: null,
        overall: null,
        tree: null,
        ragweed: null,
      },
      solar : {
        astronomical_twilight_begin: "",
        astronomical_twilight_end: "",
        civil_twilight_begin: "",
        civil_twilight_end: "",
        day_length: "",
        day_period: "",
        nautical_twilight_begin: "",
        nautical_twilight_end: "",
        solar_noon: "",
        sunrise : "",
        sunrise_display: "",
        sunrise_am_pm: "",
        sunset : "",
        sunset_display: "",
        sunset_am_pm: "",
      },
      styles : {
        font_color: "",
        temp_min_color: "",
        temp_max_color: "",
        temp_range_gradient: ""
      },
      time_and_date : {
        cur_time: "",
        day_of_month: "",
        day_of_week: "",
        display_time: "",
        holiday: "",
        millis: null,
        month: "",
        season: "",
        seconds: "",
        timeIsLoaded: false,
        year: "",
      },
      toggle_seconds : false,
      toggle_nightmode : false,
      weather_alerts : {
        advisory : false,
        advisory_msg : "",
        warning : false,
        warning_msg : "",
        watch : false,
        watch_msg: ""
      },
    }

    this.get_time_and_date = this.get_time_and_date.bind(this)
    this.getSolarStats = this.getSolarStats.bind(this)
    this.getLunarStats = this.getLunarStats.bind(this)
    this.getAirQuality = this.getAirQuality.bind(this)   
    this.getWeather = this.getWeather.bind(this)
  }

  componentDidMount() {
    // Do once
    this.getSolarStats()
    this.getLunarStats()
    this.getAirQuality()
    this.getWeather()

    // Iterative calls
    this.interval = setInterval(() => {
      const d = new Date()
      this.get_time_and_date(d)

      // Get API Info every hour
      if (d.getMinutes() === 30 && d.getSeconds() === 0) {
        console.log("Getting weather at ", d.toTimeString().substring(0, 5))
        this.getWeather()

        // Get Solar, Lunar and API stats 2 times a day
        if (d.getHours() === 4 || d.getHours() === 16) {
          console.log("Getting all API Stats at ", d.toTimeString().substring(0, 5))
          this.getSolarStats()
          this.getLunarStats()
          this.getAirQuality()
        }

        // Reload page at 4am every morning
        if (d.getHours() === 4) {
          window.location.reload(false)
        }
      }

      this.setState({
        custom_message : customMsg(this.state.solar, this.state.forecast_weather, this.state.current_weather)
      })


    }, 1000);

    // For testing purposes....ensure that dependent elements are loaded into state
    setTimeout(() => {
      console.log(this.state)
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  get_time_and_date(d) {
    // Date & Time
    let seconds = d.getSeconds()

    d.getSeconds() < 10 ? seconds = "0" + seconds.toString() : seconds.toString()

    this.setState({
      time_and_date : { 
        cur_time : d.toTimeString().substring(0, 5),
        day_of_month: d.getDate(),
        day_of_week: day_of_weekNames[d.getDay()],
        display_time : d.toLocaleTimeString().match(/[0-9]+[:][0-9]+/g)[0],
        holiday: getHoliday(),
        millis: Date.now(),
        month: monthNames[d.getMonth()],
        season: getSeason(Date.now()),
        seconds: seconds,
        timeIsLoaded: true,
        year: d.getFullYear(),
      }
    })
  }

  getSolarStats() {
    axios.get(`https://api.sunrise-sunset.org/json?lat=${config.lat}&lng=${config.lng}`)
      .then(res => {
        const data = res.data;

        let d = new Date()
        let solarObj = {}

        for (let key in data.results) {
          const myDate = new Date(
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${
              data.results[key]
            } UTC`
          )
          solarObj[key] = myDate
            .toTimeString()
            .match(/[0-9]+[:][0-9]+/g)[0]
        }

        // Change sunrise_display from 24h format to 12h format
        let sunrise_display = solarObj.sunrise
        let sunrise_am_pm = "am"
        let sunset_display = solarObj.sunset
        let sunset_am_pm = "pm"

        if (parseInt(sunrise_display.slice(0,2)) < 10) {
          sunrise_display = solarObj.sunrise.slice(1)
        } else if (parseInt(sunrise_display.slice(0,2)) === 12) {
          sunrise_am_pm = "pm"
        } else if (parseInt(sunrise_display.slice(0,2) > 12)) {
          sunrise_display = parseInt(sunrise_display.slice(0,2)) - 12
          sunrise_display = sunrise_display.toString() + solarObj.sunrise.slice(2)
          sunrise_am_pm = "pm"
        } else {
          console.log("Error - check sunrise_display")
        }

        if (parseInt(sunset_display.slice(0,2)) < 10) {
          sunset_display = solarObj.sunset.slice(1)
        } else if (parseInt(sunset_display.slice(0,2)) === 12) {
          sunset_am_pm = "pm"
        } else if (sunset_display.slice(0,2) > 12) {
          sunset_display = parseInt(sunset_display.slice(0,2)) - 12
          sunset_display = sunset_display.toString() + solarObj.sunset.slice(2)
          sunset_am_pm = "pm"
        } else {
          console.log("Error - check sunset_display")
        }


        const is_day = calculateDayOrNight(d.toTimeString().substring(0, 5), solarObj.sunrise, solarObj.sunset)
        
        let font_color = config.font_color_day
        if (!is_day) font_color = config.font_color_night

        this.setState(prevState => ({
          solar : {
            astronomical_twilight_begin: solarObj.astronomical_twilight_begin,
            astronomical_twilight_end: solarObj.astronomical_twilight_end,
            civil_twilight_begin: solarObj.civil_twilight_begin,
            civil_twilight_end: solarObj.civil_twilight_end,
            day_length: solarObj.day_length,
            day_period: getDayPeriod(d.toTimeString().substring(0, 5), solarObj),
            nautical_twilight_begin: solarObj.nautical_twilight_begin,
            nautical_twilight_end: solarObj.nautical_twilight_end,
            solar_noon: solarObj.solar_noon,
            sunrise : sunrise_display,
            sunrise_display: sunrise_display,
            sunrise_am_pm: sunrise_am_pm,
            sunset : solarObj.sunset,
            sunset_display: sunset_display,
            sunset_am_pm: sunset_am_pm,
          },
          is_day : is_day,
          styles : {
            font_color: font_color,
            temp_min_color: prevState.styles.temp_min_color,
            temp_max_color: prevState.styles.temp_max_color,
            temp_range_gradient: prevState.styles.temp_range_gradient
          }
        }))
      })
      .catch(err => {
        if (err.response) {
          console.error(err.response)
        } else if (err.request) {
          console.error(err.request)
        } else if (err) {
          console.error(err)
        } else {
          console.error("Error loading Solar API")
        }
      })
  }

  getLunarStats() {

    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const baseURL = `https://api.weatherapi.com/v1/astronomy.json?`
    
    axios.get(`${baseURL}key=${config.weatherAPI_key}&q=${config.lat},${config.lng}&dt=${year}-${month}-${date}`)
    .then(res => {
      const data = res.data

      this.setState({
        lunar: {
          moon_illumination : data.astronomy.astro.moon_illumination,
          moon_phase : data.astronomy.astro.moon_phase,
          moonrise : data.astronomy.astro.moonrise,
          moonset : data.astronomy.astro.moonset,
        }
      })
      
    })
    .catch(err => {
      if (err.response) {
        console.error("Response error: ", err.response)
      } else if (err.request) {
        console.error(err.request)
      } else if (err) {
        console.error(err)
      } else {
        console.error("Error loading Lunar API")
      }
    })
  }

  getAirQuality() {
    const baseURL = `http://api.openweathermap.org/data/2.5/air_pollution?`
    axios.get(`${baseURL}lat=${config.lat}&lon=${config.lng}&appid=${config.openweathermap_ID}`)
    .then(res => {

      const data = res.data

      this.setState({
        aqi : {
          co_ppm: data.list[0].components.co,
          nh3_val: data.list[0].components.nh3,
          no_val: data.list[0].components.no,
          no2_val: data.list[0].components.no2,
          o3_val: data.list[0].components.o3,
          pm10_val: data.list[0].components.pm10,
          pm2_5_val: data.list[0].components.pm2_5,
          so2_val: data.list[0].components.so2
        }
      })
    })
    .catch(err => {
      if (err.response) {
        console.error(err.response)
      } else if (err.request) {
        console.error(err.request)
      } else {
        console.error("Error loading Air Quality API")
      }
    })
  }

  getWeather() {
    const baseURL = `https://api.weatherapi.com/v1/forecast.json?`
    axios.get(`${baseURL}key=${config.weatherAPI_key}&q=${config.lat},${config.lng}&days=7&aqi=yes&alerts=yes`)
    .then(res => {

      const data = res.data

      const chance_precip = (Math.max(data.forecast.forecastday[0].day.daily_chance_of_rain, data.forecast.forecastday[0].day.daily_chance_of_snow))
      const temp_min_color = `rgb(${getRGB(Math.round(data.forecast.forecastday[0].day.mintemp_f))})`
      const temp_max_color = `rgb(${getRGB(Math.round(data.forecast.forecastday[0].day.maxtemp_f))})`
      const temp_range_gradient = `linear-gradient(90deg, ${temp_min_color} 5%, ${temp_max_color} 95%)`

      // Ensure current high isn't higher than daily high
      const max_temp = Math.max(Math.round(data.current.temp_f), Math.round(data.forecast.forecastday[0].day.maxtemp_f))
      const min_temp = Math.min(Math.round(data.current.temp_f), Math.round(data.forecast.forecastday[0].day.mintemp_f))

     
      this.setState(prevState => ({
        current_weather : {
          chance_hail: null,
          chance_precip: chance_precip,
          chance_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
          chance_snow: data.forecast.forecastday[0].day.daily_chance_of_snow,
          chance_thunder: null,
          cloud_cover: data.current.cloud,
          gust_mph: Math.round(data.current.gust_mph),
          humidity: data.current.humidity,
          pressure_mb: data.current.pressure_mb,
          pressure_in: data.current.pressure_in,
          temp_current_f: Math.round(data.current.temp_f),
          temp_high_f: max_temp,
          temp_low_f: min_temp,
          uv_index: data.current.uv,
          visibility_mi: data.current.vis_miles,
          wind_degree: data.current.wind_degree,
          wind_dir: data.current.wind_dir,
          wind_mph: Math.round(data.current.wind_mph),
        },
        forecast_weather : {
          forecast_detailed: "",
          forecast_short: data.forecast.forecastday[0].day.condition.text,
          rain_accum_in: data.forecast.forecastday[0].day.totalprecip_in,
          snow_accum_in: null,
        },
        styles : {
          font_color: prevState.styles.font_color,
          temp_min_color: temp_min_color,
          temp_max_color: temp_max_color,
          temp_range_gradient: temp_range_gradient
        }
      }))
    })
    .catch(err => {
      if (err.response) {
        console.error(err.response)
      } else if (err.request) {
        console.error(err.request)
      } else {
        console.error("Error loading Weather API")
      }
    })
  }

  render() {
    console.log("Rendering")
    let bgImgURL = `url(https://thumbs.dreamstime.com/z/landscape-nature-mountan-alps-rainbow-76824355.jpg)`
    // let bgImgURL = `url(${bgImg(this.state.time_and_date.holiday, this.state.time_and_date.season, this.state.solar.day_period, this.state.forecast_weather.forecast_short)})`
    return (
      <div className="PageContainer" style={{backgroundImage: bgImgURL}}>
        <div className="UpperBar">
          <DateContainer date={this.state.time_and_date} css_style={this.state.styles}/>
          <CustomMessageContainer msg={this.state.custom_message} css_style={this.state.styles}/>
        </div>
        <div className="UpperMiddleBar">
        <TimeContainer time={this.state.time_and_date} seconds={this.state.toggle_seconds} css_style={this.state.styles}/>
        </div>
        <div className="LowerMiddleBar">
          <TempContainer weather={this.state.current_weather} css_style={this.state.styles}/>
          <div className="AstroContainer">
            <SolarContainer solar={this.state.solar} css_style={this.state.styles}/>
            <LunarContainer lunar={this.state.lunar} css_style={this.state.styles}/>
          </div>
          <ShortForecastContainer forecast={this.state.forecast_weather.forecast_short} is_day={this.state.is_day} css_style={this.state.styles}/>
        </div>
        <div className="LowerBar">
        </div>
      </div>
    )
  }
}
