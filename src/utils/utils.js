const promisify = require('util').promisify
const fs = require('fs')

export function syncFun(fn) {
    return promisify(fn)
}


export  function readFile(){
     syncFun(fs.readFile)
}