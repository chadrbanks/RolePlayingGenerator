# RolePlayingGenerator
RPG is used to generate content for table top role playing games.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)

# Setup
Pull this repo, and then add this following alias to your bash or zsh config.
>alias rpg="node /path/to/repo/RolePlayingGenerator/index.js"

# Usage
Once you have the index.js file mapped to rpg, you can run rpg commands like the following.

```bash
# Help
# Either of these commands will print this file to the CLI.
rpg --help
rpg --readme
```

```bash
# Creature Command
# Generate random creature recomendations.
rpg creature                                # A random creature.
rpg creature --count=5                      # 5 random creatures.
rpg creature --challenge=4                  # A random creature with a challenge rating of 4.
rpg creature --challenge=5 --count=5        # 5 random creatures with a challenge rating of 5.
rpg creature --min=20 --max=25              # A random creature with a challenge rating between 20 and 25.
rpg creature --count=10 --min=10 --max=12   # Generate 10 random creatures with a challenge rating between 10 and 12.
```

```bash
# Roll Command
# A list of random roll commands, to roll dice in different situations.
# Multiple dice are supported at once
# r and dice are an alias of roll
rpg roll 2d20       # Advantage or disadvantage
rpg roll 1d20 1d8   # Attack and damage rolls
rpg roll 1d100      # Percentile
rpg r 4d6           # New stat roll
```

```bash
# Coins Command
# Generate coinage for an enemy based on character level.
rpg coins
rpg coins --lvl=10
```

```bash
# Skirmish Command
# Generate two different sets of creatures to battle.
rpg skirmish
# Example outputs:
#                   3d4 Grey Oozes vs 2d4 Assorted Party Members.
#                   3d4 Purple Worms vs 1d6 Bats.
#                   2d6 Swarms of Bats vs 1d6 Driders.
#                   1d4 Silver Dragons (any ages) vs 1d6 Brass Dragons (any ages).
#                   3d4 Assorted Party Members vs 3d6 Gold Dragons (any ages).
#                   1d4 Death Knights vs 3d6 Gnolls.
```

```bash
# Room Command
# Generate a random room.
rpg room
```

```bash
# Crit Command
# Generate a random crit result for a character who rolled a 20 on their spell attack role.
# This command requires a --type argument.
# Crit supports blunt, slash, pierce, spell, and range types.
rpg crit --spell
```

```bash
# Fumble Command
# Generate a random fumble result for a character who rolled a 1 on their melee attack role.
# This command requires a --type argument.
# Fumble supports melee, spell, and range types.
rpg fumble --melee
```

```bash
# Gem Command
# Generate a random gem with a desired value.
rpg gem             # 10gp is default.
rpg gem --val=10    # Same as default.
rpg gem --val=50
rpg gem --val=100
rpg gem --val=500
rpg gem --val=1000
```