const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
});

//create tableotomatis
const Student = mongoose.model("student",StudentSchema);
module.exports = Student;