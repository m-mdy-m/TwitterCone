const mongoose = require("mongoose");
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(console.log("connect to database"));
  }
}
module.exports = new Database();