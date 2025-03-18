//defination
require('dotenv').config();
const express = require("express");
const app = express();

const cors = require("cors");
const logger = require("./logger");
const getImageBuffer = require("./utils/ai/getImageBuffer");
const generateImageUrl = require("./utils/ai/generateImageUrl");


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
  }


   // create a final prompt and genreate image buffer 
  const buffer = await getImageBuffer(prompt,category)
  // upload a image and get url
  const data = await generateImageUrl(buffer,prompt);
  console.log(data);
  res.send(data)




  
 
})

//

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

module.exports = app;
