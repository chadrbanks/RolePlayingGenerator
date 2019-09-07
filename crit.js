
const fs = require('fs');

module.exports = {

    crit: function (args) {

        // Var Setup
        let found = false;
        let num_or_len = false;

        // Arg Processing
        for (var x in args) {
            if (args[x].substring(0, 7) === '--roll=') {
                num_or_len = args[x].substring(7) - 1;
            }
            else if (args[x].substring(0, 7) === '--slash' || args[x].substring(0, 10) === '--slashing') {
                var text = fs.readFileSync(__dirname + '/tables/crits/crit_slashing.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 7) === '--blunt') {
                var text = fs.readFileSync(__dirname + '/tables/crits/crit_blunt.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 8) === '--pierce' || args[x].substring(0, 10) === '--piercing') {
                var text = fs.readFileSync(__dirname + '/tables/crits/crit_pierce.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 7) === '--spell') {
                var text = fs.readFileSync(__dirname + '/tables/crits/crit_spell.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                var text = fs.readFileSync(__dirname + '/tables/crits/crit_range.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
        }

        // Error
        if (!found) {
            console.log('Critical type not specified, please add --slash, --blunt, --pierce, --ranged, or --spell to specify.');
        }
    },

    fumble: function (args) {

        // Var Setup
        let found = false;
        let num_or_len = false;

        // Arg Processing
        for (var x in args) {
            if (args[x].substring(0, 7) === '--roll=') {
                num_or_len = Number(args[x].substring(7)) - 1;
            }
            else if (args[x].substring(0, 7) === '--melee') {
                var text = fs.readFileSync(__dirname + '/tables/crits/fumble_melee.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 7) === '--spell') {
                var text = fs.readFileSync(__dirname + '/tables/crits/fumble_spell.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
            else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                var text = fs.readFileSync(__dirname + '/tables/crits/fumble_range.csv', 'utf8');
                let rows = text.split("\n");
                if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                console.log(rows[num_or_len]);
                found = true;
            }
        }

        // Error
        if (!found) {
            console.log('Fumble type not specified, please add --melee, --ranged, or --spell to specify.');
        }
    }
};