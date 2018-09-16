const { spawn } = require('child_process');
const path = require('path');
const ROOT = path.join(__dirname, './');

console.log('Dirname:'+__dirname);
console.log('Root:'+ROOT);
const ls = spawn('webpack-dev-server',['--inline --progress --config build/webpack.dev.conf.js'], {
  cwd:ROOT,
  sheel:true
});
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});
