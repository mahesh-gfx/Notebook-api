const mongoose = require("mongoose");

export function dbConnect() {
  mongoose.connect("mongodb://localhost:27017/notes");
  console.log("DB Connected");
}

mongoose.connection.on("error", (err: any) => {
  console.warn("Connection to Database failed!", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Connected to Database...");
});
