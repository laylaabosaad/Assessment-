const Studentmodel = require("../Models/studentModel");

exports.getStudents = (req, res) => {
  Studentmodel.find({}, (err, result) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.json({ result });
  });
};

exports.enterStudents = async (req, res) => {
  if (!req.body) {
    res.status(200).json({ message: "Please enter the fields." });
  }
  const addition = await Studentmodel.create({
    fullName: req.body.fullName,
    email: req.body.email,
  });
  return res.json({ addition });
};

exports.deleteStudents = async (req, res) => {
  try {
    const id = req.params.id;
    await Studentmodel.deleteOne({ _id: id });
    res.status(200).json({ message: "Document deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

exports.updateStudent = async (req, res) => {
  const goal = await Studentmodel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("student not found");
  }
  const updatedstudent = await Studentmodel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedstudent);
};
