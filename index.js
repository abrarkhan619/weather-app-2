const hbs = require('express-handlebars'); // import handlebars and path
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');

const app = express ();

const getWeather = require('./lib/getWeather'); //require the file in order to import the function/s

app.use(express.static(path.join(__dirname, 'public'))); // use path to join these two paths, 'dirname' is full path name to this folder
// also also tell express this path is static content for the client
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.engine('.hbs', hbs({ // set the view engine to handlebars
    defaultLayout: 'layout', // set layout file as layout.hbs
    extname: '.hbs' // set extension name to .hbs
}));
app.set('view engine', '.hbs'); // tell express to use this engine

app.get('/', async(req, res) => {
    // let data = await getWeather();
    // let description = data.weather[0].description;
    // let name = data.name;
    // let country = data.sys.country;
    // let windSpeed = data.wind.speed;
    // let humidity = data.main.humidity;
    // let temp = data.main.temp;
    // let tempFeelsLike = data.main.feels_like;
    // let sunrise = data.sys.sunrise;
    // let sunset = data.sys.sunset;
    // res.render('index', {description, name, country, windSpeed, humidity, temp, tempFeelsLike, sunrise, sunset}); // render index.hbs page
    res.render('index');
});

app.post('/', async(req, res) => {
    let location = req.body.location;
    let countryCode = req.body.countryCode
    console.log(location);
    console.log(countryCode);
    

    let data = await getWeather(location, countryCode);
    console.log(data);
    

    let temp = data.main.temp;
    let humidity = data.main.humidity;

    res.render('index', {data: {temp, humidity}});
})

app.listen(3009, () =>{
    console.log('server listening on port 3009');
})