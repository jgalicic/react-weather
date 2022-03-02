import fakeApiCall from './fakeApiCall'

export default function getFakeDevData(call) {

  if (call === "fake_solar_api_call") {

       return new Promise((resolve, reject) => {
          if(fakeApiCall) {
             const successObject = {
                status: 'OK',
                results: fakeApiCall.data[0]
             }
             resolve(successObject); 
          } else {
             const errorObject = {
                msg: 'An error occured',
                error, //...some error we got back
             }
             reject(errorObject);
          }
       })
  } else if (call === "fake_lunar_api_call") {
    return new Promise((resolve, reject) => {
       if(fakeApiCall) {
          const successObject = {
             status: 'OK',
             results: fakeApiCall.data[1]
          }
          resolve(successObject); 
       } else {
          const errorObject = {
             msg: 'An error occured',
             error, //...some error we got back
          }
          reject(errorObject);
       }
    })
} else if (call === "fake_aqi_api_call") {
  return new Promise((resolve, reject) => {
     if(fakeApiCall) {
        const successObject = {
           status: 'OK',
           results: fakeApiCall.data[2]
        }
        resolve(successObject); 
     } else {
        const errorObject = {
           msg: 'An error occured',
           error, //...some error we got back
        }
        reject(errorObject);
     }
  })
} else if (call === "fake_weather_api_call") {
  return new Promise((resolve, reject) => {
     if(fakeApiCall) {
        const successObject = {
           status: 'OK',
           results: fakeApiCall.data[3]
        }
        resolve(successObject); 
     } else {
        const errorObject = {
           msg: 'An error occured',
           error, //...some error we got back
        }
        reject(errorObject);
     }
  })
} else if (call === "fake_pollen_call") {
   return new Promise((resolve, reject) => {
      if(fakeApiCall) {
         const successObject = {
            status: 'OK',
            results: fakeApiCall.data[4]
         }
         resolve(successObject); 
      } else {
         const errorObject = {
            msg: 'An error occured',
            error, //...some error we got back
         }
         reject(errorObject);
      }
   })
 }{
    return {
      "error" : "fake api call not available"
    }
  }
}