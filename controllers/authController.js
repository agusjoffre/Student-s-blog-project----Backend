import UserSchema from "../models/UserSchema.js";
import bodyParser from "body-parser";
import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(bodyParser.json());

export const getLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserSchema.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Wrong password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userTaken = await UserSchema.findOne({ username: username });
    if (userTaken) {
      return res.status(401).json({ message: "Username is already taken" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserSchema({
        username: username,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({ message: "User registered succesfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    const response = {
      username: user.username,
      isAdmin: user.isAdmin,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
