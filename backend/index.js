
// global.foodData = require('./db')(function call(err, data, Catdata) {
//   // console.log(data)
//   if(err) console.log(err);
//   global.foodData = data;
//   global.foodCategory = Catdata;
// })



const express = require('express')
const app = express()
const dotenv=require('dotenv');
const port = process.env.PORT || 5000
 const path=require('path');
 const cors = require('cors');
 dotenv.config();
 app.use(cors());
 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

// app.use(express.static(path.join(__dirname,"./frontend/build")))

// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
// })


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})