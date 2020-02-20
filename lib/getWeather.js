
const fetch = require ('node-fetch');

require('dotenv').config()
// const promisifiedRequest = promisify(request);

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${countyCode}&APPID=${process.env.APPID}`;


const getWeather = async (location, countryCode) => {
    // let data = await promisifiedRequest({
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&APPID=${process.env.APPID}`, {method: 'GET'});
        return await data.json();
}


module.exports = getWeather; // export the function