var Spinner = require('cli-spinner').Spinner;

var spinner = new Spinner({
    text: 'Processando... %s',
    stream: process.stdout,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});
spinner.setSpinnerString('|/-\\');

module.exports = spinner;