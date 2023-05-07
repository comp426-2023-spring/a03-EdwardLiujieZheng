#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), { alias: { h: 'help', r: 'rules' }, '--': true });

function printHelp() {
  console.log(`Usage: node-rps [SHOT]
  Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

  Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}
  `);
}

function printRules() {
  console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
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
  console.log(JSON.stringify(rps()));
  process.exit(0);
}

const result = rps(args._[0]);
if (!result) {
  console.log("Please try 'rock', 'paper', or 'scissors'.");
  printHelp();
  printRules();
  process.exit(0);
}

console.log(JSON.stringify(result));
process.exit(0);
