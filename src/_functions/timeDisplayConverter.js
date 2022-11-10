export default function timeDisplayConverter(cur_time) {

  if (parseInt(cur_time.slice(0,3)) === 0) return "Midnight"
  if (parseInt(cur_time.slice(0,3)) === 12) return "Noon"
  
  let ampm = "am"
  let cur_hour = parseInt(cur_time.slice(0,3))

  if (cur_hour > 12) {
    ampm = "pm"
    cur_hour = cur_hour - 12
  }

  return `${cur_hour} ${ampm}`
}