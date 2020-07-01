const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

//USERS
app.get("/users", db.listUsers);
app.post("/createUser", db.createUser);
app.get("/user/:id", db.infoUser);
app.patch("/user/:id", db.updateUser);
app.delete("/user/:id", db.deleteUser);

//ITEMS
app.get("/items", db.listItems);
app.post("/buy", db.buyItem);
app.get("/item/:id", db.getItem);
app.patch("/item/:id", db.updateItem);
app.delete("/item/:id", db.deleteItem);

//MANUFACTURERS
app.get("/manufacturers", db.listManufacturers);
app.get("/manufacturer/:id", db.getManufacturer);

//SALES
app.post("/sales", db.salesItem)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
