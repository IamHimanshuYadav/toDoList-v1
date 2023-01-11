const { kMaxLength } = require("buffer");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var city = req.body.cityName;
    var apiKey = "3e3643f5231fa0eaf7083228801790db";
    var units = "metric";
    var url="https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units="+units+"&APPID="+apiKey ;
    console.log(url);
    https.get(url, function(response){
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const weatherTemp = weatherData.main.temp;
            const weatherDes = weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(weatherDes);
            res.write("<p> the weather is currently " + weatherDes + "</p>");
            res.write("<h1> the temp in "+city+" is " + weatherTemp + ".</h1>");
            res.write("<img src=" + iconurl +" >")

            res.send();
        });
    });
});







app.listen("3000",function(){
    console.log("you are listening to port 3000");
});