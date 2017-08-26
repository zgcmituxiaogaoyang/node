// //加载fs file模块 //同步操作文件（阻塞I/O）
// const fs=require('fs');
// file='test.txt';
// //开始读取文件
// console.log('file start!');
// //正在读取文件
// data=fs.readFileSync(file);
// console.log(data.toString());
// //读取文件结束
// console.log('file end!');

//加载fs file模块 //异步操作文件（非阻塞I/O）
const fs=require('fs');
file='test.txt';
//开始读取文件
console.log('file start!');
//正在读取文件
//自带事件（当文件内容读取完毕时）
fs.readFile(file,function(err,data){
	console.log(data.toString());
});
//读取文件结束
console.log('file end!');