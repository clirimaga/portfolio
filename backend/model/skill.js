const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  pic: { type: String },
    name: { type: String },
  });

module.exports = mongoose.model("Skill", skillSchema);
