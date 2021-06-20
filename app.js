const express = require("express");
const transactionsController = require("./controllers/TransactionsController")
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});


// ROOT
app.use('/transactions', transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome To Your Transactions account");
});


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
module.exports = app;
