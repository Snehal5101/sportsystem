let express = require('express');
let app = express();
app.use(express.json());

let sport = require('./Route/sport');

let cricket = require('./Route/cricket');
let cricketarr=require('./Route/cricket');
// let { cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10 } = require("./Route/cricket");

let football = require('./Route/football');
// let { fp1, fp2, fp3, fp4, fp5, fp6, fp7, fp8, fp9, fp10 } = require("./Route/football");

//const { json } = require('express');


app.use("/sport", sport);

app.use("/sport/cricket", cricket);

app.use("/sport/cricket/name", cricket);

// app.use("/sport/cricket/ViratKohli", cricket);
// app.use("/sport/cricket/RohitSharma", cricket);
// app.use("/sport/cricket/AaronFinch", cricket);
// app.use("/sport/cricket/JonnyBairstow", cricket);
// app.use("/sport/cricket/DavidWarner", cricket);
// app.use("/sport/cricket/ShaiHope", cricket);
// app.use("/sport/cricket/KaneWilliamson", cricket);
// app.use("/sport/cricket/QuintondeKock", cricket);

app.use("/sport/football", football);

app.use("/sport/football/name", football);

// app.use("/sport/football/LionelMessi", football);
// app.use("/sport/football/CristianoRonaldo", football);
// app.use("/sport/football/NeymarJr.", football);
// app.use("/sport/football/EdenHazard", football);
// app.use("/sport/football/KevinDeBruyne", football);
// app.use("/sport/football/JanOblak", football);
// app.use("/sport/football/VirgilVanDijk", football);
// app.use("/sport/football/MohamedSalah", football);
// app.use("/sport/football/LukaModric", football);
// app.use("/sport/football/Marc-AndreterStegen", football);


 app.post('/sport/cricket/insert', function (req, res) {
     let cp= req.body;
     let data= cricketarr.push(cp);
     res.send(data);
  
});

// app.post('/sport/cricket/insert', function (req, res) {
//     let data = req.body;
//     res.send(data);
// });




// app.post('/sport/football/insert', function (req, res) {
//     let fp= req.body;
//     res.send({fp1,fp2,fp3,fp4,fp5,fp6,fp7,fp8,fp9,fp10,fp});
// });



app.listen(5000);