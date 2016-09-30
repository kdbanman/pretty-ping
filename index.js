var readline = require('readline');
var color = require('cli-color');

String.prototype.repeat = function (count) {
    if (count < 1) return '';
    var result = '';
    var pattern = this;
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
};

String.prototype.padRight = function(l,c) {return this+Array(l-this.length+1).join(c||" ")}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var ping_ms_regex = /time=([0-9]+\.?[0-9]?)/g;
    var ping_ms_match = ping_ms_regex.exec(line)

    if (ping_ms_match) {
        var ping_ms = parseInt(ping_ms_match[1]);
        var bar_str = "⊃".repeat(ping_ms);
        var bar_label_str = ("" + parseFloat(ping_ms_match[1]) + " ").padRight(6, " ");
        var labelled_bar_str = bar_label_str + bar_str
        console.log(labelled_bar_str);
    } else {
        console.log(color.red.bold.underline(line))
    }
})
