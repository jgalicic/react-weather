export default function createCustomMsg(solar, fw, cw) {

  let msg = ""

  let rain_type = ""
  //const rain_unit = ""
  const temp_unit = "F"

  if (parseFloat(fw.rain_accum_in) < .1 && parseFloat(fw.rain_accum_in) >= .01 ) rain_type = `Light rain`
  if (parseFloat(fw.rain_accum_in) < .25 && parseFloat(fw.rain_accum_in) >= .1 ) {rain_type = `Rain`}
  if (parseFloat(fw.rain_accum_in) < .5 && parseFloat(fw.rain_accum_in) >= .25 ) rain_type = `Moderate rain`
  if (parseFloat(fw.rain_accum_in) < 1 && parseFloat(fw.rain_accum_in) >= .5 ) rain_type = `Moderate to heavy rain`
  if (parseFloat(fw.rain_accum_in) < 2 && parseFloat(fw.rain_accum_in) >= 1 ) rain_type = `Heavy rain`
  if (parseFloat(fw.rain_accum_in) < 4 && parseFloat(fw.rain_accum_in) >= 2 ) rain_type = `Very heavy rain`
  if (parseFloat(fw.rain_accum_in) >= 4 ) rain_type = `Torrential rain`

  // 
  if (solar.day_period === "am1") {
    msg += `Good morning! Sunrise will be at ${solar.sunrise} today.` 
    msg += `${rain_type} will fall at times, with a high near ${cw.temp_high_f}°${temp_unit}`
  }

  if (solar.day_period === "am2") msg += `Good morning! The sun will rise at ${solar.sunrise_display} today. `
  
  if (solar.day_period === "am3") msg += `Good morning! `

  if (solar.day_period === "am4") msg += `Good morning! `
  if (solar.day_period === "pm1") msg += `Good afternoon! `
  if (solar.day_period === "pm2") msg += `Good afternoon! The sun will set at ${solar.sunset_display} today. `
  if (solar.day_period === "pm3") msg += `Good afternoon! The sun will set at ${solar.sunset_display}${solar.sunset_am_pm} today. `

  if (solar.day_period === "pm4") msg += `Good evening! `
  if (solar.day_period === "pm5") {
    msg += `Good evening! `
    msg += `${rain_type} will continue to fall, with a low near ${cw.temp_low_f}°${temp_unit} tonight.`
  }
  
  if (solar.day_period === "pm6") {
    msg += `Good evening! `
    msg += `${rain_type} will continue to fall tonight, with a low near ${cw.temp_low_f}°${temp_unit}.`
  }

  return msg
}