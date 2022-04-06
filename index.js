const express = require("express");
var mysql = require("mysql");

const app = express();

const port = process.env.PORT || 8080;

var cors = require("cors");
app.use(cors());

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

var connection = mysql.createConnection(config);

app.get("/locations", (req, res) => {
  connection.query("SElECT * FROM location", function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
  connection.connect();
});
