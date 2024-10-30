const express = require('express');
const path = require('node:path');
const { exec } = require('child_process');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  err? console.log(err) : exec(`start ${'http://localhost:' + port}`);
})