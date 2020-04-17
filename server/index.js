const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {

  res.status(200).send('Hello world!')
})



