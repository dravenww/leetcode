#!/usr/bin/env node

const {exec} = require("child_process")
const file = process.argv[2];

console.log("你执行的命令是 jest ./src/" + file + ".test.js");

exec("jest ./src/" + file + ".test.js", (err, stdout, stderr) => {
    if (!err) {
        console.log(stdout)
        console.log(stderr)
    } else {
        console.log(err)
    }
});
