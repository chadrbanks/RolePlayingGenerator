// RolePlayingGenerator

global.r = function (max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1
};

console.log('');

const args = process.argv.slice(2);
const fs = require('fs');

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
            console.log("RolePlayingGenerator v0.1.2");
            break;
        }
    case 'ability':
        {
            var text = fs.readFileSync(__dirname + '/tables/ability.csv', 'utf8');
            let rows = text.split("\n");
            console.log(rows[r(rows.length) - 1] + '.');
            break;
        }
    case 'art':
        {
            const art = require('./art');
            art.exec(args);
            break;
        }
    case 'building':
        {
            var text = fs.readFileSync(__dirname + '/tables/building.csv', 'utf8');
            let rows = text.split("\r\n");
            console.log('You find a ' + rows[r(rows.length) - 1] + '.');
            break;
        }
    case 'coins':
        {
            const coins = require('./coins');
            coins.exec(args);
            break;
        }
    case 'creature':
        {
            const creature = require('./creature');
            creature.exec(args);
            break;
        }
    case 'crit':
        {
            const crit = require('./crit');
            crit.crit(args);
            break;
        }
    case 'fumble':
        {
            const crit = require('./crit');
            crit.fumble(args);
            break;
        }
    case 'gem':
    case 'gems':
        {
            const gems = require('./gems');
            gems.exec(args);
            break;
        }
    case 'guild':
        {
            const guild = require('./guild');
            guild.exec(args);
            break;
        }
    case 'loot':
        {
            const loot = require('./loot');
            loot.exec(args);
            break;
        }
    case 'merchant':
        {
            const merchant = require('./merchant');
            merchant.exec(args);
            break;
        }
    case 'npc':
        {
            const npc = require('./npc');
            npc.exec(args);
            break;
        }
    case 'org':
        {
            const org = require('./org');
            org.exec(args);
            break;
        }
    case 'quest':
        {
            const quest = require('./quest');
            quest.exec(args);
            break;
        }
    case 'room':
        {
            const room = require('./room');
            room.exec(args);
            break;
        }
    case 'shop':
        {
            console.log('https://www.reddit.com/r/BehindTheTables/comments/4psde0/shops/');
            // Determine Stuff
            break;
        }
    case 'skirmish':
        {
            const skirmish = require('./skirmish');
            skirmish.exec(args);
            break;
        }
    case 'trap':
        {
            const trap = require('./trap');
            trap.exec(args);
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