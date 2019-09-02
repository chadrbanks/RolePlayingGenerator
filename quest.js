
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let roll = r(6);

        if( roll == 1 ){
            console.log( 'Find item.' );
        }
        else if( roll == 2 ){
            console.log( 'Recover stolen item.' );
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
            console.log( 'Slay a monster.' );
        }
    }
};