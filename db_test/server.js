const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "******"
});

var sql = "SELECT * FROM ta_apps.apps;";

con.connect(function(err) {
  if (err) throw err;
});

app.get('/', function (req, res) {

  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    } else {
      context = {res:result};
      res.render('index',context);
    }
  });
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})


