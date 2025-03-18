const express = require('express');

const insertAiImage = require('../controller/image.controller');
const imageRouter = express.Router();

imageRouter.post('/create', insertAiImage)
  module.exports = imageRouter