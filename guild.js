
const fs = require('fs');

module.exports = {

    exec: function (args) {

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
    }
};