import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import router from "./router.js";

config();

const app = express();

app.use(cors());

app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  }
}
connect();

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
