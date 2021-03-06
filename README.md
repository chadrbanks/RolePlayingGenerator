# RolePlayingGenerator
RolePlayingGenerator can be used to generate content for table top role playing games.
Content such as Creatures, Critcal Fails/Hits, Loot, NPCs, Quests, Rooms, Skirmishes, and Traps.

![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)

# Setup
Pull this repo, run `npm install -g` inside the root directory of the project, and you should be good to go.

Alternatively, you may be able to add this following alias to your bash or zsh config.
>alias rpg="node /path/to/repo/RolePlayingGenerator/index.js"

# Usage
Once you have completed the setup above, you should be able run rpg commands like the following.

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
rpg creature --clcreature --challenge=5 --count=5        # 5 random creatures with a challenge rating of 5.
rpg creature --min=20 --max=25              # A random creature with a CR between 20 and 25.
rpg creature --count=10 --min=10 --max=12   # Generate random 10 creatures with CRs between 10 and 12.
# Example outputs:
#                   Chimera Large   Monstrosity             CE      6       2300    mm 39.
#                   Green Abishai   Medium  Fiend   devil   LE      15      13000   mtf 162.
#                   Amnizu  Medium  Fiend   devil   LE      18      20000   mtf 164.
#                   Gazer   Tiny    Aberration              NE      1/2     100     vgm 126.
#                   Axe Beak        Large   Beast           Unaligned       1/4     50      mm 317.
```

```bash
# Encounter Command
# Generate random encounter recomendations.
rpg encounter
rpg encounter --where=road
rpg encounter --where=forest
```

```bash
# Roll Command
# A list of random roll commands, to roll dice in different situations.
# Multiple dice are supported at once
# r and dice are an alias of roll
rpg roll 1d20 1d8       # Attack and damage roll example
rpg r 1d100             # Percentile
rpg dice 2d20           # Advantage or disadvantage
rpg r 2d20 --tdl        # Advantage roll that will drop the lowest
rpg roll 2d20 --tdh     # Disadvantage roll that will drop the highest
rpg dice 10d6 --total   # Roll 10d6 and show a total
rpg roll 4d6 --tdl      # New stat roll dropping the lowest
```

```bash
# Coins Command
# Generate coinage for an enemy based on character level.
rpg coins
rpg coins --lvl=10
# Example outputs:
#                   14gp
#                   760sp
#                   160gp (320ep) # Because who uses ep?
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
# Example output:
#                   The room is 35ft by 5ft.
#                   You enter from the south side.
#                   There is an exit on the east wall.
#                   There is an exit on the west wall.
#                   
#                   You encounter some sort of skirmish.
#                   You can try `rpg skirmish` for ideas.
```

```bash
# Crit Command
# Generate a random crit result for a character who rolled a 20 on their spell attack role.
# This command allows an optional roll argument before the type argument to force result.
# This command requires a --type argument.
# Crit supports blunt, slash, pierce, spell, and range types.
rpg crit --roll=47 --spell
# Example output:
#                   Backpack is hit, 1d4 items are damaged.
#                   Broken nose, stunned for 1 round.
#                   2x damage.
#                   2x damage and knocked back 5ft.
#                   Backpack is slashed open, and drops 1 item at the start of each round.
#                   Spell effectiveness is tripled and the target is knocked prone.
```

```bash
# Fumble Command
# Generate a random fumble result for a character who rolled a 1 on their melee attack role.
# This command allows an optional roll argument before the type argument to force result.
# This command requires a --type argument.
# Fumble supports melee, spell, and range types.
rpg fumble --roll=47 --melee
# Example output:
#                   Trip, save DEX DC12 or fall prone.
#                   Twisted ankle, save CON DC20 or 1/2 movement until long rest.
#                   Single eye obstruction, -2 to hit until cleaned.
#                   Standard miss.
#                   Slip Up. You lose your footing. Roll Dexterity / Acrobatics (DC15) or fall prone.
#                   Spell is delayed 1d4 rounds – after which effect happens.
#                   Caster is blinded for 1d4 rounds.
#                   A random party member is target of spell instead.
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
# Example output:
#                   Lapis Lazuli
#                   Emerald
#                   Malachite
```

```bash
# Trap Command
# Generates a random trap
rpg trap             # Random trap, more than likely OP.
rpg trap --top=50    # Return a trap in the top 50 results
rpg trap --tier=1    # Return a trap in tier one (apprentance)
rpg trap --tier=2    # Return a trap in tier two (heroic)
rpg trap --tier=3    # Return a trap in tier three (paragon)
rpg trap --tier=4    # Return a trap in tier four (legendary)
```
