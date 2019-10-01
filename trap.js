
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let top = 0;
        let tier = 0;

        for (var x in args) {
            
            if (args[x].substring(0, 6) === '--top=') {
                top = Number( args[x].substring(6) );
            }
            else if (args[x].substring(0, 7) === '--tier=') {
                let t = Number( args[x].substring(7) );

                if( t == 1 )
                {
                    top = 40;
                    tier = 0;
                }
                else if( t == 2 )
                {
                    top = 50;
                    tier = 50;
                }
                else if( t == 3 )
                {
                    top = 50;
                    tier = 100;
                }
                else if( t == 4 )
                {
                    top = 50;
                    tier = 150;
                }
            }
        }

        var text = fs.readFileSync(__dirname + '/tables/traps.csv', 'utf8');
        let rows = text.split("\n");

        if (top == 0) { top = rows.length; }

        console.log( rows[ r(top) - 1 + tier ] + '.' );
    }
};