const mongoose = require("mongoose");

export function dbConnect() {
  var mongoDB = "mongodb://127.0.0.1/notes";
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected");
}

mongoose.connection.on("error", (err: any) => {
  console.warn("Connection to Database failed!", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Connected to Database...");
});
