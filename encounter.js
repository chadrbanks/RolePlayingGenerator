
const fs = require('fs');

module.exports = {

    gen: function (args) {

        // Arg Processing
        let options = [];
        for (var x in args) {
            let t = args[x].split('=');

            if( t[0] !== undefined && t[1] !== undefined ){
                options[ t[0].replace('--', '') ] = t[1];
            }
        }

        if( options.where === undefined )
        {
            options.where = 'road';
        }

        let path;

        if(options.where === 'gosuroad')
        {
            console.log('People pass by.');
        }
        else if(options.where === 'gosuforest')
        {
            console.log('Wild animal!');
        }
        else if(options.where === 'orcroad')
        {
            path = __dirname + '/tables/encounters/orc_road.csv';
        }
        else if(options.where === 'orcforest')
        {
            path = __dirname + '/tables/encounters/orc_forest.csv';
        }
        else if(options.where === 'orccamp')
        {
            path = __dirname + '/tables/encounters/orc_forest.csv';
        }

        if (fs.existsSync(path)) {
            var text = fs.readFileSync(path, 'utf8');
            let rows = text.split("\n");
            let roll = r(rows.length) - 1;
            console.log( `[${rows.length}] ${roll}` );
            console.log(rows[ roll ]);
        }
        else {
            console.log("Error finding table for this area. Did you set a --where=?");
        }
    }
};