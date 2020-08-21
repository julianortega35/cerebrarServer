const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Thought = require("../models/thought");
const User = require("../models/user");


const {
    isLoggedIn,
} = require ("../helpers/middlewares");


// GET route => to get all the thoughts
router.get("/", isLoggedIn(),  (req, res, next) => {
    Thought.find()
      .then(allTheThoughts => {
        res.json(allTheThoughts );
      })
      .catch(err => {
        res.json(err);
      });
  });



// GET route => to get a specific thought
router.get('/:id', isLoggedIn(), (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Thought.findById(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })

    // PUT route => to update a specific Thought
    router.put('/edit/:id', isLoggedIn(), (req, res, next)=>{
     
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
        }
      
        const {automaticThought, 
          intensity,
          alternativeThought, 
          task, 
          category} = req.body
        Thought.findByIdAndUpdate(req.params.id, {automaticThought, 
          intensity,
          alternativeThought, 
          task, 
          category})
          .then(() => {
            res.json({ message: `Project with ${req.params.id} is updated successfully.` });
          })
          .catch(err => {
            res.json(err);
          })
      })


      // POST route => to create a new thought
    router.post("/add", isLoggedIn(), (req, res, next) => {
     const userId =  req.session.currentUser;
     Thought.create({
    automaticThought: req.body.automaticThought,
    intensity: req.body.intensity,
    alternativeThought: req.body.alternativeThought,
    task: req.body.task,
    category: req.body.category,  
    })
      .then(thought => {
          console.log(thought)
        User.findByIdAndUpdate(userId, { $push: { myThoughts: thought._id } })
        .then((thought) => {
            res.status(201).json(thought) 
      })
    })
      .catch(err => {
        res.json(err);
      });
  });


    // DELETE route => to delete a specific thought
    router.delete('/:id', isLoggedIn(), (req, res, next)=>{
  
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
        }
      
        Thoughts.findByIdAndRemove(req.params.id)
          .then(() => {
            res.json({ message: `Project with ${req.params.id} is removed successfully.` });
          })
          .catch( err => {
            res.json(err);
          })
      })
    




module.exports = router;