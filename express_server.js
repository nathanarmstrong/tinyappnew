const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

const urlDatabase ={
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  let templateVars = {urls: urlDatabase };
  res.render("/urls_index.ejs");
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
}) ;