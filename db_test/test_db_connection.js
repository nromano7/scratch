var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*******"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully Connected!");
});

con.end(function(err) {
  if (err) throw err;
  console.log("Connection Terminated.");
});