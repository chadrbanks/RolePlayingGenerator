
const fs = require('fs');

module.exports = {

    exec: function (args) {

        let lvl = 1;
        for (var x in args) {
            if (args[x].substring(0, 6) === '--lvl=') {
                lvl = args[x].substring(6);
            }
        }

        console.log( "Generating coins for a level " + lvl + " enemy...." );

        let coins, d10 = r(10);
        if (lvl < 5) {
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
        else if (lvl < 11) {
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
        else
        {
            console.log( "No coin amounts available yet for level " + lvl + ", please use level 10 or lower." );
        }
    }
};