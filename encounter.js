

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

        
        console.log( "Generating random encounter on " + options.where + "..." );

    }
};