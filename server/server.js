const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const path = require('path');
require('dotenv').config();
const app = express();

const db = process.env.DB_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected sucessfully'))
  .catch(err => console.log(err));

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
