const Route = require('express').Router();

Route.get('/', function (req, res){
res.send("There are different categories of sport system. like Cricket, Football etc.")
});

module.exports=Route;