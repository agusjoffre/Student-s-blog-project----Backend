import {
  getPosts,
  getOnePost,
  createPost,
} from "./controllers/PostController.js";
import express from "express";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getOnePost);
router.post("/posts", createPost);

export default router;
