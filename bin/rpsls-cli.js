#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), { alias: { h: 'help', r: 'rules' }, '--': true });

function printHelp() {
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
}

function printRules() {
  console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

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
}

if (args.h) {
  printHelp();
  process.exit(0);
}

if (args.r) {
  printRules();
  process.exit(0);
}

if (args._.length === 0) {
  console.log(JSON.stringify(rpsls()));
  process.exit(0);
}

const result = rpsls(args._[0]);
if (!result) {
  printHelp();
  printRules();
  process.exit(0);
}

console.log(JSON.stringify(result));
process.exit(0);
