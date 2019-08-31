// RolePlayingGenerator

console.log('');
const args = process.argv.slice(2);
const fs = require('fs');

function r(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Command List
switch (args[0]) {
    case '--help':
    case '--README':
    case '--readme':
        {
            var text = fs.readFileSync('README.md', 'utf8');
            console.log(text);
            break;
        }
    case '--version':
        {
            console.log("RolePlayingGenerator v0.1.1");
            break;
        }
    case 'ability':
        {
            var text = fs.readFileSync( __dirname + '/tables/ability.csv', 'utf8' );
            let rows = text.split("\n");
            console.log(rows[r(rows.length) - 1] + '.');
            break;
        }
    case 'art':
        {
            let val = 10;
            for (var x in args) {
                if (args[x].substring(0, 6) === '--val=') {
                    val = args[x].substring(6);
                }
                else if (args[x].substring(0, 8) === '--value=') {
                    val = args[x].substring(8);
                }
            }

            let path = __dirname + '/tables/art/art_' + val + 'gp.csv';
            if (fs.existsSync(path)) {
                var text = fs.readFileSync(path, 'utf8');
                let rows = text.split("\n");

                console.log(rows[r(rows.length)]);
            }
            else {
                console.log('No art table exists for this value, try 10gp. `rpg art --val=25');
            }

            break;
        }
    case 'building':
        {
            var text = fs.readFileSync( __dirname + '/tables/building.csv', 'utf8' );
            let rows = text.split("\r\n");
            console.log('You find a ' + rows[r(rows.length) - 1] + '.');
            break;
        }
    case 'coins':
        {
            let val = 1;
            for (var x in args) {
                if (args[x].substring(0, 6) === '--lvl=') {
                    val = args[x].substring(6);
                }
            }

            let coins, d10 = r(10);
            if (val < 5) {
                if (d10 < 4) {
                    coins = r(6) + r(6) + r(6) + r(6) + r(6);
                    console.log(coins + 'cp');
                }
                else if (d10 < 7) {
                    coins = r(6) + r(6) + r(6) + r(6);
                    console.log(coins + 'sp');
                }
                else if (d10 < 8) {
                    coins = r(6) + r(6) + r(6);
                    console.log((coins / 2) + 'gp (' + coins + 'ep)');
                }
                else if (d10 < 10) {
                    coins = r(6) + r(6) + r(6);
                    console.log(coins + 'gp');
                }
                else if (d10 == 10) {
                    coins = r(6);
                    console.log(coins + 'pp');
                }
            }
            else if (val < 11) {
                if (d10 < 4) {
                    coins = (r(6) + r(6) + r(6) + r(6)) * 100 + (r(6) * 500);
                    console.log(coins + 'cp');
                }
                else if (d10 < 7) {
                    coins = (r(6) + r(6) + r(6) + r(6) + r(6) + r(6)) * 10 + ((r(6) + r(6)) * 100);
                    console.log(coins + 'sp');
                }
                else if (d10 < 8) {
                    coins = (r(6) + r(6) + r(6) + r(6) + r(6)) * 20;
                    console.log((coins / 2) + 'gp (' + coins + 'ep)');
                }
                else if (d10 < 10) {
                    coins = (r(6) + r(6) + r(6) + r(6)) * 10;
                    console.log(coins + 'gp');
                }
                else if (d10 == 10) {
                    coins = r(6) + r(6) + r(6) + r(6) + r(6);
                    console.log(coins + 'pp');
                }
            }

            break;
        }
    case 'crit':
        {
            // Var Setup
            let found = false;
            let num_or_len = false;

            // Arg Processing
            for (var x in args) {
                if (args[x].substring(0, 7) === '--roll=') {
                    num_or_len = args[x].substring(7) - 1;
                }
                else if (args[x].substring(0, 7) === '--slash' || args[x].substring(0, 10) === '--slashing') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/crit_slashing.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--blunt') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/crit_blunt.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--pierce' || args[x].substring(0, 10) === '--piercing') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/crit_pierce.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--spell') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/crit_spell.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/crit_range.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
            }

            // Error
            if (!found) {
                console.log('Critical type not specified, please add --slash, --blunt, --pirce, --ranged, or --spell to specify.');
            }
            break;
        }
    case 'fumble':
        {
            // Var Setup
            let found = false;
            let num_or_len = false;

            // Arg Processing
            for (var x in args) {
                if (args[x].substring(0, 7) === '--roll=') {
                    num_or_len = args[x].substring(7) - 1;
                }
                else if (args[x].substring(0, 7) === '--melee') {
                    var text = fs.readFileSync('tables/crits/fumble_melee.csv', 'utf8');
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--spell') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/fumble_spell.csv', 'utf8' );
                    let rows = text.split("\n");
                    if (!num_or_len) { num_or_len = r(rows.length) - 1; }

                    console.log(rows[num_or_len]);
                    found = true;
                }
                else if (args[x].substring(0, 7) === '--range' || args[x].substring(0, 8) === '--ranged') {
                    var text = fs.readFileSync( __dirname + '/tables/crits/fumble_range.csv', 'utf8' );
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
            break;
        }
    case 'gem':
    case 'gems':
        {
            let val = 10;
            for (var x in args) {
                if (args[x].substring(0, 6) === '--val=') {
                    val = args[x].substring(6);
                }
                else if (args[x].substring(0, 8) === '--value=') {
                    val = args[x].substring(8);
                }
            }

            let path = __dirname + '/tables/gems/gems_' + val + 'gp.csv';
            if (fs.existsSync(path)) {
                var text = fs.readFileSync(path, 'utf8');
                let rows = text.split("\n");

                console.log(rows[r(rows.length)]);
            }
            else {
                console.log('No gem table exists for this value, try 10gp. `rpg gem --val=10');
            }

            break;
        }
    case 'guild':
        {
            let d = r(36);
            if (d == 1)
                console.log("Miners guild");
            else if (d == 2)
                console.log("Foresters guild");
            else if (d == 3)
                console.log("Farmers guild");
            else if (d == 4)
                console.log("Jewelers guild");
            else
                console.log("Musicians guild");
            break;
        }
    case 'loot':
        {
            for (var x in args) {
                if (args[x].substring(0, 6) === '--lvl=') {
                    val = args[x].substring(6);
                }
            }
            
            break;
        }
    case 'npc':
        {
            console.log("https://www.reddit.com/r/BehindTheTables/wiki/index");
            // Determine Race
            // Determine Gender
            // Determine Class
            // Determine Details
            // Determine Name
            break;
        }
    case 'room':
        {
            // Var Setup
            let w = 5 * r(12);
            let h = 5 * r(12);
            let entrance = 's';

            // Arg Processing
            for (var x in args) {
                if (args[x].substring(0, 4) === '--e=') {
                    entrance = args[x].substring(4);
                }
                else if (args[x].substring(0, 4) === '--w=') {
                    w = args[x].substring(4);
                }
                else if (args[x].substring(0, 4) === '--h=') {
                    h = args[x].substring(4);
                }
            }

            // Display size
            console.log("The room is " + w + "ft by " + h + "ft.");

            // Display Exits
            if (entrance === 'n') {
                console.log("You enter from the north side.");

                if (r(2) === 1) {
                    console.log("There is an exit on the east wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the south wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the west wall.");
                }
            }
            else if (entrance === 'e') {
                console.log("You enter from the east side.");

                if (r(2) === 1) {
                    console.log("There is an exit on the north wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the south wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the west wall.");
                }
            }
            else if (entrance === 's') {
                console.log("You enter from the south side.");

                if (r(2) === 1) {
                    console.log("There is an exit on the north wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the east wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the west wall.");
                }
            }
            else if (entrance === 'w') {
                console.log("You enter from the west side.");

                if (r(2) === 1) {
                    console.log("There is an exit on the north wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the east wall.");
                }
                if (r(2) === 1) {
                    console.log("There is an exit on the south wall.");
                }
            }

            console.log();

            // Display Content
            let content = r(100);
            if (content <= 25) // 25%
            {
                console.log("You encounter some an NPC.");
            }
            else if (content <= 45) // 20%
            {
                console.log("You encounter some sort of skirmish.");
            }
            else if (content <= 60) // 15%
            {
                console.log("You encounter a trap.");
            }
            else if (content <= 70) // 10%
            {
                console.log("You encounter a saved room.");
            }
            else if (content <= 80) // 10%
            {
                console.log("You encounter a merchant.");
            }
            else if (content <= 85) // 5%
            {
                console.log("You encounter an organization.");
            }
            else if (content <= 90) // 5%
            {
                console.log("You encounter an empty room.");
            }
            else if (content <= 95) // 5%
            {
                console.log("You encounter a quest related event.");
            }
            else if (content <= 99) // 4%
            {
                console.log("You encounter some loot.");
            }
            else // 1%
            {
                console.log("You encounter a boss.");
            }

            break;
        }
    case 'shop':
        {
            console.log('https://www.reddit.com/r/BehindTheTables/comments/4psde0/shops/');
            // Determine Stuff
            break;
        }
    case 'r':
    case 'dice':
    case 'roll':
        {
            let max = 20;
            for (var x in args) {
                if (args[x] !== 'r') {
                    let parts = args[x].split('d');
                    //let adds = args[x].split('+');
                    //let subs = args[x].split('-');
                    max = parts[1];

                    for (let c = 0; c < parts[0]; c++) {
                        let roll = r(max);
                        console.log('[' + max + ']: ' + roll);
                    }
                }
            }

            if (args.length == 1) {
                console.log('[' + 20 + ']: ' + r(20));
            }

            break;
        }
    default:
        {
            console.log("Invalid gen command: " + args[0]);
            console.log('Try `rpg --readme` to see some available gen commands in the README.');
            console.log('or `rpg --version` to make sure you are using the expected version.');
        }
}

console.log('');