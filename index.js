const express = require("express");
const app = express();
const port = 3001;

// routes / URL / endpoint utama kita method GET
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("yuhu!");
});

app.post("/login", (req, res) => {
  if (req.name === "femas") {
    res.send("login berhasil");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
