export default function getSeason(millis) {
  // 2021
  if (millis < 1632294000000) return "Summer"
  if (millis < 1640073600000) return "Fall"
  if (millis < 1647759600000) return "Winter"
  // 2022
  if (millis < 1655794800000) return "Spring"
  if (millis < 1663830000000) return "Summer"
  if (millis < 1671609600000) return "Fall"
  if (millis < 1679322240000) return "Winter"
  // 2023
  if (millis < 1687334220000) return "Spring"
  if (millis < 1695451740000) return "Summer"
  if (millis < 1703302020000) return "Fall"
  if (millis < 1710903960000) return "Winter"
  // 2024
  if (millis < 1718916600000) return "Spring"
  if (millis < 1727008980000) return "Summer"
  if (millis < 1734772740000) return "Fall"
  if (millis < 1742461260000) return "Winter"
}