import PostSchema from "../models/PostSchema.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const post = await PostSchema.findById(req.body.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new PostSchema(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
