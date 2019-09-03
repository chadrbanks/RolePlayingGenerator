
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let top = 0;

        for (var x in args) {
            
            if (args[x].substring(0, 6) === '--top=') {
                top = Number( args[x].substring(6) );
            }
        }

        var text = fs.readFileSync(__dirname + '/tables/traps.csv', 'utf8');
        let rows = text.split("\n");

        if (top == 0) { top = rows.length; }

        console.log( rows[ r(top) - 1 ] + '.' );
    }
};