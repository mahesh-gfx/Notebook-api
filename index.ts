const express = require("express");
const app = express();
const port = 3000;
import * as db from "./src/utilities/database";
import { createNote } from "./src/api/notes/create/controller";

db.dbConnect();

app.use("/createNote", createNote);
app.listen(port, () => console.log(`Listening on port ${port}!`));
