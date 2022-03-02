export default function getHoliday(d) {
  const day_of_weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const month = d.getMonth() + 1
  const day_of_week = day_of_weekNames[d.getDay()].toLowerCase()
  const day_of_month = d.getDate()

  if (month === 1 && day_of_month === 1) return "nyd"// New Year's Day
  if (month === 1 && day_of_week === "monday" && day_of_month >= 15 && day_of_month <= 21) return "mlk"
  if (month === 2 && day_of_month === 14) return "vtd" // Valentine's Day
  if (month === 3 && day_of_month === 17) return "spd" // Saint Patrick's Day
  if (month === 4 && day_of_month === 1) return "afd" // April Fools' Day
  if (month === 5 && day_of_week === "monday" && day_of_month >= 25 && day_of_month <= 31) return "mmd" // Memorial Day
  if (month === 6 && day_of_month === 19) return "jth" // Juneteenth
  if (month === 6 && day_of_week === "friday" && day_of_month >= 22 && day_of_month <= 28) return "pri" // Pride
  if (month === 6 && day_of_week === "saturday" && day_of_month >= 23 && day_of_month <= 29) return "pri" // Pride
  if (month === 6 && day_of_week === "sunday" && day_of_month >= 24 && day_of_month <= 30) return "pri" // Pride
  if (month === 7 && day_of_month === 4) return "ipd" // Independence Day
  if (month === 9 && day_of_week === "monday" && day_of_month >= 1 && day_of_month <= 7) return "lbd" // Labor Day
  if (month === 10 && day_of_month === 31) return "hal" // Halloween
  if (month === 11 && day_of_week === "thursday" && day_of_month >= 22 && day_of_month <= 28) return "thk" // Thanksgiving
  if (month === 12 && day_of_month === 24) return "cme" // Christmas Eve
  if (month === 12 && day_of_month === 25) return "cms" // Christmas
  if (month === 12 && day_of_month === 31) return "nye" // New Year's Eve"


  // Return empty string if there is no holiday
  return ""
}