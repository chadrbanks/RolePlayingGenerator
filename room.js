
const fs = require('fs');

module.exports = {

    exec: function (args) {

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
            console.log("You encounter an NPC.");
            console.log('You can try `rpg npc` for ideas.');
        }
        else if (content <= 45) // 20%
        {
            console.log("You encounter some sort of skirmish.");
            console.log('You can try `rpg skirmish` for ideas.');
        }
        else if (content <= 60) // 15%
        {
            console.log("You encounter a trap.");
        }
        else if (content <= 70) // 10%
        {
            console.log("This is a saved room.");
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
            console.log("The room is empty.");
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
    }
};