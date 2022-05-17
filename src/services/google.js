
import axios from 'axios';
import Config from '../config.json';
var key = Config.api.google;

export const getAddressByZipGoogle = (zip) =>{
    console.log(zip)
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=country:US|postal_code:${zip}&key=${key}`)
    .then(result=>{
        var city = result.data.results[0].address_components.find(a=>a.types.find(t=>t === 'locality'))?.long_name || undefined
        var state = result.data.results[0].address_components.find(a=>a.types.find(t=>t === 'administrative_area_level_1'))?.short_name || undefined
        var lat = result.data.results[0].geometry.location.lat;
        var lng = result.data.results[0].geometry.location.lng;
        if(!city || !state){
          if(result.data.results[0].formatted_address.split(', ')){
            var array = result.data.results[0].formatted_address.split(', ');
            array.map((a, i)=>{
              if(a.includes(zip)){
                state = a.split(' ')[0];
                city = array[i-1] || '';
                
              }
              return true
            })
          }
        }
        return {
          coordinates: `${lat}, ${lng}`,
          address: {
              streetName: '',
              apartmentNumber: '',
              city: city || '',
              state: state || '',
              zipCode: zip,
              country: 'US'
          }
        };

        // return axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat}%2C${lng}&timestamp=0&key=${key.apiId}`)
        // .then(tz=>{
        //   res.timezone = tz?.data?.timeZoneId;
        //   return res;
        // })
        // .catch(error=>{
        //   console.log(error)
        //   return res;
        // })
        
    })
    .catch(error=>{
      console.log(error)
        return {};
    })
}

export const getCoOrdinatesGoogle = (address)=>{
    delete axios.defaults.headers.get['x-api-key'];
    var add= `${address.streetName || ''} ${address.apartmentNumber || ''} ${address.city || ''} ${address.state || ''}, ${address.zipCode || ''}`
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${add}&sensor=true&key=${key.apiId}`)
    .then(result=>{
        var lat = result.data.results[0].geometry.location.lat;
        var lng = result.data.results[0].geometry.location.lng;
        return `${lat}, ${lng}`
    })
    .catch(error=>{
        console.log(error)
    })
}