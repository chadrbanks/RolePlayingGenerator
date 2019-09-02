
const fs = require('fs');

module.exports = {

    exec: function (args) {
        
        let lvl = 1;
        for (var x in args) {
            if (args[x].substring(0, 6) === '--lvl=') {
                lvl = args[x].substring(6);
            }
        }

        if( lvl <= 4 )
        {
            let coins = ( (r(6)+r(6)+r(6)+r(6)+r(6)) * 10) + ((r(6)+r(6)+r(6)+r(6)+r(6)+r(6)));
            console.log( 'Level 1 hoard loot consists of ' + coins + 'gp.' );

            let itemRoll = r(100);
            console.log( 'Item roll: [100] ' + itemRoll );

            if( itemRoll < 7 ){
                console.log( 'No items.' );
            }
            else if( itemRoll < 17 ){
                console.log( '2d6 10gp gems (`rpg gem --val=10`).' );
            }
            else if( itemRoll < 27 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
            }
            else if( itemRoll < 37 ){
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
            }
            else if( itemRoll < 45 ){
                console.log( '2d6 10gp gems (`rpg gem --val=10`).' );
                console.log( 'Roll 1d6 times on Magic Item Table A.' );
            }
            else if( itemRoll < 53 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
                console.log( 'Roll 1d6 times on Magic Item Table A.' );
            }
            else if( itemRoll < 61 ){
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
                console.log( 'Roll 1d6 times on Magic Item Table A.' );
            }
            else if( itemRoll < 66 ){
                console.log( '2d6 10gp gems (`rpg gem --val=10`).' );
                console.log( 'Roll 1d4 times on Magic Item Table B.' );
            }
            else if( itemRoll < 71 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
                console.log( 'Roll 1d4 times on Magic Item Table B.' );
            }
            else if( itemRoll < 76 ){
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
                console.log( 'Roll 1d4 times on Magic Item Table B.' );
            }
            else if( itemRoll < 79 ){
                console.log( '2d6 10gp gems (`rpg gem --val=10`).' );
                console.log( 'Roll 1d4 times on Magic Item Table C.' );
            }
            else if( itemRoll < 81 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
                console.log( 'Roll 1d4 times on Magic Item Table C.' );
            }
            else if( itemRoll < 86 ){
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
                console.log( 'Roll 1d4 times on Magic Item Table C.' );
            }
            else if( itemRoll < 93 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
                console.log( 'Roll 1d4 times on Magic Item Table F.' );
            }
            else if( itemRoll < 98 ){
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
                console.log( 'Roll 1d4 times on Magic Item Table F.' );
            }
            else if( itemRoll < 100 ){
                console.log( '2d4 25gp art objects (`rpg art --val=25`).' );
                console.log( 'Roll 1 time on Magic Item Table G.' );
            }
            else{
                console.log( '2d6 50gp gems (`rpg gem --val=50`).' );
                console.log( 'Roll 1 time on Magic Item Table G.' );
            }
        }
        else{
            console.log( 'No loot tables above level 4 are ready yet, sorry.' );
        }
    }
};