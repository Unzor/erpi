#! /usr/bin/env node
var randomized = Math.random().toString().split('.').pop();
var { exec } = require('child_process');
exec(`curl https://erpi.herokuapp.com/packages/${process.argv[2]} --output  ${process.argv[2]}.clj`, function(err, out){
if (err) throw err;
})