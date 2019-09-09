
//const fs = require('fs');

module.exports = {

    exec: function (args) {

        console.log( 'Booting Seefouria....' );
        
        // Arg Processing
        for (var x in args) {
            if (args[x].substring(0, 4) === 'town') {
                console.log( 'They hit the town do they?' );
            }
        }
    }
};