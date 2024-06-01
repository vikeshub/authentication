const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existinguser = await User.findOne({ email: email });
    if (existinguser) {
      return res.status(400).send({
        message: "User already exists!",
      });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).send({ user });
  } catch (error) {
    return res.status(500).send({
      message: "Error in Signing up!",
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(400).send({ message: "User does not exists!" });
    }

    const passwordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordMatched) {
      return res.status(400).send({ message: "Wrong password" });
    }

    const jwtToken = jwt.sign(
      {
        _id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_KEY
    );
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).send({ existingUser, jwtToken });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error while Login!", error: error });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).send({ message: "logged out succesfully!" });
  } catch (error) {
    return res.status(500).send({ message: "Error while logout", error });
  }
};

exports.myDetails = async (req, res) => {
  const userId = req._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "Cannot find User!" });
    }
    return res.status(200).send({ user });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "error getting my details", error: error });
  }
};
