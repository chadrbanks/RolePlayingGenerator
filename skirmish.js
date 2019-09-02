
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        
        var text = fs.readFileSync( __dirname + '/tables/skirmish.csv', 'utf8' );
        let rows = text.split("\n");
        //console.log( rows[ r(rows.length) - 1 ] + '.' );
        

        let dice1 = r(2) * 2 + 2;
        let dice2 = r(2) * 2 + 2;

       let d1 = r(3) + 'd' + dice1;
       let d2 = r(3) + 'd' + dice2;
       let p1 = rows[ r(rows.length) - 1 ];
       let p2 = rows[ r(rows.length) - 1 ];

        console.log( d1 + ' ' + p1 + ' vs ' + d2 + ' ' + p2 + '.' );
    }
};