# RolePlayingGenerator
RPG is used to generate content for table top role playing games.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Setup
Add this following alias to my bash or zsh config.
>alias rpg="node ~/Repos/RolePlayingGenerator/index.js"

# Usage
Once you have the index.js file mapped to rpg, you can run rpg commands like the following.

```bash
// This command will generate a random creature recomendation.
rpg creature
```
>rpg gem

This command will give you a random 10gp gem.

>rpg fumble --melee

This command will generate a random fumble result for a character who rolled a 1 on their attack role.

>rpg room

This command generates a simple room.