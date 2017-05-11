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
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(session({ 
    secret: config.sessionSecret
}));

app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.post('/api/login', userCtrl.login);








app.listen(3000, console.log('listening on 3000'));