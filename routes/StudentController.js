const express = require('express');
const {Student} = require('../models')

const router = express.Router();

router.get('/student', async (req, res) => {
  const student = await Student.find({})
  
  try {
    res.send(student)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/student/:id', async (req, res) => {
  const student = await Student.findById(req.params.id)
  try {
    res.send(student)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/student', async (req, res) => {
  const student = await Student.create(req.body);
  console.log('post student', student);
  
  try {
    res.send(student)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put('/student/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id,req.body);
  console.log('update student', student);
  
  try {
    res.send(student)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete('/student/:id', async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  console.log('delete student', student);
  
  try {
    res.send(student)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;