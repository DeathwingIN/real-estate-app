// import bcryptjs from "bcryptjs";
// import User from "../models/user.model.js";
// import { errorHandler } from "../utils/error.js";
// const jwt = require("jsonwebtoken");

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

// //create a signin controller
// export const signin = async (req, res, next) => {
//   //get the data from the request body
//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(400, `User Not Found`));

//     //compare the password
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, `Wrong Creditentials`));
//     //create a token for store cookies
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     res
//       .cookie("acess__token", token, { httpOnly: true })
//       .status(200)
//       .json(validUser);
//   } catch (error) {
//     next(error); //get the error and pass it to the error handler(index.js )
//   }
// };

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

export const google = async(red, res, next) =>{
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }

  } catch (error) {
    next (error)
    
  }
};

 export const signOut = async(req, res, next) =>{
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
 };