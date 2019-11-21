
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let roll = r(6);

        if( roll == 1 ){

            let num = r(6);
            let dice = r(5) * 2 + 2;

            var text = fs.readFileSync( __dirname + '/tables/items.csv', 'utf8' );
            let rows = text.split("\n");
            let item = rows[ r(rows.length) - 1 ];

            console.log( 'Bring me ' + num + 'd' + dice + ' ' + item + '.' );
        }
        else if( roll == 2 ){
            var text = fs.readFileSync( __dirname + '/tables/items.csv', 'utf8' );
            let rows = text.split("\n");
            let item = rows[ r(rows.length) - 1 ];
            console.log( 'Recover my stolen ' + item + '.' );
        }
        else if( roll == 3 ){
            console.log( 'Get information from NPC.' );
        }
        else if( roll == 4 ){
            console.log( 'Rescue a captive.' );
        }
        else if( roll == 5 ){
            console.log( 'Find out what happen to NPC.' );
        }
        else if( roll == 6 ){
            let num = r(6);
            let dice = r(5) * 2 + 2;

            var text = fs.readFileSync( __dirname + '/tables/creatures.csv', 'utf8' );
            let rows = text.split("\n");
            let data = rows[ r(rows.length) - 1 ];
            data = data.split('\t');
            let monster = data[0];

            console.log( 'Slay ' + num + 'd' + dice + ' ' + monster + ' for me.' );
        }
    }
};