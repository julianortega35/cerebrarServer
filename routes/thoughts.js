const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Thoughts = require("../models/thoughts");


const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
} = require ("../helpers/middlewares");


// GET route => to get all the thoughts
router.get("/thoughts", isLoggedIn(),  (req, res, next) => {
    Thoughts.find()
      .then(allTheThoughts => {
        res.json(allTheThoughts );
      })
      .catch(err => {
        res.json(err);
      });
  });



// GET route => to get a specific project/detailed view
router.get('/thoughts/:id', isLoggedIn(), (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Thoughts.findById(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })

    // PUT route => to update a specific Thought
    router.put('/thoughts/:id', isLoggedIn(), (req, res, next)=>{
  
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: 'Specified id is not valid' });
          return;
        }
      
        Thoughts.findByIdAndUpdate(req.params.id, req.body)
          .then(() => {
            res.json({ message: `Project with ${req.params.id} is updated successfully.` });
          })
          .catch(err => {
            res.json(err);
          })
      })


      // POST route => to create a new thought
    router.post("/thoughts/add", isLoggedIn(), (req, res, next) => {
    Thoughts.create({

    automaticThoughts: req.body.automaticThoughts,
    alternativeThoughts: req.body.alternativeThoughts,
    intensity: req.body.intensity,
    tasks: req.body.tasks,
    category: req.body.tasks,
      
    })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });


    // DELETE route => to delete a specific thought
    router.delete('/thought/:id', isLoggedIn(), (req, res, next)=>{
  
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