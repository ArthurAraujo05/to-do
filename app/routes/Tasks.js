const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  }
  catch (err){
    res.status(500).json({message: err.message});
  }
});

router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  }
  catch (err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;