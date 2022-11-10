// Created By Justin Galicic in 2021

import React, { Component } from 'react'
import config from './config'
import DateContainer from './_components/DateContainer'
import CustomMessageContainer from './_components/CustomMessageContainer';
import TimeContainer from './_components/TimeContainer'
import TempContainer from './_components/TempContainer'
import SolarContainer from './_components/SolarContainer'
import LunarContainer from './_components/LunarContainer'
import CurrentConditionsContainer from './_components/CurrentConditionsContainer'
import bgImg from './_functions/getBgImg';
// import customMsg from './_functions/createCustomMsg';
import getHoliday from './_functions/getHoliday';
import getSeason from './_functions/getSeason';
import getDayPeriod from './_functions/getDayPeriod';
import getRGB from './_functions/getRGB';
import getRGBforAQI from './_functions/getRGBforAQI'
import calculateDayOrNight from './_functions/calculateDayOrNight';
import getFakeDevData from './testing/getFakeDevData';
import timeDisplayConverter from './_functions/timeDisplayConverter';
import AqiContainer from './_components/AqiContainer';
import HourlyForecastContainer from './_components/HourlyForecastContainer';


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
        current_conditions: null,
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
      // custom_message : "",
      forecast_weather : {
        hourlyPeriodArr: [],
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
        nautical_twilight_begin: "",
        nautical_twilight_end: "",
        solar_noon: "",
        sunrise : "",
        sunrise_display: "", // Not in Solar API
        sunrise_am_pm: "", // Not in Solar API
        sunset : "", 
        sunset_display: "", // Not in Solar API
        sunset_am_pm: "", // Not in Solar API
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
        day_period: "",
        display_time: "",
        holiday: "",
        hour: "",
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

    this.set_time_and_date = this.set_time_and_date.bind(this)
    this.setSolarStats = this.setSolarStats.bind(this)
    this.setLunarStats = this.setLunarStats.bind(this)
    this.setAQI = this.setAQI.bind(this)   
    this.setCurrentWeather = this.setCurrentWeather.bind(this)
    this.setForecastWeather = this.setForecastWeather.bind(this)
  }
  
  async componentDidMount() {

    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    function getSolar() {
      if (config().rapidDevelopmentMode) {
        return getFakeDevData("fake_solar_api_call")
      } else {
        return fetch(`https://react-weather-backend-relay.herokuapp.com/api/solar/${config().lat}/${config().lng}`).then(res => res.json()).then((res) => res.data)
     }
    }

    function getLunar() {
      if (config().rapidDevelopmentMode) {
        return getFakeDevData("fake_lunar_api_call")
      } else {
        return fetch(`https://react-weather-backend-relay.herokuapp.com/api/lunar/${config().lat}/${config().lng}/${year}/${month}/${date}`).then(res => res.json()).then((res) => res.data)
      }
    }

    function getAQI() {

      if (config().rapidDevelopmentMode) {
        return getFakeDevData("fake_aqi_api_call")
      } else {
        return fetch(`https://react-weather-backend-relay.herokuapp.com/api/aqi/${config().lat}/${config().lng}/${year}/${month}/${date}/${config().distance_in_miles}`).then(res => res.json()).then(res => res.data[0])
      }
    }

    function getWeather() {
        if (config().rapidDevelopmentMode) {
          return getFakeDevData("fake_weather_api_call")
        } else {
          return fetch(`https://react-weather-backend-relay.herokuapp.com/api/weather/${config().lat}/${config().lng}`).then(res => res.json()).then((res) => res.data)
        }
    }

    function getPollen() {

      if (config().rapidDevelopmentMode) {
        return getFakeDevData("fake_pollen_call")
      } else {
        return fetch(`https://react-weather-backend-relay.herokuapp.com/api/pollen/${config().lat}/${config().lng}`).then(res => res.json()).then((res) => res.data)
      }
    }

    const initialStateElements = [getSolar(), getLunar(), getAQI(), getWeather(), getPollen()]

    Promise.all(initialStateElements).then(response => {

      let res = []
      
      response.forEach((item, i) => {
        if (item) {
          if (item.results) {
            res[i] = item.results
          } else {
            res[i] = item
          } 
        }
      })

      console.log("!", res)

      let updatedBgImg = ""
      let is_day = ""
      let font_color = ""
      let lunar = ""
      let temp_min_color = ""
      let temp_max_color = ""
      let temp_range_gradient = ""
      let temp_aqi_color = ""
      let aqi = {}
      let pollen = {}


      if (res[0]) {
        is_day = calculateDayOrNight(this.set_time_and_date(d).cur_time, this.setSolarStats(res[0]).sunrise, this.setSolarStats(res[0]).sunset)
        font_color = calculateDayOrNight(this.set_time_and_date(d).cur_time, this.setSolarStats(res[0]).sunrise, this.setSolarStats(res[0]).sunset) ? config().font_color_day : config().font_color_night
      }

      if (res[2]) {
        aqi = {
          number: res[2].AQI,
          category: res[2].Category.Name,
          discussion: res[2].Discussion,
        }

        temp_aqi_color = `rgb(${getRGBforAQI(res[2].AQI)})`
      }

      if (res[3]) {
        temp_min_color =`rgb(${getRGB(Math.round(res[3].forecast.forecastday[0].day.mintemp_f))})`
        temp_max_color = `rgb(${getRGB(Math.round(res[3].forecast.forecastday[0].day.maxtemp_f))})`
        temp_range_gradient = `linear-gradient(90deg, ${`rgb(${getRGB(Math.round(res[3].forecast.forecastday[0].day.mintemp_f))})`} 5%, ${`rgb(${getRGB(Math.round(res[3].forecast.forecastday[0].day.maxtemp_f))})`} 95%)`
        updatedBgImg = bgImg(getHoliday(d), getSeason(Date.now()), getDayPeriod(this.set_time_and_date(d).cur_time, this.setSolarStats(res[0])), res[3].current.condition.text)
      }

      if (res[4]) {
        pollen = {
          grass_level: res[4].data[0].Count.grass_pollen,
          grass_risk: res[4].data[0].Risk.grass_pollen,
          tree_level: res[4].data[0].Count.tree_pollen,
          tree_risk: res[4].data[0].Risk.tree_pollen,
          weed_level: res[4].data[0].Count.weed_pollen,
          weed_risk: res[4].data[0].Risk.weed_pollen
        }
      }

      this.setState({

        aqi: aqi,
        current_weather : this.setCurrentWeather(res[3]),
        // custom_message : "",
        forecast_weather : this.setForecastWeather(res[3]),
        is_day,
        img : {
          weather_bg_url : updatedBgImg,
          weather_icon : "",
        },
        lunar: this.setLunarStats(res[1]),
        pollen :  pollen,
        solar: this.setSolarStats(res[0]),
        styles : {
          font_color,
          temp_aqi_color,
          temp_min_color,
          temp_max_color,
          temp_range_gradient,
        },
        time_and_date: this.set_time_and_date(d),
        toggle_seconds : false,
        // toggle_nightmode : false,
        // weather_alerts : {}
      })

      console.log("!", this.state)
    })

    // Iterative calls
    this.interval = setInterval(() => {
      const d = new Date()
      this.set_time_and_date(d)


      if (true) {
        // Update weather and AQI info every 15 minutes during the day
        if ((
          d.getMinutes() === 0 || 
          d.getMinutes() === 15 ||
          d.getMinutes() === 30 || 
          d.getMinutes() === 45) && 
          d.getSeconds() === 0) {

          //console.log("Getting weather at:", d.toTimeString().substring(0, 5))

          const elementsToUpdate = [getWeather()]
  
          Promise.all(elementsToUpdate).then(response => {

            let res = []
      
            response.forEach((item, i) => {
              if (item.results) {
                res[i] = item.results
              } else {
                res[i] = item
              } 
            })

            let holiday = this.state.time_and_date.holiday
            let season = this.state.time_and_date.season
            let day_period = getDayPeriod(d.toTimeString().substring(0, 5), this.state.solar)
            let curr_conditions = this.state.current_weather.current_conditions
            let cur_time = this.set_time_and_date(d).cur_time
            let min_temp_f = res[0].forecast.forecastday[0].day.mintemp_f
            let max_temp_f = res[0].forecast.forecastday[0].day.maxtemp_f

            this.setState({
              current_weather : this.setCurrentWeather(res[0]),
              // custom_message : "",
              forecast_weather : this.setForecastWeather(res[0]),
              is_day: calculateDayOrNight(cur_time, this.state.solar.sunrise, this.state.solar.sunset),
              img : {
                weather_bg_url : bgImg(holiday, season, day_period, curr_conditions),
                weather_icon : "",
              },
              // pollen : {},
              styles : {
                font_color: calculateDayOrNight(cur_time, this.state.solar.sunrise, this.state.solar.sunset) ? config().font_color_day : config().font_color_night,
                temp_min_color: `rgb(${getRGB(Math.round(min_temp_f))})`,
                temp_max_color: `rgb(${getRGB(Math.round(max_temp_f))})`,
                temp_range_gradient: `linear-gradient(90deg, ${`rgb(${getRGB(Math.round(min_temp_f))})`} 5%, ${`rgb(${getRGB(Math.round(max_temp_f))})`} 95%)`
              },
              time_and_date: this.set_time_and_date(d),
            })
          })
        }
      }
      // Update weather info every hour during the night
      if (!this.state.is_day) {
        if (d.getMinutes() === 0 && d.getSeconds() === 0) {
          // console.log("Getting weather at:", d.toTimeString().substring(0, 5))
  
          const weatherElements = [getAQI(), getWeather()]
  
          Promise.all(weatherElements).then(response => {
            let res = []
      
            response.forEach((item, i) => {
              if (item.results) {
                res[i] = item.results
              } else {
                res[i] = item
              } 
            })

            this.setState({
              aqi: this.setAQI(res[0]),
              current_weather : this.setCurrentWeather(res[1]),
            })
          })
        }
      }

      // Get Solar, Lunar and API stats 2x/day
      if ((d.getHours() === 4 || d.getHours() === 16) && (d.getMinutes() === 0 && d.getSeconds() === 30)) {
        // console.log("Getting Solar & Lunar Stats at ", d.toTimeString().substring(0, 5))

        const astroElements = [getSolar, getLunar]
  
        Promise.all(astroElements).then(response => {

          let res = []
      
          response.forEach((item, i) => {
            if (item.results) {
              res[i] = item.results
            } else {
              res[i] = item
            } 
          })

          this.setState({
            solar: this.setSolarStats(res[0]),
            lunar : this.setLunarStats(res[1].astronomy.astro),
          })
        })
      }

      this.setState({
        time_and_date : this.set_time_and_date(d)
      })
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  set_time_and_date(d) {

    let seconds = d.getSeconds()
    let day_period = ""

    d.getSeconds() < 10 ? seconds = "0" + seconds.toString() : seconds.toString()

    if (getDayPeriod(d.toTimeString().substring(0, 5), this.state.solar) === "") {
      day_period = ""
    } else {
      day_period = getDayPeriod(d.toTimeString().substring(0, 5), this.state.solar) 
    }
 
    return {
      cur_time : d.toTimeString().substring(0, 5),
      day_of_month : d.getDate(),
      day_of_week : config().day_of_weekNames[d.getDay()],
      day_period : day_period,
      display_time : d.toLocaleTimeString().match(/[0-9]+[:][0-9]+/g)[0],
      holiday : getHoliday(d),
      hour: d.getHours(),
      millis : Date.now(),
      month : config().monthNames[d.getMonth()],
      season : getSeason(Date.now()),
      seconds : seconds,
      timeIsLoaded : true,
      year : d.getFullYear(),
    }
  }

  setSolarStats(solar_data) {
    const d = new Date()
    const solarObj = {}
    
    if (solar_data) {
    
      // Populate solarObj with info from API
      solarObj.day_length = solar_data.day_length

      // Convert UTC times to local times
      for (let key in solar_data) {
        if (key.toLowerCase() !== "day_length") {
          const myDate = new Date(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${solar_data[key]} UTC`)

          solarObj[key] = myDate
            .toTimeString()
            .match(/[0-9]+[:][0-9]+/g)[0]
        }
      }

      // Change sunrise_display from 24h format to 12h format
      let sunrise_display = solarObj.sunrise
      let sunrise_am_pm = "am"
      let sunset_display = solarObj.sunset
      let sunset_am_pm = "pm"


      // Remove leading 0s from sunrise_display and set am/pm correctly
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
      // Remove leading 0s from sunset_display and set am/pm correctly
      if (parseInt(sunset_display.slice(0,2)) < 10) {
        sunset_display = solarObj.sunset.slice(1)
        sunset_am_pm = "am"
      } else if (parseInt(sunset_display.slice(0,2)) === 12) {
      } else if (sunset_display.slice(0,2) > 12) {
        sunset_display = parseInt(sunset_display.slice(0,2)) - 12
        sunset_display = sunset_display.toString() + solarObj.sunset.slice(2)
      } else {
        console.log("Error - check sunset_display")
      }

      solarObj.sunrise_display = sunrise_display
      solarObj.sunrise_am_pm = sunrise_am_pm
      solarObj.sunset_display = sunset_display
      solarObj.sunset_am_pm = sunset_am_pm

      if (this.state.day_period !== getDayPeriod(d.toTimeString().substring(0, 5), solarObj)) {
        this.setState({
          day_period : getDayPeriod(d.toTimeString().substring(0, 5), solarObj)
        })
      }
    } else {
      console.log("Error: unable to set solar_data")
    }
    
    return solarObj
  }

  setLunarStats(ld) {
    // TODO: divide lunar data times into 24 hour time and 12 hour display times

    let lunarObj = {}

    if (ld) {
      lunarObj.moon_illumination = ld.moon_illumination
      lunarObj.moon_phase = ld.moon_phase
      lunarObj.moonrise = ld.moonrise
      lunarObj.moonset = ld.moonset
    } else {
      console.log("Error: unable to set lunar_data")
    }

    return lunarObj
  }

  setAQI(aqi_data) {

    let aqiObj = {}

    if (aqi_data) {
      aqiObj.co_ppm = aqi_data.co
      aqiObj.nh3_val = aqi_data.nh3
      aqiObj.no_val = aqi_data.no
      aqiObj.no2_val = aqi_data.no2
      aqiObj.o3_val = aqi_data.o3
      aqiObj.pm10_val = aqi_data.pm10
      aqiObj.pm2_5_val = aqi_data.pm2_5
      aqiObj.so2_val = aqi_data.so2
    } else {
      console.log("Error: unable to set aqi_data")
    }

    return aqiObj
  }

  setCurrentWeather(cw_data) {
    // console.log("CW", cw_data)

    let cwObj = {}

    if (cw_data) {
      cwObj.cloud_cover = cw_data.current.cloud,
      cwObj.current_conditions = cw_data.current.condition.text 
      cwObj.gust_mph = Math.round(cw_data.current.gust_mph)
      cwObj.humidity = cw_data.current.humidity
      cwObj.pressure_mb = cw_data.current.pressure_mb
      cwObj.pressure_in = cw_data.current.pressure_in
      cwObj.temp_current_f = Math.round(cw_data.current.temp_f)
      cwObj.temp_high_f = Math.max(Math.round(cw_data.current.temp_f), Math.round(cw_data.forecast.forecastday[0].day.maxtemp_f))
      cwObj.temp_low_f = Math.min(Math.round(cw_data.current.temp_f), Math.round(cw_data.forecast.forecastday[0].day.mintemp_f))
      cwObj.uv_index = cw_data.current.uv
      cwObj.visibility_mi = cw_data.current.vis_miles
      cwObj.wind_degree = cw_data.current.wind_degree
      cwObj.wind_dir = cw_data.current.wind_dir
      cwObj.wind_speed_mph = Math.round(cw_data.current.wind_mph)
    } else {
      console.log("Error: unable to set cw_data")
    }

    if (cw_data) {
      cwObj.chance_precip = Math.max(cw_data.forecast.forecastday[0].day.daily_chance_of_rain, cw_data.forecast.forecastday[0].day.daily_chance_of_snow)
      cwObj.chance_rain = cw_data.forecast.forecastday[0].day.daily_chance_of_rain
      cwObj.chance_snow = cw_data.forecast.forecastday[0].day.daily_chance_of_snow
    }

    return cwObj
  }

  setForecastWeather(fw_data) {
     console.log("FW", fw_data)

    let fwObj = {}
    let d = new Date()

    let hourlyPeriodArr = []

    //console.log("BBB", fw_data.forecast.forecastday[0].hour[d.getHours()])

    let stillCheckingTodaysForecast = true
    let hourTracker = d.getHours()
    let maxHour = 23
    let hourIncrementor = 1
    let periodIncrementor = 1

    while (stillCheckingTodaysForecast) {
      if (hourTracker >= maxHour) {
        stillCheckingTodaysForecast = false
        break
      } 
      
      //console.log("hourTracker: ", hourTracker)

      hourlyPeriodArr[periodIncrementor-1] = {
        time: timeDisplayConverter(fw_data.forecast.forecastday[0].hour[hourTracker + 1].time.slice(10,16)),
        temp: fw_data.forecast.forecastday[0].hour[hourTracker + 1].temp_f,
        chance_of_rain: fw_data.forecast.forecastday[0].hour[hourTracker + 1].chance_of_rain,
        chance_of_snow: fw_data.forecast.forecastday[0].hour[hourTracker + 1].chance_of_snow,
        wind_dir: fw_data.forecast.forecastday[0].hour[hourTracker + 1].wind_dir,
        wind_mph: fw_data.forecast.forecastday[0].hour[hourTracker + 1].wind_mph,
        contition: fw_data.forecast.forecastday[0].hour[hourTracker + 1].condition.text,
      }

      periodIncrementor++
      hourTracker += hourIncrementor
      hourIncrementor += hourIncrementor
    }


    while (!stillCheckingTodaysForecast && periodIncrementor < 5) {

      hourlyPeriodArr[periodIncrementor-1] = {
        time: fw_data.forecast.forecastday[0].hour[hourTracker - 23].time,
        temp: fw_data.forecast.forecastday[0].hour[hourTracker - 23].temp_f,
        chance_of_rain: fw_data.forecast.forecastday[0].hour[hourTracker - 23].chance_of_rain,
        chance_of_snow: fw_data.forecast.forecastday[0].hour[hourTracker - 23].chance_of_snow,
        wind_dir: fw_data.forecast.forecastday[0].hour[hourTracker - 23].wind_dir,
        wind_mph: fw_data.forecast.forecastday[0].hour[hourTracker - 23].wind_mph,
        contition: fw_data.forecast.forecastday[0].hour[hourTracker - 23].condition.text,
      }

      periodIncrementor++
      hourTracker += hourIncrementor
      hourIncrementor += hourIncrementor
      //console.log("!!!!", hourTracker)
    }

    console.log(hourlyPeriodArr)


    if (fw_data) {
      fwObj.hourlyPeriodArr = hourlyPeriodArr
      fwObj.forecast_short = fw_data.forecast.forecastday[0].day.condition.text
      fwObj.rain_accum_max_in = fw_data.forecast.forecastday[0].day.totalprecip_in
      fwObj.forecast_detailed = ""
      fwObj.rain_accum_min_in = ""
      fwObj.snow_accum_max_in = ""
      fwObj.snow_accum_min_in = ""
    } else {
      console.log("Error: unable to set fw_data")
    }

    return fwObj
  }

  // setPollen(pollenData) {

  //   if (pollenData) {
  //     return pollenData.data
  //   } else {
  //     console.log("Error: unable to set pollen data")
  //     return {}
  //   }
  // }

  render() {
    return (
      <div className="PageContainer" style={{backgroundImage: `url(${this.state.img.weather_bg_url})`}}>
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
            {/* <AqiContainer aqi={this.state.aqi} css_style={this.state.styles}/> */}
            {/* <LunarContainer lunar={this.state.lunar} css_style={this.state.styles}/> */}
          </div>
          <CurrentConditionsContainer current_conditions={this.state.current_weather.current_conditions} is_day={this.state.is_day} css_style={this.state.styles}/>
        </div>
        <div className="LowerBar">
          <AqiContainer aqi={this.state.aqi} pollen={this.state.pollen} css_style={this.state.styles}></AqiContainer>
          <HourlyForecastContainer 
            f={this.state.forecast_weather.hourlyPeriodArr}
            css_style={this.state.styles}>
          </HourlyForecastContainer>

          <div className="DailyForecastContainer">
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
        </div>
      </div>
    )
  }
}
