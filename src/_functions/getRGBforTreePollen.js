export default function getRGBforTreePollen(pollenIdx) {
    const pollenInt = parseInt(pollenIdx)

    if (pollenIdx === 0) {
      return "rgb(0,228,0)"  // Green
    }

    if (pollenIdx <= 95) {
      return `rgb(${parseInt((2.65 * pollenIdx))},${parseInt((.28 * pollenIdx) + 228)},0)`
    }

    if (pollenIdx === 96) {
      return "rgb(255,255,0)" // Yellow
    }

    if (pollenIdx <= 207) {
      return `rgb(255,${parseInt((208-pollenIdx+108)*1.15)},0)`
    }

    if (pollenIdx === 208) {
      return "rgb(255,126,0)" // Orange
    }

    if (pollenIdx <= 703) {
      return `rgb(255,${parseInt((703-pollenIdx)*.255)},0)`
    }

    if (pollenIdx > 703) {
      return "rgb(255,0,0)" // Red
    }
  }



  