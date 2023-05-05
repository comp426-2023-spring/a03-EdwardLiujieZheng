#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js"

// get command line arguments

const args = minimist(process.argv.slice(2), {alias: { h: 'help', r: 'rules' },'--': true});

// if -h, print help message

if (args.h){
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}
    `);
    process.exit(0);
}

// if -r, print rules

if (args.r) {
    console.log(`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors
    `);
    process.exit(0);
}

// if there is no argument, call the rpsls method with no argument and print that

if(args._.length == 0) {
  console.log(rpsls());
  process.exit(0);
}

// else, get the result
// if the result is undefined (argument is not valid), then print the rules and help messages

let result = rpsls(args._[0]);
if(result == undefined) {
  console.log("Please try 'rock', 'paper', 'scissors', 'lizard', or 'spock'.");
  console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}
    `);
    console.log(`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors
    `);
    process.exit(0);
} else {
  console.log(JSON.stringify(result));
  process.exit(0);
}