const cowsay = require('cowsay');

const serve = require('@monorepo-mern/server/lib').serve;
serve(cowsay.say({
    text: "Hellooo from http-client!",
    e: "oO",
    T: "U "
}))
