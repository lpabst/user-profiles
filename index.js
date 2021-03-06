const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');

const app = express();

app.use(bodyParser.json());

var corsOptions = {
    origin: 'https://localhost:3000'
};

app.use(session({ 
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: false
}));
app.use(cors(corsOptions));

app.use(express.static(__dirname + '/public'));

app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.post('/api/login', userCtrl.login);









app.listen(3000, console.log('listening on 3000'));