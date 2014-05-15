#!/usr/bin/env node

var c2j = require('../index.js');
var fs = require('fs');

var text = fs.readFileSync(process.argv[2], 'utf8');
console.log(c2j(text));
