import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ email }); // Use User instead of user
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPwd = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    
    const user = new User({
      email,
      password: hashedPwd,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save(); // Saving it to the database

    // Generate token and set cookie
    // generateTokenAndSetCookie(res, user._id);

    // Send success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined // Do not return the password
      },
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: err.message }); // Differentiate between client and server errors
  }
};

export const Login = async (req, res) => {
  res.send("Login Route");
};

export const Logout = async (req, res) => {
  res.send("Logout Route");
};
