//defination
const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const logger = require("./logger");


// middleware

app.use(cors());
app.use(express.json());
app.use(logger);





//playground
app.post('/create-image', async(req,res)=>{
  const {email, prompt, username, userImg, category} = req.body;
  if(!email || !prompt || !username || !userImg || !category){
    res.status(400).send({
      status: 400,
      message: "please provide email, prompt, userName, userImg,category"
    });
    return;
  }
  res.send({});
})

//

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

module.exports = app;
