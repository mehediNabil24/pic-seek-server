//defination
require('dotenv').config();
const express = require("express");
const app = express();

const cors = require("cors");
const logger = require("./logger");

const imageRouter = require('./Routes/image.route');
const commentRouter = require('./Routes/comment.route');


// middleware

app.use(cors());
app.use(express.json());
app.use(logger);


// routes
app.use('/api/v1/image', imageRouter);
app.use('/api/v1/comment', commentRouter);

//playground


//

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

module.exports = app;
