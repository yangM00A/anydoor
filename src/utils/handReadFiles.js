const promisify = require('util').promisify
const fs = require('fs')

/**
 * 描述 读取文件内容
 * @date 2021-07-26
 * @param {any} path 文件路径
 * @returns {any} 文件内容
 */
module.exports.readFile = function(path) {
    let filePath = promisify(fs.readFile)
    return filePath(path)
}


/**
 * 描述 查看文件是 是否是文件夹
 * @date 2021-07-26
 * @param {any} path 文件路径
 * @returns {any}
 */
module.exports.isDir = function(path) {
    let fsStat = promisify(fs.stat)
    return fsStat(path)
}


/**
 * 描述 读取目录内容
 * @date 2021-07-26
 * @param {any} dirPath
 * @returns {any}
 */

module.exports.dirList = function(dirPath) {
    let readDir = promisify(fs.readdir)
    return readDir(dirPath)
}