const Route = require('express').Router();

let footballarr=[{PlayerName:"Lionel Messi",Clubname:"Barcelona",Rank:1},
{PlayerName:"Cristiano Ronaldo",Clubname:"Piemonte Calcio",Rank:2},
{PlayerName:"Neymar Jr.",Clubname:"Germain",Rank:3},
{PlayerName:"Eden Hazard",Clubname:"Real Madrid",Rank:4},
{PlayerName:"Kevin De Bruyne",Clubname:"Manchester City",Rank:5},
{PlayerName:"Jan Oblak",Clubname:"Atletico de Madrid",Rank:6},
{PlayerName:"Virgil Van Dijk",Clubname:"Liverpool",Rank:7},
{PlayerName:"Mohamed Salah",Clubname:"Liverpool",Rank:8},
{PlayerName:"Luka Modric",Clubname:"Real Madrid",Rank:9},
{PlayerName:"Marc-Andreter Stegen",Clubname:"Barcelona",Rank:10}]

Route.get('/', function (req, res){
    res.json(footballarr);
});


Route.get('/:name', function (req, res){
    let Name = req.params.name;
    const player= footballarr.findIndex(function(footballarr,index){
       return footballarr.PlayerName===Name });
    res.send(footballarr[player]);
});


Route.post('/insert', function (req, res)
{   let data=req.body ;
    let newarr=footballarr.concat(" ", data);

    res.send(newarr);
   
});


// Route.get('/LionelMessi', function (req, res){
//     res.json(fp1);
// });

// Route.get('/CristianoRonaldo', function (req, res){
//     res.json(fp2);
// });

// Route.get('/NeymarJr.', function (req, res){
//     res.json(fp3);
// });


// Route.get('/EdenHazard', function (req, res){
//     res.json(fp4);
// });


// Route.get('/KevinDeBruyne', function (req, res){
//     res.json(fp5);
// });


// Route.get('/JanOblak', function (req, res){
//     res.json(fp6);
// });


// Route.get('/VirgilVanDijk', function (req, res){
//     res.json(fp7);
// });


// Route.get('/MohamedSalah', function (req, res){
//     res.json(fp8);
// });


// Route.get('/LukaModric', function (req, res){
//     res.json(fp9);
// });


// Route.get('/Marc-AndreterStegen', function (req, res){
//     res.json(fp10);
// });



module.exports =Route;
module.exports.footballarr=footballarr;


// module.exports.fp1=fp1;
// module.exports.fp2=fp2;
// module.exports.fp3=fp3;
// module.exports.fp4=fp4;
// module.exports.fp5=fp5;
// module.exports.fp6=fp6;
// module.exports.fp7=fp7;
// module.exports.fp8=fp8;
// module.exports.fp9=fp9;
// module.exports.fp10=fp10;