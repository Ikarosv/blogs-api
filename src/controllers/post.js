const postService = require('../services/post');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    
    const { id: userId } = req.user;
    
    const newPost = await postService.createPost(title, content, categoryIds, userId);
    console.log(newPost);
    return res.status(201).json(newPost);
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    console.log(error);
    return res.status(500).json({ error });
  }
};

module.exports = { createPost };