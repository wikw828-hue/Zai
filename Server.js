const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const USER = { username: "admin", password: "1234" };
let data = [];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.post("/data", (req, res) => {
  data.push(req.body);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
