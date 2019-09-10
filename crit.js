
const fs = require('fs');

module.exports = {

    crit: function (args) {

        // Var Setup
        let found = false;
        let num_or_len = false;

        // Arg Processing
        for (var x in args) {
            if ( args[x].substring(0, 7) === '--roll=' ) {
                num_or_len = args[x].substring(7) - 1;

                if(found)
                {
                    console.log( 'You need to pass the roll first, or it will not be used!' );
                }
            }
            else if( args[x].substring(0, 6) === '--val=' ){
                num_or_len = args[x].substring(6) - 1;

                if(found)
                {
                    console.log( 'You need to pass the value first, or it will not be used!' );
                }
            }
            else if (args[x].substring(0, 7) === '--slash' || args[x].substring(0, 10) === '--slashing') {
                
                this.do_output( __dirname + '/tables/crits/crit_slashing.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 7) === '--blunt') {
                
                this.do_output( __dirname + '/tables/crits/crit_blunt.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 8) === '--pierce' || args[x].substring(0, 10) === '--piercing') {
                
                this.do_output( __dirname + '/tables/crits/crit_pierce.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 7) === '--spell') {
                
                this.do_output( __dirname + '/tables/crits/crit_spell.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                
                this.do_output( __dirname + '/tables/crits/crit_range.csv', num_or_len );
                found = true;
            }
        }

        // Error
        if (!found) {
            console.log('Critical type not specified, please add --slash, --blunt, --pierce, --ranged, or --spell to specify.');
        }
    },

    do_output: function( filepath, num_or_len )
    {
        var text = fs.readFileSync( filepath, 'utf8' );
        let rows = text.split("\n");

        let roll = r(rows.length);
        if (!num_or_len) {
            num_or_len = roll - 1;
        }

        console.log( '[100]: ' + num_or_len );
        console.log( rows[num_or_len] );
    },

    fumble: function (args) {

        // Var Setup
        let found = false;
        let num_or_len = false;

        // Arg Processing
        for (var x in args) {
            if (args[x].substring(0, 7) === '--roll=') {
                num_or_len = Number(args[x].substring(7)) - 1;
            }
            else if (args[x].substring(0, 7) === '--melee') {
                
                this.do_output( __dirname + '/tables/crits/fumble_melee.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 7) === '--spell') {
                
                this.do_output( __dirname + '/tables/crits/fumble_spell.csv', num_or_len );
                found = true;
            }
            else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                
                this.do_output( __dirname + '/tables/crits/fumble_range.csv', num_or_len );
                found = true;
            }
        }

        // Error
        if (!found) {
            console.log('Fumble type not specified, please add --melee, --ranged, or --spell to specify.');
        }
    }
};