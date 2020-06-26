const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//USERS
app.get("/users", db.listUsers);
app.post("/createUser", db.createUser);
app.get("/user/:id", db.infoUser);
app.patch("/user/:id", db.updateUser);
app.delete("/user/:id", db.deleteUser);

//PURCHASES
app.post("/buy", db.buyItem);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
