const app = require('./src/app');
const {connectDB} = require('./src/utils/connectDB')

require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(port,()=>{
      console.log( `server is running on port ${port}`);
      console.log('connected to MongoDB');
  })
  
  }
  
  ).catch((err)=>{
    console.log(err)
  })





