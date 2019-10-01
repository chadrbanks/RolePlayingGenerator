
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let diemax = 20;
        let tot = 0;
        let max = 0;
        let min = 10000000000;

        let show_total = false;
        let show_mod_min = false;
        let show_mod_max = false;

        for (var x in args) {

            if (args[x].substring(0, 7) === '--total') {
                show_total = true;
            }
            else if (args[x].substring(0, 7) === '--tdl') {
                show_mod_max = true;
            }
            else if (args[x].substring(0, 7) === '--tdh') {
                show_mod_min = true;
            }
            else if (args[x] !== 'r') {
                let parts = args[x].split('d');
                //let adds = args[x].split('+');
                //let subs = args[x].split('-');
                diemax = parts[1];

                for (let c = 0; c < parts[0]; c++) {
                    let roll = r(diemax);

                    if (roll < min) {
                        min = roll;
                    }
                    if (roll > max) {
                        max = roll;
                    }

                    tot += roll;
                    console.log('[' + diemax + ']: ' + roll);
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
        if (show_mod_min) {
            console.log('Total Drop Highest: ' + (tot - max));
        }
        if (show_mod_max) {
            console.log('Total Drop Lowest: ' + (tot - min));
        }
    }
};