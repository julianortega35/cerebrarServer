
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");


const {
    isLoggedIn,
} = require ("../helpers/middlewares");


// GET route => to get profile info
router.get("/profile", isLoggedIn(),  (req, res, next) => {
    const _id = req.session.currentUser._id;
    User.findById(_id)
    .populate("myThoughts")
    .then((user)=>{
      res.json(user);
      
    })
    .catch((error)=>{
      console.log(error)
  
    })
  });
  


  module.exports = router;