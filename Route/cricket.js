const Route = require('express').Router();

let cp1=({PlayerName:"Babar Azam",Country:"Pakistan",Rank:1});
let  cp2=({PlayerName:"Virat Kohli",Country:"India",Rank:2});
let  cp3=({PlayerName:"Rohit Sharma",Country:"India",Rank:3});
let  cp4=({PlayerName:"Ross Taylor",Country:"New Zealand",Rank:4});
let  cp5=({PlayerName:"Aaron Finch",Country:"Australia",Rank:5});
let  cp6=({PlayerName:"Jonny Bairstow",Country:"England",Rank:6});
let  cp7=({PlayerName:"David Warner",Country:"Australia",Rank:7});
let  cp8=({PlayerName:"Shai Hope",Country:"West Indies",Rank:8});
let  cp9=({PlayerName:"Kane Williamson",Country:"New Zealand",Rank:9});
let  cp10=({PlayerName:"Quinton de Kock",Country:"South Africa",Rank:10});

Route.get('/', function (req, res){
    res.json({cp1,cp2,cp3,cp4,cp5,cp6,cp7,cp8,cp9,cp10});
});

Route.get('/BabarAzam', function (req, res){
    res.json(cp1);
});

Route.get('/ViratKohli', function (req, res){
    res.json(cp2);
});

Route.get('/RohitSharma', function (req, res){
    res.json(cp3);
});

Route.get('/RossTaylor', function (req, res){
    res.json(cp4);
});

Route.get('/AaronFinch', function (req, res){
    res.json(cp5);
});

Route.get('/JonnyBairstow', function (req, res){
    res.json(cp6);
});

Route.get('/DavidWarner', function (req, res){
    res.json(cp7);
});

Route.get('/ShaiHope', function (req, res){
    res.json(cp8);
});

Route.get('/KaneWilliamson', function (req, res){
    res.json(cp9);
});

Route.get('/QuintondeKock', function (req, res){
    res.json(cp10);
});



module.exports =Route;


module.exports.cp1=cp1;
module.exports.cp2=cp2;
module.exports.cp3=cp3;
module.exports.cp4=cp4;
module.exports.cp5=cp5;
module.exports.cp6=cp6;
module.exports.cp7=cp7;
module.exports.cp8=cp8;
module.exports.cp9=cp9;
module.exports.cp10=cp10;