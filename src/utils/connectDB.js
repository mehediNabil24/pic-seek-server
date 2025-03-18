const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://pic-seek:bodrScb6AwwDzSnc@cluster0.yitxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db =client.db('may-ai-server-db');
const imageCollection = db.collection('images');

async function connectDB() {
  return client.connect();

}

module.exports ={ connectDB, imageCollection};
