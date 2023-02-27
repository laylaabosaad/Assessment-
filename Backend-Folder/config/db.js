require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
