<?php

$command = false;

if( isset( $_POST['cmd'] ) )
{
    $command = '/usr/local/bin/node /Users/banks/Repos/RolePlayingGenerator/index.js ' . $_POST['cmd'];
}

?><!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>Role Playing Generator</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        <link rel="stylesheet" href="css/styles.css?v=1.0">
    </head>

    <body>
        <h1>Role Playing Generator</h1>

        <pre><?php if( $command ){ echo shell_exec( $command ); } ?></pre>

        <form method="post" >
            <input type="submit" value="Gen Art" >
            <input type="hidden" name="cmd" value="art --val=25" >
        </form>

        <br>

        <form method="post" >
            <input type="submit" value="Gen Creature" >
            <input type="hidden" name="cmd" value="creature" >
        </form>

        <br>

        <form method="post" >
            <input type="submit" value="Gen Skirmish" >
            <input type="hidden" name="cmd" value="skirmish" >
        </form>

        <br>

        <form method="post" >
            <input type="submit" value="Gen Trap" >
            <input type="hidden" name="cmd" value="trap" >
        </form>

        <br>

        <form method="post" >
            <input type="submit" value="Critical Blunt" >
            <input type="hidden" name="cmd" value="crit --blunt" >
        </form>
        <form method="post" >
            <input type="submit" value="Critical Pierce" >
            <input type="hidden" name="cmd" value="crit --pierce" >
        </form>
        <form method="post" >
            <input type="submit" value="Critical Slash" >
            <input type="hidden" name="cmd" value="crit --slash" >
        </form>
        <form method="post" >
            <input type="submit" value="Critical Ranged" >
            <input type="hidden" name="cmd" value="crit --range" >
        </form>

        <form method="post" >
            <input type="submit" value="Critical Spell " >
            <input type="hidden" name="cmd" value="crit --spell" >
        </form>

        <br>

        <form method="post" >
            <input type="submit" value="Fumble Melee " >
            <input type="hidden" name="cmd" value="fumble --melee" >
        </form>

        <form method="post" >
            <input type="submit" value="Fumble Ranged " >
            <input type="hidden" name="cmd" value="fumble --range" >
        </form>

        <form method="post" >
            <input type="submit" value="Fumble Spell " >
            <input type="hidden" name="cmd" value="fumble --spell" >
        </form>

        <br>

        <form method="post" >
            <input type="text" name="cmd" autofocus >
            <input type="submit" value="Execute" >
        </form>

        <?php
        /*
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        $commands = 
        [
            //'whoami',
            //'pwd',
            //'history 2>&1',
            //'ls -al',
            //'bash /Users/banks/test.sh',
            //'bash /Users/banks/Repos/RolePlayingGenerator/bridge.sh',
            '/usr/local/bin/node /Users/banks/Repos/RolePlayingGenerator/index.js',
            '/usr/local/bin/node /Users/banks/Repos/RolePlayingGenerator/index.js --version',
            '/usr/local/bin/node /Users/banks/Repos/RolePlayingGenerator/index.js crit --blunt',
        ];

        foreach( $commands as $command )
        {
            ?><pre><?php echo "$command: "; echo shell_exec( $command ); ?></pre><?php
        }
        */
        ?>
    </body>
</html>