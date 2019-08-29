# RolePlayingGenerator
RPG is used to generate content for table top role playing games.

# Usage
I add this alias to my bash or zsh config.
alias rpg="node ~/Repos/RolePlayingGenerator/index.js"

Once you have the index.js file mapped to rpg, you can run commands like this.

>rpg gem
This command will give you a random 10gp gem.

>rpg fumble --melee
This command will generate a random fumble result for a character who rolled a 1 on their attack role.

>rpg room
This command generates a simple room.