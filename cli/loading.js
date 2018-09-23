const loading = require('loading-cli');
const load = loading({
    text: "Carregando",
    frames: ["◰", "◳", "◲", "◱"],
    stream: process.stdout,
}).start();

module.exports = load;