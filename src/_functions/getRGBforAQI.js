export default function getRGBforAQI(aqi) {
    const aqiInt = parseInt(aqi)
    switch (aqiInt) {
      case 0: 
        return "0,228,0" // Green
      case 1: 
        return "5,228,0"
      case 2: 
        return "10,229,0"
      case 3: 
        return "15,229,0"
      case 4: 
        return "20,230,0"
      case 5: 
        return "25,230,0"
      case 6: 
        return "30,231,0"
      case 7: 
        return "35,231,0"
      case 8: 
        return "40,232,0"
      case 9: 
        return "45,232,0"
      case 10: 
        return "50,233,0"
      case 11: 
        return "55,233,0"
      case 12: 
        return "60,234,0"
      case 13: 
        return "65,234,0"
      case 14: 
        return "70,235,0"
      case 15: 
        return "75,235,0"
      case 16: 
        return "80,236,0"
      case 17: 
        return "85,236,0"
      case 18: 
        return "90,237,0"
      case 19: 
        return "95,237,0"
      case 20: 
        return "100,238,0"
      case 21: 
        return "105,238,0"
      case 22: 
        return "110,239,0"
      case 23: 
        return "115,239,0"
      case 24: 
        return "120,240,0"
      case 25: 
        return "125,240,0"
      case 26: 
        return "130,241,0"
      case 27: 
        return "135,242,0"
      case 28: 
        return "140,242,0"
      case 29: 
        return "145,243,0"
      case 30: 
        return "150,243,0"
      case 31: 
        return "155,244,0"
      case 32: 
        return "160,244,0"
      case 33: 
        return "165,245,0"
      case 34: 
        return "170,245,0"
      case 35: 
        return "175,246,0"
      case 36: 
        return "180,246,0"
      case 37: 
        return "185,247,0"
      case 38: 
        return "190,247,0"
      case 39: 
        return "195,248,0"
      case 40: 
        return "200,249,0"
      case 41: 
        return "205,249,0"
      case 42: 
        return "210,250,0"
      case 43: 
        return "215,250,0"
      case 44: 
        return "220,251,0"
      case 45: 
        return "225,251,0"
      case 46: 
        return "230,252,0"
      case 47: 
        return "235,252,0"
      case 48: 
        return "240,253,0"
      case 49: 
        return "245,253,0"
      case 50: 
        return "250,254,0"
      case 51: 
        return "255,255,0" // Yellow
      case 52: 
        return "255,252,0"
      case 53: 
        return "255,249,0"
      case 54: 
        return "255,247,0"
      case 55: 
        return "255,244,0"
      case 56: 
        return "255,242,0"
      case 57: 
        return "255,239,0"
      case 58: 
        return "255,236,0"
      case 59: 
        return "255,234,0"
      case 60: 
        return "255,231,0"
      case 61: 
        return "255,229,0"
      case 62: 
        return "255,226,0"
      case 63: 
        return "255,224,0"
      case 64: 
        return "255,221,0"
      case 65: 
        return "255,218,0"
      case 66: 
        return "255,216,0"
      case 67: 
        return "255,213,0"
      case 68: 
        return "255,211,0"
      case 69: 
        return "255,208,0"
      case 70: 
        return "255,205,0"
      case 71: 
        return "255,203,0"
      case 72: 
        return "255,200,0"
      case 73: 
        return "255,198,0"
      case 74: 
        return "255,195,0"
      case 75: 
        return "255,193,0"
      case 76: 
        return "255,190,0"
      case 77: 
        return "255,187,0"
      case 78: 
        return "255,185,0"
      case 79: 
        return "255,182,0"
      case 80: 
        return "255,180,0"
      case 81: 
        return "255,177,0"
      case 82: 
        return "255,175,0"
      case 83: 
        return "255,172,0"
      case 84: 
        return "255,169,0"
      case 85: 
        return "255,167,0"
      case 86: 
        return "255,164,0"
      case 87: 
        return "255,162,0"
      case 88: 
        return "255,159,0"
      case 89: 
        return "255,156,0"
      case 90: 
        return "255,154,0"
      case 91: 
        return "255,151,0"
      case 92: 
        return "255,149,0"
      case 93: 
        return "255,146,0"
      case 94: 
        return "255,144,0"
      case 95: 
        return "255,141,0"
      case 96: 
        return "255,138,0"
      case 97: 
        return "255,136,0"
      case 98: 
        return "255,133,0"
      case 99: 
        return "255,131,0"
      case 100: 
        return "255,128,0"
      case 101: 
        return "255,126,0" // Orange
      case 102: 
        return "255,123,0"
      case 103: 
        return "255,120,0"
      case 104: 
        return "255,118,0"
      case 105: 
        return "255,115,0"
      case 106: 
        return "255,113,0"
      case 107: 
        return "255,110,0"
      case 108: 
        return "255,108,0"
      case 109: 
        return "255,105,0"
      case 110: 
        return "255,103,0"
      case 111: 
        return "255,100,0"
      case 112: 
        return "255,98,0"
      case 113: 
        return "255,95,0"
      case 114: 
        return "255,93,0"
      case 115: 
        return "255,90,0"
      case 116: 
        return "255,88,0"
      case 117: 
        return "255,85,0"
      case 118: 
        return "255,83,0"
      case 119: 
        return "255,80,0"
      case 120: 
        return "255,78,0"
      case 121: 
        return "255,75,0"
      case 122: 
        return "255,73,0"
      case 123: 
        return "255,70,0"
      case 124: 
        return "255,68,0"
      case 125: 
        return "255,65,0"
      case 126: 
        return "255,63,0"
      case 127: 
        return "255,60,0"
      case 128: 
        return "255,57,0"
      case 129: 
        return "255,55,0"
      case 130: 
        return "255,52,0"
      case 131: 
        return "255,50,0"
      case 132: 
        return "255,47,0"
      case 133: 
        return "255,45,0"
      case 134: 
        return "255,42,0"
      case 135: 
        return "255,40,0"
      case 136: 
        return "255,37,0"
      case 137: 
        return "255,35,0"
      case 138: 
        return "255,32,0"
      case 139: 
        return "255,27,0"
      case 140: 
        return "255,25,0"
      case 141: 
        return "255,22,0"
      case 142: 
        return "255,20,0"
      case 143: 
        return "255,17,0"
      case 144: 
        return "255,15,0"
      case 145: 
        return "255,13,0"
      case 146: 
        return "255,11,0"
      case 147: 
        return "255,9,0"
      case 148: 
        return "255,7,0"
      case 149: 
        return "255,5,0"
      case 150: 
        return "255,3,0"
      case 151: 
        return "255,0,0" // Red
      case 152: 
        return "253,1,3"
      case 153: 
        return "251,3,6"
      case 154: 
        return "248,4,9"
      case 155: 
        return "246,5,12"
      case 156: 
        return "244,6,15"
      case 157: 
        return "242,8,18"
      case 158: 
        return "239,9,21"
      case 159: 
        return "237,10,24"
      case 160: 
        return "235,11,27"
      case 161: 
        return "233,13,30"
      case 162: 
        return "230,14,33"
      case 163: 
        return "228,15,36"
      case 164: 
        return "226,16,39"
      case 165: 
        return "224,18,42"
      case 166: 
        return "221,19,45"
      case 167: 
        return "219,20,48"
      case 168: 
        return "217,21,51"
      case 169: 
        return "215,23,54"
      case 170: 
        return "212,24,57"
      case 171: 
        return "210,25,60"
      case 172: 
        return "208,26,63"
      case 173: 
        return "206,28,66"
      case 174: 
        return "203,29,69"
      case 175: 
        return "201,30,72"
      case 176: 
        return "199,32,76"
      case 177: 
        return "197,33,79"
      case 178: 
        return "195,34,82"
      case 179: 
        return "192,35,85"
      case 180: 
        return "190,37,88"
      case 181: 
        return "188,38,91"
      case 182: 
        return "186,39,94"
      case 183: 
        return "183,40,97"
      case 184: 
        return "181,42,100"
      case 185: 
        return "179,43,103"
      case 186: 
        return "177,44,106"
      case 187: 
        return "174,45,109"
      case 188: 
        return "172,47,112"
      case 189: 
        return "170,48,115"
      case 190: 
        return "168,49,118"
      case 191: 
        return "165,50,121"
      case 192: 
        return "163,52,124"
      case 193: 
        return "161,53,127"
      case 194: 
        return "159,54,130"
      case 195: 
        return "156,55,133"
      case 196: 
        return "154,57,136"
      case 197: 
        return "152,58,139"
      case 198: 
        return "150,59,142"
      case 199: 
        return "147,60,145"
      case 200: 
        return "145,62,148"
      case 201: 
        return "143,63,151" // Purple
      case 202: 
        return "143,63,150"
      case 203: 
        return "143,62,149"
      case 204: 
        return "142,61,148"
      case 205: 
        return "142,60,146"
      case 206: 
        return "142,60,145"
      case 207: 
        return "142,59,144"
      case 208: 
        return "142,59,143"
      case 209: 
        return "142,58,142"
      case 210: 
        return "141,57,141"
      case 211: 
        return "141,57,139"
      case 212: 
        return "141,56,138"
      case 213: 
        return "141,55,137"
      case 214: 
        return "141,55,136"
      case 215: 
        return "141,54,135"
      case 216: 
        return "140,54,134"
      case 217: 
        return "140,53,132"
      case 218: 
        return "140,52,131"
      case 219: 
        return "140,52,130"
      case 220: 
        return "140,51,129"
      case 221: 
        return "140,50,128"
      case 222: 
        return "139,50,127"
      case 223: 
        return "139,49,125"
      case 224: 
        return "139,49,124"
      case 225: 
        return "139,48,123"
      case 226: 
        return "139,47,122"
      case 227: 
        return "139,47,121"
      case 228: 
        return "138,46,120"
      case 229: 
        return "138,45,119"
      case 230: 
        return "138,45,117"
      case 231: 
        return "138,44,116"
      case 232: 
        return "138,43,115"
      case 233: 
        return "138,43,114"
      case 234: 
        return "137,42,113"
      case 235: 
        return "137,42,112"
      case 236: 
        return "137,41,110"
      case 237: 
        return "137,40,109"
      case 238: 
        return "137,40,108"
      case 239: 
        return "137,39,107"
      case 240: 
        return "136,39,106"
      case 241: 
        return "136,38,105"
      case 242: 
        return "136,38,104"
      case 243: 
        return "136,37,102"
      case 244: 
        return "136,37,101"
      case 245: 
        return "136,36,100"
      case 246: 
        return "135,35,99"
      case 247: 
        return "135,35,98"
      case 248: 
        return "135,34,96"
      case 249: 
        return "135,33,95"
      case 250: 
        return "135,33,94"
      case 251: 
        return "135,32,93"
      case 252: 
        return "134,31,92"
      case 253: 
        return "134,31,90"
      case 254: 
        return "134,30,89"
      case 255: 
        return "134,30,88"
      case 256: 
        return "134,29,87"
      case 257: 
        return "133,28,86"
      case 258: 
        return "133,28,85"
      case 259: 
        return "133,27,84"
      case 260: 
        return "133,26,82"
      case 261: 
        return "133,26,81"
      case 262: 
        return "133,25,80"
      case 263: 
        return "132,25,79"
      case 264: 
        return "132,24,78"
      case 265: 
        return "132,23,77"
      case 266: 
        return "132,23,76"
      case 267: 
        return "132,22,74"
      case 268: 
        return "132,21,73"
      case 269: 
        return "131,20,72"
      case 270: 
        return "131,20,71"
      case 271: 
        return "131,19,70"
      case 272: 
        return "131,18,69"
      case 273: 
        return "131,18,67"
      case 274: 
        return "131,17,66"
      case 275: 
        return "130,16,65"
      case 276: 
        return "130,16,64"
      case 277: 
        return "130,15,63"
      case 278: 
        return "130,14,62"
      case 279: 
        return "130,14,61"
      case 280: 
        return "130,13,59"
      case 281: 
        return "129,13,57"
      case 282: 
        return "129,12,56"
      case 283: 
        return "129,11,55"
      case 284: 
        return "129,11,54"
      case 285: 
        return "129,10,52"
      case 286: 
        return "128,9,51"
      case 287: 
        return "128,9,50"
      case 288: 
        return "128,8,49"
      case 289: 
        return "128,8,48"
      case 290: 
        return "128,7,47"
      case 291: 
        return "128,6,45"
      case 292: 
        return "127,6,44"
      case 293: 
        return "127,5,46"
      case 294: 
        return "127,4,42"
      case 295: 
        return "127,4,41"
      case 296: 
        return "127,3,40"
      case 297: 
        return "127,3,39"
      case 298: 
        return "126,2,38"
      case 299: 
        return "126,1,37"
      case 300: 
        return "126,1,36"
      case 301: 
        return "126,0,35" // Maroon


      default:
        return "126,0,35"
    }
  }



  