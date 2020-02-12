
const fs = require('fs');

module.exports = {

    exec: function (args) {

        let top = 0;
        let min = 0;
        let max = 0;
        let chal = -1;
        let count = 1;
        let headers = false;

        for (var x in args) {
            if (args[x] == '--headers') {
                headers = true;
            }
            else if (args[x].substring(0, 6) === '--top=') {
                top = Number( args[x].substring(6) );
            }
            else if (args[x].substring(0, 12) === '--challenge=') {
                chal = Number( args[x].substring(12) );
            }
            else if (args[x].substring(0, 6) === '--min=') {
                min = Number( args[x].substring(6) );
            }
            else if (args[x].substring(0, 6) === '--max=') {
                max = Number( args[x].substring(6) );
            }
            else if (args[x].substring(0, 8) === '--count=') {
                count = Number( args[x].substring(8) );
            }
        }

        if( ( min != 0 && max == 0 ) || ( min == 0 && max != 0 ) )
        {
            console.log( 'Both min and max must be set!' );
            return 1;
        }
        
        if (chal != -1) {
            console.log('Finding creature with a challenge rating of ' + chal + '.');
        }

        if (headers) {
            console.log('Name	Size	Type	Tags	Alignment	Challenge	XP	Source');
        }

        var text = fs.readFileSync(__dirname + '/tables/creatures.csv', 'utf8');
        let rows = text.split("\n");

        if (top == 0) { top = rows.length; }

        let c = 0;
        let creature;
        while (count > c) {
            if (chal != -1) {
                let x = 0;
                
                while (x != chal) {
                    creature = rows[r(top) - 1];
                    let sections = creature.split("\t");
                    let challenge = Number( sections[5] );

                    if(challenge === chal)
                    {
                        x = chal;
                        console.log(creature + '.');
                    }
                }
            }
            else if( max != 0 )
            {
                let found = false;

                console.log( 'Finding creature with a challenge rating bettween ' + min + ' and ' + max + '.' );
                while (!found) {
                    creature = rows[r(top) - 1];
                    let sections = creature.split("\t");
                    let challenge = Number( sections[5] );
                    
                    if(challenge <= max && challenge >= min)
                    {
                        found = true;
                        console.log(creature + '.');
                    }
                }
            }
            else{
                console.log(rows[r(top) - 1] + '.');
            }

            c++;
        }


    }
};