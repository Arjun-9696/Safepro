require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./config/db");
const cors = require("cors");
const StudentData = require("./routes/studentController");

// Database Connection
connection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/student", StudentData)

const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Listening on port ${port}...`))