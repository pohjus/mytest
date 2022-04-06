const express = require("express");
var mysql = require("mysql");

const app = express();

app.use(express.static("./frontend/build/"));

const port = process.env.PORT || 8080;

var cors = require("cors");
app.use(cors());

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

var pool = mysql.createPool(config);

app.get("/locations", (req, res) => {
  pool.query("SElECT * FROM location", function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
