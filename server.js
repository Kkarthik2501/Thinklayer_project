const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sonu2501@'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE IF NOT EXISTS userdetails", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE details (name VARCHAR(255), email VARCHAR(255),phone INTEGER(10))";
  connection.query(sql, function (err, result) {
    console.log("Table created");
  });
});

app.post('/adddetails', (req, res) => {
  const formData = req.body;
  const query = 'INSERT INTO details (name, email, phone) VALUES (?, ?, ?)';
  connection.query(query, [formData.name, formData.email, formData.phone], (err, results) => {
    if (err) {
      console.log('Error occurred while saving data to database:', err);
      res.send('Error occurred while saving data to database!');
    } else {
      console.log('Data saved successfully!');
      res.send('Data saved successfully!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
