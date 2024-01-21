import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MONGO");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Allow send request
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running port 300");
});

// Create API Route
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//Create Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
});
