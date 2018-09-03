const path = require('path')

console.log('__dirname:' + __dirname)
console.log('__filename:' + __filename)
console.log('join:' + path.join(__dirname, '../', 'src'))
console.log('process.env:' + JSON.stringify(process.env.HOST))
