
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        var text = fs.readFileSync(__dirname + '/tables/traps.csv', 'utf8');
        let rows = text.split("\n");
        console.log( rows[ r(rows.length) - 1 ] + '.' );
    }
};