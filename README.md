# RolePlayingGenerator
RPG is used to generate content for table top role playing games.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Setup
Add this following alias to my bash or zsh config.
>alias rpg="node ./path/to/repo/RolePlayingGenerator/index.js"

# Usage
Once you have the index.js file mapped to rpg, you can run rpg commands like the following.

```bash
# This command will generate a random creature recomendation.
rpg creature
```

```bash
# A list of random roll commands, to roll dice in different situations.
rpg roll 2d20
rpg roll 1d20 4d6
rpg roll 1d100
```

```bash
# This command will give you a random 10gp gem.
rpg gem
```

```bash
# This command will generate a random crit result for a character who rolled a 20 on their spell attack role.
# This command requires a --type argument.
# Crit supports blunt, slash, pierce, spell, and range types.
rpg crit --spell
```

```bash
# This command will generate a random fumble result for a character who rolled a 1 on their melee attack role.
# This command requires a --type argument.
# Fumble supports melee, spell, and range types.
rpg fumble --melee
```