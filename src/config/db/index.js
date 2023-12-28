const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/china_learn", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connect successfully!!!");
  } catch (error) {
    console.log("Database connect failure!!!");
  }
}

module.exports = { connect };
