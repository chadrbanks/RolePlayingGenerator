
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        console.log( 'Generating boss....' );
        const creature = require('./creature');
        creature.exec( ['--min=25','--max=50'] );
    }
};