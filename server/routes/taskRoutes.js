const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.post('/tasks', async (req, res) => {
  const { title, personnel, start, end } = req.body;
  
  try {
    const task = new Task({ title, personnel, start, end });
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({ error: 'Failed to create task' });
  }
});

module.exports = router;
