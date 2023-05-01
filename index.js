const express = require("express");
const app = express();
const chefInfo = require('./data/chaf-data.json')
const  cors = require('cors')

const port = 5000;

app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get('/chefInfo',(req,res)=>{
    res.send(chefInfo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
