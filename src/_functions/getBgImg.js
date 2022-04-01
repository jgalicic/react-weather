export default function getBgImg(holiday, season, period, weather) {
  let holiday_name = ""
  if (holiday) {
    holiday_name = holiday.toLowerCase()
  }
  const season_name = season.toLowerCase()
  const day_period = period.toLowerCase()
  let weather_name = weather.toLowerCase()
  let bgImgURL = `https://weather-image-api.herokuapp.com/img/`

  if (weather_name.length > 1) {
    switch(weather_name) {
      case "sunny": weather_name = "clear"; break;
      case "clear": weather_name = "clear"; break;
      case "partly clear": weather_name = "partlycloudy"; break;
      case "mostly clear": weather_name = "clear"; break;
      case "mostly sunny": weather_name = "clear"; break;
      case "partly cloudy": weather_name = "partlycloudy"; break;
      case "cloudy": weather_name = "cloudy"; break;
      case "overcast": weather_name = "cloudy"; break;
      case "mist": weather_name = "cloudy"; break;
      case "patchy rain possible": weather_name = "rain"; break;
      case "patchy snow possible": weather_name = "snow"; break;
      case "patchy sleet possible": weather_name = "snow"; break;
      case "patchy freezing drizzle possible": weather_name = "snow"; break;
      case "thundery outbreaks possible": weather_name = "thunder"; break;
      case "blowing snow": weather_name = "snow"; break;
      case "blizzard": weather_name = "snow"; break;
      case "fog": weather_name = "fog"; break;
      case "areas of fog": weather_name = "fog"; break;
      case "freezing fog": weather_name = "fog"; break;
      case "patchy light drizzle": weather_name = "rain"; break;
      case "light drizzle": weather_name = "rain"; break;
      case "freezing drizzle": weather_name = "snow"; break;
      case "heavy freezing drizzle": weather_name = "snow"; break;
      case "patchy light rain": weather_name = "rain"; break;
      case "light rain": weather_name = "rain"; break;
      case "moderate rain at times": weather_name = "rain"; break;
      case "moderate rain": weather_name = "rain"; break;
      case "heavy rain at times": weather_name = "rain"; break;
      case "heavy rain": weather_name = "rain"; break;
      case "light freezing rain": weather_name = "snow"; break;
      case "moderate or heavy freezing rain": weather_name = "snow"; break;
      case "light sleet": weather_name = "snow"; break;
      case "moderate or heavy sleet": weather_name = "snow"; break;
      case "patchy light snow": weather_name = "snow"; break;
      case "light snow": weather_name = "snow"; break;
      case "patchy moderate snow": weather_name = "snow"; break;
      case "moderate snow": weather_name = "snow"; break;
      case "patchy heavy snow": weather_name = "snow"; break;
      case "heavy snow": weather_name = "snow"; break;
      case "ice pellets": weather_name = "snow"; break;
      case "light rain shower": weather_name = "rain"; break;
      case "moderate or heavy rain shower": weather_name = "rain"; break;
      case "torrential rain shower": weather_name = "rain"; break;
      case "light sleet showers": weather_name = "snow"; break;
      case "moderate or heavy sleet showers": weather_name = "snow"; break;
      case "light snow showers": weather_name = "snow"; break;
      case "moderate or heavy snow showers": weather_name = "snow"; break;
      case "light showers of ice pellets": weather_name = "snow"; break;
      case "moderate or heavy showers of ice pellets": weather_name = "snow"; break;
      case "patchy light rain with thunder": weather_name = "thunder"; break;
      case "moderate or heavy rain with thunder": weather_name = "thunder"; break;
      case "patchy light snow with thunder": weather_name = "snow"; break;
      case "moderate or heavy snow with thunder": weather_name = "snow"; break;
      default: 
        console.log("Error: No matching weather conditions");
    }
  }

  if (holiday_name.length > 1) {
    bgImgURL = `/${holiday_name}/${weather_name}/${day_period}`
  } else {
    // If there is no holiday

    if (season_name === "fall") {
      bgImgURL += `fall/`
      if (day_period === "am1") {
        bgImgURL += `am1/`
        if (weather_name === "clear") bgImgURL += `clear/glenn-carstens-peters-dMX-4Lv0k7I-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/jairo-bochi-JM2mzeuwblg-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/neven-krcmarek-xcbnx5M6XPM-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/colin-watts-lQDU8He6DGk-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/jannik-kiel-sF_VNBCp-98-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/matthias-oberholzer-ct5BXK6aoE0-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/daniel-frank-UoUqvOOwDh8-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/alessio-soggetti-VJTmFSendQ0-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/freestocks-EssPg6x5QeY-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/ed-pirnak-oGd18f8NLfU-unsplash.jpg`
      } else if (day_period === "am2") {
        bgImgURL += `am2/`
        if (weather_name === "clear") bgImgURL += `clear/chris-liu-beers-z6cFcCh60Aw-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/kym-mackinnon-5FqCd-jDV10-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/aaron-burden-Zl8zGdnNcP8-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/hannah-wright-EcO3cDhRBNU-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/jeremy-bezanger-xWu8LIU3BSI-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/artem-sapegin-8c6eS43iq1o-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/olivier-miche-QLmw7fMCDkg-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/andrey-bond-S_O16COE6gU-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/dewang-gupta-5AW7otY6Ocs-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/joshua-woroniecki-p8vUdU9cjyA-unsplash.jpg`
      } else if (day_period === "am3") {
        bgImgURL += `am3/`
        if (weather_name === "clear") bgImgURL += `clear/erik-witsoe-pvoQJym18Jg-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/greg-shield-kAc0En1s1h8-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/clement-falize-KM68mOJK7ng-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/bernd-schulz-1JNEZUk3-CU-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/timothy-eberly-HUiNRjXr-bQ-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/david-wirzba-AK9ufbcsqGk-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/hannah-domsic-2_gJeve_CBY-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/adam-chang-IWenq-4JHqo-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/lex-sirikiat-Tb9os0ICnjo-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/michal-mancewicz-75DaeIVvPuA-unsplash
        .jpg`
      } else if (day_period === "am4") {
        bgImgURL += `am4/`
        if (weather_name === "clear") bgImgURL += `clear/maddy-baker-gS32T4TxSJY-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/elcarito-MHNjEBeLTgw-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/aaron-burden-qger6A-oNbo-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/lennart-gasterstadt-S6Xzzc3n4Ao-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/manuel-barroso-parejo-M9F8VR0jEPM-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/chuttersnap-9AqIdzEc9pY-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/reza-shayestehpour-Nw_D8v79PM4-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/michael-diane-weidner-b_1_w4MSLTs-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/thomas-bormans-ZtM-W-3f0C4-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/felix-mittermeier-WLGHjbC0Cq4-unsplash.jpg`
      } else if (day_period === "pm1") {
        bgImgURL += `pm1/`
        if (weather_name === "clear") bgImgURL += `clear/aaron-burden-1UCj8BZEqRw-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/gabriel-garcia-marengo-ThIY-N_LLfY-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/brendan-beale-ZJh5GUgNngo-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/moritz-kindler-a6fXjUYZHsA-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/richard-hodonicky-VHwJCR5bqME-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/brendan-beale-ZJh5GUgNngo-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/nielsen-arenas-U8qjR1SLdkU-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/maria-shanina-HYDL8uARCN8-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/aaron-burden-rsGPpnuLEc4-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/johannes-plenio-ESL1rIs9j48-unsplash.jpg`
      } else if (day_period === "pm2") {
        bgImgURL += `pm2/`
        if (weather_name === "clear") bgImgURL += `clear/stephanie-krist-cdUAfev8uRc-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/nathan-anderson-udJMd2z_4rk-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/sebastian-unrau-CoD2Q92UaEg-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/anna-popovic-8hM9UqncuCI-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/lukasz-szmigiel-ps2daRcXYes-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/ashwini-chaudhary-Lx3GUwDK_Xc-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/nathan-dumlao-kME9jbKd--s-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/eberhard-grossgasteiger-KX6ECaHP6wQ-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/aaron-burden-rsGPpnuLEc4-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/arto-marttinen-fHXP17AxOEk-unsplash.jpg`
      } else if (day_period === "pm3") {
        bgImgURL += `pm3/`
        if (weather_name === "clear") bgImgURL += `clear/wisconsinpictures-rrPG1UDl6ws-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/noaa-Y7GUOQ83OMg-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/jaleel-akbash-Slh0Tx1MRNA-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/matt-collamer-Geh7z8zhMyI-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/kym-mackinnon-0us63kY_30k-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/noaa-IaRgDQiF36Q-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/quinn-battick-uEf5HA74Nao-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/tim-gouw-rxLGSOM0e3U-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/johannes-plenio-E-Zuyev2XWo-unsplash.jpg`
      } else if (day_period === "pm4") {
        bgImgURL += `pm4/`
        if (weather_name === "clear") bgImgURL += `clear/radik-sitdikov-48MxMepMwqc-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/kristian-seedorff-BvUicqkaZZ0-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/thomas-griesbeck-BS-Uxe8wU5Y-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/osman-rana-LSUuu25azuM-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/bailey-zindel-NRQV-hBF10M-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/mark-ager-3XfMe-XdrRk-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/mateus-campos-felipe-GzAhsY-qPBo-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/kay-liedl-TlqxgnrLTcA-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/tom-barrett-7FNOH-qSxMI-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/daria-tumanova-2oi3JDGB8Vo-unsplash.jpg`      } 
        else if (day_period === "pm5") {
        bgImgURL += `pm5/`
        if (weather_name === "clear") bgImgURL += `clear/phil-henry-llE-x_yrYN0-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/anandu-vinod-pbxwxwfI0B4-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/egor-myznik-EQl-Gjg-rx4-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/ankhesenamun-L1GO3yAV_U8-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/phoebe-strafford-EBbP0Wrbmqs-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/kyle-glenn-2ge3I_ocis4-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/andrew-neel-jtsW--Z6bFw-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/james-donovan-kFHz9Xh3PPU-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/patrick-hendry-f3v1X9TMAlg-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/eugene-triguba-Cm5zI68Wdew-unsplash.jpg`
      } else if (day_period === "pm6") {
        bgImgURL += `pm6/`
        if (weather_name === "clear") bgImgURL += `clear/joshua-woroniecki-3mXIZP6_6zY-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/spencer-watson-Ir1P6OhJJqA-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/patrick-mueller-5sAl6dHUHBg-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/alexander-sinn-DlKvjpM2rZA-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/jakub-kriz-QE3BkF3ygp0-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/aurelien-lemasson-theobald-S2gPnFZRvps-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/ahmed-hasan-tHJKRi-7MjU-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/takemaru-hirai-o7mSBvC57qk-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/fynn-geerdsen-hq4zk-Wl0nc-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/damon-lam-n8mPHmv0gYQ-unsplash.jpg`
      } else {
        console.error("Check day_period")
      }
    }
    else if (season_name === "spring") {
      bgImgURL += `spring/`
      if (day_period === "am1") {
        bgImgURL += `am1/`
        if (weather_name === "clear") bgImgURL += `clear/tersius-van-rhyn-xcQWMPm9fG8-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/christian-lambert-3x5S_5SnFe4-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/noaa-jU-JOEZ2saQ-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/peter-burdon-xhWcmyiq310-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/federico-bottos-JUFuI-kBtas-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/cezar-sampaio-AVwzUcl0waQ-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/angelo-pantazis-2jAhSsF85IY-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/pedro-netto-hBdz9PuHUs8-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/mike-hindle-Ky_WLig0EmM-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/johannes-plenio-E-Zuyev2XWo-unsplash.jpg`
      } else if (day_period === "am2") {
        bgImgURL += `am2/`
        if (weather_name === "clear") bgImgURL += `clear/michael-DXQB5D1njMY-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/robert-wiedemann-7VIEHC9kZZ0-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/sergey-lapunin-APf777nCLXU-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/zac-porter-RSFpv-CDBOM-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/jan-huber-dMJLwMh8n8w-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/slava-stupachenko-tSc0IGImr-c-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/johnny-mcclung-kGZ7uFl0qkk-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/jack-blueberry-RXjlihsqGsg-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/rainer-gelhot-8KvsQbRcllE-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/johannes-plenio-2QUvkQTBh5s-unsplash.jpg`
      } else if (day_period === "am3") {
        bgImgURL += `am3/`
        if (weather_name === "clear") bgImgURL += `clear/aniket-bhattacharya-CgyrwbE6Hm4-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/marita-kavelashvili-ugnrXk1129g-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/rodion-kutsaev-tcPUbu8H2c0-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/rodion-kutsaev-QN2BhLmoUJ0-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/saurav-mahto-ijWb7URJQyo-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/johannes-plenio-Z6E4rJemy24-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/aaron-burden-WAa81dKJbzA-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/alexandra-vo-JuVs0uCYUvA-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/jen-we-Kv3Xk2gfhyU-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/todor-ilchevski-Yfr33Jd28Eo-unsplash.jpg`
      } else if (day_period === "am4") {
        bgImgURL += `am4/`
        if (weather_name === "clear") bgImgURL += `clear/aaron-burden-DjsBoWp7HV0-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/sonika-agarwal-ZCSDbdZ-Ym8-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/kiwihug-ZB3OBIkNh6E-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/paulina-k-8nqRkIzl_1w-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/eduardo-muniz-4sRVyiRptfE-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/connor-misset-TiDCM8lsgUA-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/amanda-frank-MvsjXlQtkCY-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/johannes-plenio-MVr6pgZzlbY-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/suam-FjHYMJ_P_Nc-unsplash.jpg`
      } else if (day_period === "pm1") {
        bgImgURL += `pm1/`
        if (weather_name === "clear") bgImgURL += `clear/arno-smit-sKJ7zSylUao-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/ash-from-modern-afflatus-NQ6Lh81BTRs-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/june-admiraal-r4RpK18X718-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/jack-blueberry-_0aQnhR8q_0-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/david-marcu-CaQ_KITtnVY-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/keenan-barber-xDC4NWQC_nM-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/kasia-gajek-QCnQV5teMzU-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/valentin-hintikka-RztipXeQiA0-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/marco-forno-qJ5h-gU3QKo-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/michael-krahn-gG5FPuJrfZY-unsplash.jpg`
      } else if (day_period === "pm2") {
        bgImgURL += `pm2/`
        if (weather_name === "clear") bgImgURL += `clear/uwe-conrad-0YcR_WttkoA-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/masaaki-komori-_SbeCWYjwCQ-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/ricardo-gomez-angel-_-bjuZYtc40-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/markus-winkler-PRUxzzIcw1g-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/ice-tea-ZAul1EmXrdI-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/clark-wilson-mwzvQy6eNbs-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/clark-wilson-QQompa1JMoI-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/georg-eiermann-aVOmGbN5m0U-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/john-tecuceanu-oSrqmMMk6vI-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/daiga-ellaby-YnNczu62rdk-unsplash.jpg`
      } else if (day_period === "pm3") {
        bgImgURL += `pm3/`
        if (weather_name === "clear") bgImgURL += `clear/daiga-ellaby-YnNczu62rdk-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/aki-nakazawa-GYubqX9kTQg-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/johanneke-kroesbergen-kamps-_PZSMlRPRR4-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/spencer-eccles_jones-A2a2o_TSefM-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/daria-nepriakhina-2mSzfaseWvg-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/radek-kilijanek-Mz0rv0EbJGk-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/pete-nowicki-_87lZuOyg64-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/pepe-nero-iBexrEQaWLQ-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/austin-schmid-r7zjJ63kAPU-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/hosein-zanbori-QPYtOXImZCY-unsplash.jpg`
      } else if (day_period === "pm4") {
        bgImgURL += `pm4/`
        if (weather_name === "clear") bgImgURL += `clear/simon-berger-twukN12EN7c-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/nick-fewings-ShV2MGxzK4g-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/lennart-hellwig-YQwVE8cpi4g-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/thomas-park-9y0kKtjNu-M-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/kyle-0FBFheQ_MOo-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/timothy-dykes-VJ20ThHUFig-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/elizabeth-kay-IEb6tsv-TWc-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/ivan-aleksic-2-rmsMa4Thc-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/vimal-cleetus-Hv7Q9LFADgk-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/basil-smith-KmsDi5XH__0-unsplash.jpg`      
      } else if (day_period === "pm5") {
        bgImgURL += `pm5/`
        if (weather_name === "clear") bgImgURL += `clear/trevor-mckinnon-XfjmDeR7P7E-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/irina-iriser-zquHAkd2uhA-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/emmanuel-appiah-bXmCr4ww2JU-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/david-dibert-nrX-gcVw8nE-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/remy-fouassier-kjE7bvuLB44-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/tamara-gore-ldZrvy2SOEA-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/christina-rumpf-DhY1f4F4PDU-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/roman-datsiuk-SBDfsNqCTrg-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/vimal-cleetus-Hv7Q9LFADgk-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/shlomo-shalev-MJNXWd4rul8-unsplash.jpg`
      } else if (day_period === "pm6") {
        bgImgURL += `pm6/`
        if (weather_name === "clear") bgImgURL += `clear/jachan-devol-ksdTuDc1ibg-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/annie-spratt-RGPsrTl5JeM-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/jeremy-perkins-Y6zQOIby_Ow-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/johannes-groll-upXoQv5GAr8-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/lucie-capkova-1GUwgCMPVKw-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/dominik-fischer-BRlvvBYeyqw-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/robert-nelson-eXRVrvF3HT8-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/oliver-spicer-E0CZzmGtF_A-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/thomas-le-9yXQTSdy4Ao-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/tengyart-d8UZxgJUR_0-unsplash.jpg`
      } else {
        console.error("Check day_period")
      }
    }
    else if (season_name === "summer") {
      bgImgURL += `summer/`
      if (day_period === "am1") {
        bgImgURL += `am1/`
        if (weather_name === "clear") bgImgURL += `clear/erik-witsoe-pvoQJym18Jg-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "am2") {
        bgImgURL += `am2/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "am3") {
        bgImgURL += `am3/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "am4") {
        bgImgURL += `am4/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "pm1") {
        bgImgURL += `pm1/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "pm2") {
        bgImgURL += `pm2/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "pm3") {
        bgImgURL += `pm3/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "pm4") {
        bgImgURL += `pm4/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`      
      } else if (day_period === "pm5") {
        bgImgURL += `pm5/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else if (day_period === "pm6") {
        bgImgURL += `pm6/`
        if (weather_name === "clear") bgImgURL += `clear/xxx.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/xxx.jpg`
        if (weather_name === "fog") bgImgURL += `fog/xxx.jpg`
        if (weather_name === "frost") bgImgURL += `frost/xxx.jpg`
        if (weather_name === "haze") bgImgURL += `haze/xxx.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/xxx.jpg`
        if (weather_name === "rain") bgImgURL += `rain/xxx.jpg`
        if (weather_name === "snow") bgImgURL += `snow/xxx.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/xxx.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/xxx.jpg`
      } else {
        console.error("Check day_period")
      }
    }
    else if (season_name === "winter") {
      bgImgURL += `winter/`
      if (day_period === "am1") {
        bgImgURL += `am1/`
        if (weather_name === "clear") bgImgURL += `clear/benjamin-voros-U-Kty6HxcQc-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/preillumination-seth-b7UVtV7u9_8-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/paul-gilmore-KT3WlrL_bsg-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/evie-s-0N0B5WbtZT8-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/mikk-tonissoo-oABZJkW3BL8-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/dan-carlson-xxWU76ALQE8-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/evie-s-0N0B5WbtZT8-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/martin-adams-g142r8Rohy4-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/david-brooke-martin-t_ZdxJsE8iM-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/marc-wieland-trnTvywx2Rg-unsplash.jpg`
      } else if (day_period === "am2") {
        bgImgURL += `am2/`
        if (weather_name === "clear") bgImgURL += `clear/feipeng-yi--qVMdZir4wo-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/thomas-somme-wEc8-dCWHsg-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/ales-krivec-In7RdU6QY2M-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/jonathan-marchal-BskNAAbUf_8-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/khamkeo-vilaysing-YnPJtpWNB9Q-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/simon-wilkes-a66gEqpIP5U-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/michiel-van-kaam-0guU7Aoo200-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/alex-talmon-UFskvng2OMU-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/joshua-sortino-IlvY3z4KVCI-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/navi-wWNqtJXElus-unsplash.jpg`
      } else if (day_period === "am3") {
        bgImgURL += `am3/`
        if (weather_name === "clear") bgImgURL += `clear/tom-robertson-0kKcSc4dD7o-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/martin-sanchez-ycG0A6DlvOk-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/ricardo-gomez-angel-dTSaC-S-7fs-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/v2osk-d-OQYiy1gQo-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/ales-krivec-ppnnu5-9bgI-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/lucas-peng-GWTHt8bXoMY-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/joshua-j-cotten-M5Ve4Nfwbto-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/jeremy-goldberg-lKbW5QTT3nQ-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/cyrill-hanni-jAllqTrWN4g-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/annie-nyle-vP0fqtH1xQA-unsplash.jpg`
      } else if (day_period === "am4") {
        bgImgURL += `am4/`
        if (weather_name === "clear") bgImgURL += `clear/nicholas-kampouris-6gBJYHJim9o-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/francesco-ungaro-HuqhM41IXwo-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/v2osk--LRuNvY8W7Q-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/atle-mo-X4PM7DlhaUo-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/ali-gooya-QPC6w8UWT3U-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/michael-behrens-MwrkjreBdVM-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/brian-yurasits-cC5zsOK0Ack-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/ali-inay-yNaGxHqjOuw-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/austin-tiffany-5yEIKhbbxmE-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/glenn-abelson-XUUJAdjX0GI-unsplash.jpg`
      } else if (day_period === "pm1") {
        bgImgURL += `pm1/`
        if (weather_name === "clear") bgImgURL += `clear/agnieszka-mordaunt-qkzHF2kmxi0-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/ivars-krutainis-z_L0sZoxlCk-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/paul-gilmore-r0J9sGBWFOc-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/austris-augusts-jWCrPfpRlCE-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/chad-madden-k0m_nFJ7B20-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/piotr-musiol-1cJPkispfec-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/piotr-musiol-1cJPkispfec-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/aaron-burden-5AiWn2U10cw-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/roma-ryabchenko-f9qtLeroLNQ-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/christian-eisel-_UIQmluZ3x0-unsplash.jpg`
      } else if (day_period === "pm2") {
        bgImgURL += `pm2/`
        if (weather_name === "clear") bgImgURL += `clear/bryson-beaver-dPKt3xLmHOI-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/saikrishna-saketh-yellapragada-E5sW3xubpTw-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/jaime-dantas-fVheDuI88H4-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/nathaniel-shuman-56LUxRRzYbQ-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/david-marcu-Defzr230Q7I-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/bjorn-snelders-Cd3Ek7rNXSk-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/matt-drenth-nwdesAtdQp0-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/alek-kalinowski-Ed--EcGZ3RA-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/daniela-holzer-GdOaQECwrfQ-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/simon-maisch-lDyjLBG56w0-unsplash.jpg`
      } else if (day_period === "pm3") {
        bgImgURL += `pm3/`
        if (weather_name === "clear") bgImgURL += `clear/linmiao-xu-UZ-K9ErzrV0-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/gian-reto-tarnutzer-d8ddeWAc4z4-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/ibrahim-rifath-dt_52sPH1jw-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/photo-nic-LGmwotdbUXk-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/thom-holmes-0Knj96dpcIE-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/huper-by-joshua-earle-cGS5ywfD2Fs-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/yoksel-zok-0EPMgGxPYT4-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/christiaan-huynen-tHqzozeSbtQ-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/shadman-sakib-BoEA8INz7jQ-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/dan-meyers-sP445Zr4Bnc-unsplash.jpg`
      } else if (day_period === "pm4") {
        bgImgURL += `pm4/`
        if (weather_name === "clear") bgImgURL += `clear/luca-micheli-ruWkmt3nU58-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/serey-morm-Z9G2Cm3n080-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/valter-venancio-9FWfFy4N4R8-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/sergey-pesterev-GYIxdUFEkX8-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/andy-longe-Bx-D14IWP8k-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/cosmic-timetraveler-BzqaeA-hkkc-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/marek-piwnicki-vKmDvHtbtbg-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/bailey-hall-ZCDt0z4XOiM-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/robert-lukeman-zNN6ubHmruI-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/thom-holmes-5i7095_H1AU-unsplash.jpg`      
      } else if (day_period === "pm5") {
        bgImgURL += `pm5/`
        if (weather_name === "clear") bgImgURL += `clear/chris-ried-2LqqnrWt3Ig-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/karsten-wurth-7BjhtdogU3A-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/dominik-dombrowski-KNUp-YBwBSE-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/v2osk-p6uB9uGq58k-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/wonderlane-Wo1kOJhfW04-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/daniel-mirlea-ZfKuV0Nq75w-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/tanuj-dargan-HqebxJpFPiI-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/leyre-nW3diVSG3wQ-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/david-brooke-martin-t_ZdxJsE8iM-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/bas-van-der-horst-H-1MzXNAXQI-unsplash.jpg`
      } else if (day_period === "pm6") {
        bgImgURL += `pm6/`
        if (weather_name === "clear") bgImgURL += `clear/thomas-tucker--HPhkZcJQNk-unsplash.jpg`
        if (weather_name === "cloudy") bgImgURL += `cloudy/nick-fewings-kZvQOSaWgd4-unsplash.jpg`
        if (weather_name === "fog") bgImgURL += `fog/lute-muDJN11-Qs4-unsplash.jpg`
        if (weather_name === "frost") bgImgURL += `frost/kristjan-sverrisson-FjVBKyP95Ik-unsplash.jpg`
        if (weather_name === "haze") bgImgURL += `haze/stefan-vAfswwbo8Oo-unsplash.jpg`
        if (weather_name === "partlycloudy") bgImgURL += `partlycloudy/daniel-olah-wfQaZHGAVHo-unsplash.jpg`
        if (weather_name === "rain") bgImgURL += `rain/natsuki-4DsowKunk84-unsplash.jpg`
        if (weather_name === "snow") bgImgURL += `snow/jonatan-pie-7FfG8zcPcXU-unsplash.jpg`
        if (weather_name === "sunrain") bgImgURL += `sunrain/david-brooke-martin-t_ZdxJsE8iM-unsplash.jpg`
        if (weather_name === "thunder") bgImgURL += `thunder/marcel-knupfer-37wuETxVwTQ-unsplash.jpg`
      } else {
        console.error("Check day_period")
      }
    } else {
      console.error("Check season name")
    }
  }
  //return bgImgURL
  console.log(bgImgURL)
  return bgImgURL
 
}
