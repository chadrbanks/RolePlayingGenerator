
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let roll = r(8);

        if( roll == 1 ){
            console.log( 'Gang.' );
        }
        else if( roll == 2 ){
            console.log( 'Guild.' );
        }
        else if( roll == 3 ){
            console.log( 'Magical society.' );
        }
        else if( roll == 4 ){
            console.log( 'Mercinaries.' );
        }
        else if( roll == 5 ){
            console.log( 'Nobles.' );
        }
        else if( roll == 6 ){
            console.log( 'Secret order.' );
        }
        else if( roll == 7 ){
            console.log( 'Religous.' );
        }
        else if( roll == 8 ){
            console.log( 'College.' );
        }
    }
};