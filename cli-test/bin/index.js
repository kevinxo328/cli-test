#!/usr/bin/env node

const lib = require("cli-test-lib");
const process = require("process");

const argv = process.argv;
const command = argv[2];
const options = argv.slice(3);
let [option, param] = options;

if (option) {
  option = option.replace("--", "");
}

if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
  } else {
    console.log("請輸入有效參數");
  }
} else {
  console.log("請輸入參數");
}
