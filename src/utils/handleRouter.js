const fs = require('fs')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const path = require('path')
const conf = require('../config/defaultConfig')




module.exports = async function(resp, filePath, template) {
    try {
        let stats = await stat(filePath)
        resp.statusCode = 200
        if (stats.isFile()) {
            resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
            // 文件,读取文件流
            fs.createReadStream(filePath, { encoding: 'utf8' }).pipe(resp)
        } else {
            resp.setHeader('Content-Type', 'text/html;charset=utf-8');
            // 文件夹
            let files = await readdir(filePath)
            let dir = path.relative(conf.root, filePath)
            let obj = {
                dir: dir ? `/${dir}` : '',
                files,
                title: "hello"
            }
            console.log(obj);
            resp.end(template(obj))
        }
    } catch (error) {
        resp.statusCode = 404;
        resp.end(`${filePath} is not exit`)
    }
}