export default function getRGBforGrassPollen(pollenIdx) {
    const pollenInt = parseInt(pollenIdx)

    if (pollenIdx === 0) {
      return "rgb(0,228,0)"  // Green
    }

    if (pollenIdx <= 29) {
      return `rgb(${parseInt((8.793 * pollenIdx))},${parseInt((.93 * pollenIdx) + 228)},0)`
    }

    if (pollenIdx === 30) {
      return "rgb(255,255,0)" // Yellow
    }

    if (pollenIdx <= 60) {
      return `rgb(255,${parseInt(255-((pollenIdx-30)*4.3))},0)`
    }

    if (pollenIdx === 61) {
      return "rgb(255,126,0)" // Orange
    }

    if (pollenIdx <= 341) {
      return `rgb(255,${parseInt(126-((pollenIdx - 61)*.45))},0)`
    }

    if (pollenIdx > 342) {
      return "rgb(255,0,0)" // Red
    }
  }