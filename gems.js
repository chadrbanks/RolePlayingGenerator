
const fs = require('fs');

module.exports = {

    exec: function (args) {

        let val = 10;
        for (var x in args) {
            if (args[x].substring(0, 6) === '--val=') {
                val = args[x].substring(6);
            }
            else if (args[x].substring(0, 8) === '--value=') {
                val = args[x].substring(8);
            }
        }

        console.log( "Generating a gem type for a value of " + val + "." );

        let path = __dirname + '/tables/gems/gems_' + val + 'gp.csv';
        if (fs.existsSync(path)) {
            var text = fs.readFileSync(path, 'utf8');
            let rows = text.split("\n");

            console.log(rows[ r(rows.length) - 1 ]);
        }
        else {
            console.log('No gem table exists for this value, try 10gp. `rpg gem --val=10');
        }
    }
};