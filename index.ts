const express = require("express");
const app = express();
const port = 3000;
import * as db from "./src/utilities/database";
import { createNote } from "./src/api/notes/create/controller";

db.dbConnect();

app.use(express.json());
app.use("/create", createNote);
app.get("/", (req: any, res: any) => {
  res.send("It works...");
});
app.listen(port, () => console.log(`Listening on port ${port}!`));
