const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  link: { type: String },
  pic: { type: String },
  description: { type: String },
  complexity: { type: Number },
  techsUsed: { type: Array },
});

module.exports = mongoose.model("Project", projectSchema);
