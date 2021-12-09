const Route = require('express').Router();

let  fp1=({PlayerName:"Lionel Messi",Clubname:"Barcelona",Rank:1});
let  fp2=({PlayerName:"Cristiano Ronaldo",Clubname:"Piemonte Calcio",Rank:2});
let  fp3=({PlayerName:"Neymar Jr.",Clubname:"Germain",Rank:3});
let  fp4=({PlayerName:"Eden Hazard",Clubname:"Real Madrid",Rank:4});
let  fp5=({PlayerName:"Kevin De Bruyne",Clubname:"Manchester City",Rank:5});
let  fp6=({PlayerName:"Jan Oblak",Clubname:"Atletico de Madrid",Rank:6});
let  fp7=({PlayerName:"Virgil Van Dijk",Clubname:"Liverpool",Rank:7});
let  fp8=({PlayerName:"Mohamed Salah",Clubname:"Liverpool",Rank:8});
let  fp9=({PlayerName:"Luka Modric",Clubname:"Real Madrid",Rank:9});
let  fp10=({PlayerName:"Marc-Andreter Stegen",Clubname:"Barcelona",Rank:10});

Route.get('/', function (req, res){
    res.json({fp1,fp2,fp3,fp4,fp5,fp6,fp7,fp8,fp9,fp10});
});


module.exports =Route;