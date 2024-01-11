import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  banner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [String],
  links: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Post", PostSchema);
