const express = require('express');
const app = express();
const mysql = require('mysql');
// const port = 3000
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'test',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});
app.get('/', (req, res) => {
  res.send('Hello from compose!');
});

app.listen(3000,()=>{
    console.log("server listening on 3000");
});
