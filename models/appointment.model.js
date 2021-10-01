const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const AppointmentSchema = new mongoose.Schema({

  appointmentDate: { type: Date, required: true },

  email: { type: String , required: true ,unique: true },

  name: { type: String, required: true },
  
  age: { type: Number, required: true },

  contact: { type: Number },


} ,{ timestamps: true });

AppointmentSchema.plugin(uniqueValidator);

module.exports =  mongoose.model("Appointment", AppointmentSchema);