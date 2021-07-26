const http = require('http')
const chalk = require('chalk')
const path = require('path')
const handlebars = require('handlebars')
const conf = require('./src/config/defaultConfig')
const router = require('./src/utils/handleRouter')
const fs = require('fs')

const sourceHtml = fs.readFileSync(path.join(conf.root,'./src/template/dir.tpl'))
console.log(sourceHtml.toString());
const template = handlebars.compile(sourceHtml.toString())

const server = http.createServer((req, resp) => {
    const filePath = path.join(conf.root, req.url);
    router(resp,filePath,template)

})

server.listen(conf.port, conf.host, () => {
    const addr = `http://${conf.host}:${conf.port}`
    console.log(`启动成功 访问地址 ${chalk.green(addr)}`);
})