'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world 002 Apr 15 2020 944PM Kolkata India\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);