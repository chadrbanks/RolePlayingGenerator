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
            //var text = fs.readFileSync('README.md', 'utf8');
            //console.log(text);
            console.log('Go to this link below for detailed examples on how to use these commands.');
            console.log('https://github.com/chadrbanks/RolePlayingGenerator');
            console.log('');
            console.log('You can also try these commands:');
            console.log('  rpg art');
            console.log('  rpg boss');
            console.log('  rpg building');
            console.log('  rpg coins');
            console.log('  rpg creature');
            console.log('  rpg crit');
            console.log('  rpg fumble');
            console.log('  rpg gems');
            console.log('  rpg loot');
            console.log('  rpg roll');
            console.log('  rpg room');
            console.log('  rpg skirmish');
            console.log('  rpg trap');
            break;
        }
    case '--version':
        {
            console.log("RolePlayingGenerator v0.1.3");
            break;
        }
    case 'ability':
        {
            var text = fs.readFileSync(__dirname + '/tables/abilities.csv', 'utf8');
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
    case 'boss':
        {
            console.log('Generating boss....');
            const creature = require('./creature');
            creature.exec(['--min=25', '--max=50']);
            break;
        }
    case 'building':
        {
            // This is the odd one.
            var text = fs.readFileSync(__dirname + '/tables/buildings.csv', 'utf8');
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
    case 'shop':
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
    case 'c4':
    case 'seef':
    case 'seefouria':
        {
            const seefouria = require('./seefouria');
            seefouria.exec(args);
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