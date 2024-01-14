import {
  getPosts,
  getOnePost,
  createPost,
} from "./controllers/PostController.js";
import {
  getLogin,
  registerUser,
  getUser,
} from "./controllers/authController.js";
import express from "express";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getOnePost);
router.post("/posts", createPost);

router.post("/users/login", getLogin);
router.post("/users/register", registerUser);
router.get("/users/:id", getUser);



export default router;
