const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//   Creamos una estancia para crear y guardar la información del estudiante
let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);

