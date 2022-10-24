const router = require("express").Router();
const Student = require('../models/studentModel');

// Create Student
router.post("/", async (req, res) => {
    try {
        const student = await Student(req.body).save();
        res.status(201).send({ data: student, message: "Student data created successfully"})
    } catch (error) {
        res.status(500).send({message: error})
    }
})

// Get all Students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send({ data: students })
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;