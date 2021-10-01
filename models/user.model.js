const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

// creating schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "customer",
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);


// creating models & exporting

module.exports = mongoose.model("User", userSchema);