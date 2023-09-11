const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({extended: true, limit: '25mb'}));

const api = require('./api');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());



app.get('/api', (req, res,) => {
  return res.json({ foo: 'bar' })
})

app.use('/api', api);
app.get('/api/Formateur', (req, res,) => {
  const data =api.getRequest();
  res.json(data);
})
//app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'))
// });



app.listen(8080, () => console.log('localhost 8080'));
