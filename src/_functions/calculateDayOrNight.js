export default function calculateDayOrNight(cur_time, sunrise, sunset) {
  if (cur_time >= sunrise && cur_time <= sunset) {
    return true
  } else {
    return false
  }
}