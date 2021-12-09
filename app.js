let express = require('express');
let app = express();
app.use(express.json());

let sport=require('./Route/sport');
let cricket=require('./Route/cricket');
//let {cp1,cp2,cp3,cp4,cp5,cp6,cp7,cp8,cp9,cp10}=require("./Route/cricket");
let football=require('./Route/football');


app.use("/sport",sport);
app.use("/sport/cricket",cricket);
app.use("/sport/cricket/BabarAzam",cricket);
app.use("/sport/cricket/ViratKohli",cricket);
app.use("/sport/cricket/RohitSharma",cricket);
app.use("/sport/cricket/AaronFinch",cricket);
app.use("/sport/cricket/JonnyBairstow",cricket);
app.use("/sport/cricket/DavidWarner",cricket);
app.use("/sport/cricket/ShaiHope",cricket);
app.use("/sport/cricket/KaneWilliamson",cricket);
app.use("/sport/cricket/QuintondeKock",cricket);

app.use("/sport/football",football);

// app.get('/sport/cricket/:playername',function(req,res){
//     let playername = req.params.playername;
   
//     res.send(playername+ " " + cp1 );
// });

app.post('/sport/cricket/insert',function(req,res){
    let data=req.body;
  
    res.send(data);
});

app.post('/sport/football/insert',function(req,res){
    let data=req.body;
  
    res.send(data);
});

app.listen(5000);