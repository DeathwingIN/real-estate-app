

// Import necessary modules
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //save data in database

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

// Create the signin controller
export const signin = async (req, res, next) => {
  // Get the data from the request body
  const { email, password } = req.body;

  try {
    // Find the user by email
    const validUser = await User.findOne({ email });

    // Handle User Not Found
    if (!validUser) return next(errorHandler(400, `User Not Found`));

    // Compare the password
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    // Handle Wrong Credentials
    if (!validPassword) return next(errorHandler(401, `Wrong Credentials`));

    // Create a token for storing cookies
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    // Set the cookie with the token
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error); // Get the error and pass it to the error handler (index.js)
  }
};
