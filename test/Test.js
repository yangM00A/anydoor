const { readFile, isDir, dirList } = require('../src/utils/handReadFiles')

const { getFileArrByPath } = require("../src/utils/index")

/**
 * 测试
 */


/**
 * 描述 读取文件内容
 * @date 2021-07-26
 * @returns {any}
 */
async function test() {
    let text = await readFile('../src/utils/utils.js')
    console.log(text.toString());
}


/**
 * 描述 查看文件类型
 * @date 2021-07-26
 * @returns {any}
 */
async function test2() {
    let stat = await isDir('../src/utils/utils.js')
    console.log(stat.isDirectory());
    console.log(stat.isFile());
}

async function test3() {
    let dirArr = await dirList('../src')
    console.log(dirArr);
}

function test4() {
    let dirArr = getFileArrByPath('../src')
    console.log(dirArr);
}

test3()