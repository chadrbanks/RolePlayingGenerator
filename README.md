# RolePlayingGenerator
RPG is used to generate content for table top role playing games.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Setup
Pull this repo, and then add this following alias to your bash or zsh config.
>alias rpg="node /path/to/repo/RolePlayingGenerator/index.js"

# Usage
Once you have the index.js file mapped to rpg, you can run rpg commands like the following.

```bash
# Either of these commands will print this file to the CLI.
rpg --help
rpg --readme
```

```bash
# This command will generate a random creature recomendation.
rpg creature
```

```bash
# A list of random roll commands, to roll dice in different situations.
# Multiple dice are supported at once, and r is an alias of roll
rpg roll 2d20       # Advantage or disadvantage
rpg roll 1d20 1d8   # Attack and damage rolls
rpg roll 1d100      # Percentile
rpg r 4d6           # New stat roll
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

```bash
# Generate a random gem with a desired value.
rpg gem --val=10
rpg gem --val=50
rpg gem --val=100
rpg gem --val=500
rpg gem --val=1000
```