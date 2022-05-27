//jshint esversion:7
const express = require("express");
const app =express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/',function(req,res){
  console.log(req.body.cityName);

  const city = req.body.cityName;
  const apiKey = "e532a918e7d49fcba3142ec632bb5fb8";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";

  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherdata = JSON.parse(data);// change to object
      const temp = weatherdata.main.temp;
      const description = weatherdata.weather[0].description;
      const icon = weatherdata.weather[0].icon;
      const imgurl =  "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<p>The weather is currently "+description+"</p>");
      res.write("<h1>The Temperature in "+city+" is "+temp+" degrees Celsius</h1>");
      res.write("<img src="+imgurl+">");
      res.send();
    });
  });
});









app.listen('3000',function(){console.log("server is running!");});
