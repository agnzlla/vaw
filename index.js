const firebase = require('firebase');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


firebase.initializeApp({
  serviceAccount: "VapeAuto2019-09da29d08c8b.json",
  databaseURL: "https://vapeauto2019.firebaseio.com"
});

const loginRouter = require('./server/routers/loginRouter');
const addRouter = require('./server/routers/addRouter');

const loginAPI = require('./server/api/loginAPI');
const addAPI = require('./server/api/addAPI');

const PORT = 3420;
const app = express();

app.use(bodyParser.json());

app.use('/', loginRouter);
app.use('/add', addRouter);

app.use('/api',loginAPI);
app.use('/api/add',addAPI);

app.use(express.static('public'));



app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');


app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}!`);

})
