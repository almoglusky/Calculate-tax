const express = require('express');
const bodeParser = require("body-parser");
const calTax = require ("./calTax")

const app = express()
app.use(bodeParser.urlencoded({extended: true}));
const port = 3000


app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html");
})


app.post("/index.html" , function(req , res){

  //--------calculat Tax--------//
  const salary = Number(req.body.salary);
 

  res.send("<h1 style=margin:10% 0> <h1 style=text-align:center>Your monthly income tax is:   "
   + Math.round(calTax(salary)*100)/100 +
    "</h1></h1>");

});
//--------calculat-end--------//
app.listen(port, function(){
  console.log("on run")
});

