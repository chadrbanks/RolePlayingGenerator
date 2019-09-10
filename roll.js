
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let max = 20;
        let tot = 0;
        let min = 10000000000;

        let show_total = false;
        let show_mod_total = false;

        for (var x in args) {

            if (args[x].substring(0, 7) === '--total') {
                show_total = true;
            }
            else if (args[x].substring(0, 7) === '--tdl') {
                show_mod_total = true;
            }
            else if (args[x] !== 'r') {
                let parts = args[x].split('d');
                //let adds = args[x].split('+');
                //let subs = args[x].split('-');
                max = parts[1];

                for (let c = 0; c < parts[0]; c++) {
                    let roll = r(max);

                    if (roll < min) {
                        min = roll;
                    }

                    tot += roll;
                    console.log('[' + max + ']: ' + roll);
                }
            }
        }

        if (args.length == 1) {
            let roll = r(20);
            tot += roll;

            console.log('[' + 20 + ']: ' + roll);
        }

        if (show_total) {
            console.log('Total: ' + tot);
        }
        if (show_mod_total) {
            console.log('Total Drop Lowest: ' + (tot - min));
        }
    }
};