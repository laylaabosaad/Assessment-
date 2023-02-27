const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Students = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
});

const Studentmodel = mongoose.model("Student", Students);
module.exports = Studentmodel;
