#!/usr/bin/env node

const {exec} = require("child_process")
const file = process.argv[2];

console.log("你执行的命令是 node ./src/" + file);

exec("node ./src/" + file, (err, stdout, stderr) => {
    if (!err) {
        console.log(stdout)
        console.log(stderr)
    } else {
        console.log(err)
    }
});
