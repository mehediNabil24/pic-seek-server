const generateImageUrl = require("../utils/ai/generateImageUrl");
const getImageBuffer = require("../utils/ai/getImageBuffer");
const { imageCollection } = require("../utils/connectDB");

const insertAiImage = async(req,res)=>{
    const {email, prompt, username, userImg, category} = req.body;
    if(!email || !prompt || !username || !userImg || !category){
      res.status(400).send({
        status: 400,
        message: "please provide email, prompt, userName, userImg,category"
      });
    }
  
  
  try{
       // create a final prompt and genreate image buffer 
       const buffer = await getImageBuffer(prompt,category)
       // upload a image and get url
       const data = await generateImageUrl(buffer,prompt);
       console.log(data);
  
       // insert data in mongodb
       const document ={
        email,
        username,
        userImg,
        prompt,
        category,
        thumb_img: data.data.thumb.url,
        medium_img:data.data.medium.url,
        original_img: data.data.url,
        createdAt : new Date().toDateString(),
  
       };
       console.log(document)
       const result = await imageCollection.insertOne(document);
       res.send({...result, url:document.original_img})
      
  }
  catch(err){
    console.log(err);
    res.status(500).send(err)
  }
  
  
  
  
    
   
  }

 const getAllImage = async(req,res)=>{
    try{
        const result = await imageCollection.find().project({_id:1, userImg:1, username:1, thumb_img: 1}).toArray();
        res.send(result);

    }
    catch(err){
        console.log(err)
        res.status(500).send(err)

    }
 } 

  module.exports = {insertAiImage, getAllImage}