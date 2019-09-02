
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        for (var x in args) {
            if (args[x].substring(0, 6) === '--lvl=') {
                val = args[x].substring(6);
            }
        }
    }
};