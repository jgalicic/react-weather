export default function getRGBforWeedPollen(pollenIdx) {
  const pollenInt = parseInt(pollenIdx)

  if (pollenIdx === 0) {
    return "rgb(0,228,0)"  // Green
  }

  if (pollenIdx <= 20) {
    return `rgb(${parseInt(pollenIdx * 13.4)},${parseInt((pollenIdx * 1.35) + 228)},0)`
  }

  if (pollenIdx === 21) {
    return "rgb(255,255,0)" // Yellow
  }

  if (pollenIdx <= 77) {
    return `rgb(255,${parseInt(255-((pollenIdx - 21) * 2.345))},0)`
  }

  if (pollenIdx === 78) {
    return "rgb(255,126,0)" // Orange
  }

  if (pollenIdx <= 266) {
    return `rgb(255,${parseInt(126-((pollenIdx - 78) * .67))},0)`
  }

  if (pollenIdx > 267) {
    return "rgb(255,0,0)" // Red
  }
  }



  