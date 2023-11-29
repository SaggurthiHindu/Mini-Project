const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Task_Title: String,
  DESCRIPTION: String,
  DUE_DATE: String,
  PRIORITY_LEVEL: String,
  USER: String,
  COMMENTS: String,
  status: { type: String, default: "Incomplete" },
  notification: {
    type: Number,
    default: "1"
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
