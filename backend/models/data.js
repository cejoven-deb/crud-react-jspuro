const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//   Creamos una estancia para crear y guardar la información del estudiante
let studentSchema = new Schema(
  {
    id:{
        type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    dir: {
      type: String,
    },
    password: {
        type:String,
    },

  },
  {
    collection: "students",
  }
);
module.exports = mongoose.model("Student", studentSchema);
