const http = require('http')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const conf = require('./src/config/defaultConfig')
const { readFile } = require('./src/utils/utils')

const server = http.createServer((req, resp) => {
    const url = req.url;
    
    readFile()
    
    const realPath = path.join(conf.root, url)
    fs.stat(realPath, (err, stats) => {

    })


    resp.statusCode = 200
    resp.setHeader('Content-Type', 'text/plain')
    resp.end(realPath)
})

server.listen(conf.port, conf.host, () => {
    const addr = `http://${conf.host}:${conf.port}`
    console.log(`启动成功 访问地址 ${chalk.green(addr)}`);
})