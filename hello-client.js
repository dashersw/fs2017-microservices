const cote = require('cote');

const helloRequester = new cote.Requester({ name: 'Hello Client' });

setInterval(() => {
    helloRequester
        .send({ type: 'hello' })
        .then(console.log);
}, 1000);

process.on('SIGINT', process.exit);
