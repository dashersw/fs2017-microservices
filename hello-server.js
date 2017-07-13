const cote = require('cote');

const name = process.argv[2];

const helloResponder = new cote.Responder({ name, respondsTo: ['hello'] });

helloResponder.on('hello', (req) => {
    console.log('responding with my name:', name);
    return Promise.resolve(`Hello, my name is ${name}!`);
});

process.on('SIGINT', process.exit);
