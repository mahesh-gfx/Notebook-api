const express = require("express");
const app = express();
const port = 3000;
const db = require("./utilities/database").db;

app.listen(port, () => console.log(`Listening on port ${port}!`));
