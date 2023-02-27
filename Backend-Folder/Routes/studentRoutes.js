const express = require("express");

const router = express.Router();
const {
  getStudents,
  enterStudents,
  deleteStudents,
  updateStudent,
} = require("../Controllers/student");

router.get("/info", getStudents);
router.post("/new", enterStudents);
router.delete("/:id", deleteStudents);
router.put("/:id", updateStudent);

module.exports = router;
