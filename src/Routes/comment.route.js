const express = require("express");
const { postUserComment, getCommentsByImageId } = require("../controller/comment.controller");

const commentRouter = express.Router();

commentRouter.post("/create", postUserComment);
commentRouter.get('/find/:id',getCommentsByImageId )

module.exports = commentRouter;