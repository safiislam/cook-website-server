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

app.get('/chefInfo/:id',(req,res)=>{
  const id = req.params.id ;
  const chef = chefInfo.find(c => parseInt(c.user_id) === parseInt(id));
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
