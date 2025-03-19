const generateAiReply = require("../utils/ai/generateAiReply");
const { commentCollection } = require("../utils/connectDB");


const postUserComment = async (req, res) => {
  const { imageId, prompt, email, comment } = req.body;
  if (!imageId || !prompt || !email || !comment) {
    res.status(400).send({
      status: 400,
      message: "please provide imageId, prompt, email",
    });
    return;
  }
  const reply = await generateAiReply(prompt, comment);
  const document = {
    prompt,
    imageId,
    email,
    comment,
    createdAt: new Date().toISOString(),
    reply,
  };
  const result = await commentCollection.insertOne(document);
  res.send({ ...result, reply });
};

const getCommentsByImageId = async (req, res) => {
    try {
        const { id } = req.params;  // Image ID from the request parameter

        // Validate if the ID is a valid ObjectId format (if needed)
        if (id.length !== 24) {
            return res.status(400).send({
                status: 400,
                message: "Please provide a valid image ID",
            });
        }

        // Query to find all comments related to the imageId
        const query = { imageId: id }; 
        const result = await commentCollection
            .find(query)
            .sort({ createdAt: -1 })  // Sort by newest comments first
            .toArray();

        res.send(result);
    } catch (err) {
        console.error(err);
        
    }
};


module.exports = { postUserComment, getCommentsByImageId };