// const bodyParser = require('body-parser');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cote = require('cote');

// app.use(bodyParser.json());

app.all('*', (req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.get('/hello', (req, res) => {
    helloRequester
        .send({ type: 'hello' })
        .then(rep => res.send(rep));
});

var helloRequester = new cote.Requester({
    name: 'Hello requester'
});

server.listen(5000);

new cote.Sockend(io, {
    name: 'Sockend server'
});
