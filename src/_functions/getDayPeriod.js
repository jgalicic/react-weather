export default function getDayPeriod(cur_time, solarObj) {
  if (cur_time < solarObj.astronomical_twilight_begin) return "pm6"
  if (cur_time < solarObj.civil_twilight_begin) return "am1"
  if (cur_time < solarObj.sunrise) return "am2"
  if (cur_time < "10:00") return "am3"
  if (cur_time < "12:00") return "am4"
  if (cur_time < solarObj.solar_noon) return "pm1"
  if (cur_time < "15:00") return "pm2"
  if (cur_time < solarObj.sunset) return "pm3"
  if (cur_time < solarObj.civil_twilight_end) return "pm4"
  if (cur_time < solarObj.astronomical_twilight_end) return "pm5"
  if (cur_time > solarObj.astronomical_twilight_end) return "pm6"

  return "Error - check get_day_period()"
}