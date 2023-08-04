const express = require("express");
const http = require("http"); // Change to https for project
/*
const https = require('https');
const fs = require('fs');
*/

const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

/*
const options = {
    key: fs.readFileSync('/data/ist411.key'),
    cert: fs.readFileSync('/data/ist411.cert'),
};
*/

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
//routes
// Route for the home page test
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});
// Route for the home page
// Route for the user login page
app.get("/userlogin", (req, res) => {
  res.sendFile(__dirname + "/userlogin.html");
});
// Route for the user management page
app.get("/usermanagement", (req, res) => {
    res.sendFile(__dirname + "/usermanagement.html");
});
// Route for the shipping page
app.get("/shipping", (req, res) => {
    res.sendFile(__dirname + "/shipping.html");
});
// Route for the shopping cart page
app.get("/shoppingcart", (req, res) => {
    res.sendFile(__dirname + "/shoppingcart.html");
});
// Route for the product page
app.get("/product", (req, res) => {
    res.sendFile(__dirname + "/product.html");
});
// Route for the billing page
app.get("/billing", (req, res) => {
    res.sendFile(__dirname + "/billings.html");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:Team1ist256@team1db.jo3jlzz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Node API app is running on port 3001");
    }),
      console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// const server = https.createServer(options, app);
