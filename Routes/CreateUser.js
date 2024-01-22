const express = require("express");
const router = express.Router();
const user = require("../model/User");
const User = require("../model/User");
const bcrypt = require("bcrypt");

router.post("/createuser", async (req, res) => {
  console.log(req.body.password);
  try {
  

     const salt = await bcrypt.genSalt(10);
     const pass = await bcrypt.hash(req.body.password, salt);
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: pass,
      location: req.body.location,
    });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ success: false, error });
  }
});

router.post("/loginuser", async (req, res) => {
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    console.log(userData);
    if (!userData) {
      return res.json({
        authenticate: false,
        message: "No user found.",
        success: false,
      });
    }
    if (req.body.password !== userData.password) {
      return res.json({
        authenticate: false,
        message: "Incorrect Password",
        success: false,
      });
    }
    return res.send({
      authenticate: true,
      message: "Login Successfully",
      success: true,
    });
  } catch (error) {
    res.send({ success: false, error });
  }
});

module.exports = router;
