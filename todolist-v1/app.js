//jshint esversion:8

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let txt = [];
let workItems = [];

app.get("/",function(req,res){
  let today = new Date();

let options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
};

let formatedDate = today.toLocaleDateString("en-US",options);

  res.render("list",{listTitle:formatedDate,anotherItems:txt});
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work List",anotherItems:workItems});
});

// app.post("/work",function(res,req){
//   let item = req.body.work;
//   workItems.push(item);
//   // console.log(txt);
//   res.redirect("/work");
// });

app.post("/",function(req,res){
  let item = req.body.work;
  if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
      txt.push(item);
      res.redirect("/");
  }
  // console.log(res.statusCode);
  // console.log(txt);

});



app.listen("3000",function(req,res){console.log("the server is ready and is running on port 3000!");});
