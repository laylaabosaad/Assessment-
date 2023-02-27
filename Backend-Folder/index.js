const express = require("express");
const connectDB = require("./config/db");
const app = express();
const studentInfo = require("./Routes/studentRoutes");
const deleteStudents = require("./Routes/studentRoutes");
const enterStudents = require("./Routes/studentRoutes");
const updateStudent = require("./Routes/studentRoutes");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.Port || 5000;
app.use(cors());
app.use("/", studentInfo);
app.use("/", enterStudents);
app.use("/", deleteStudents);
app.use("/", updateStudent);

app.listen(PORT, () => {
  connectDB();
});
