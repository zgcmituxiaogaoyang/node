//加载node模块
const fs=require('fs');
/*
//同步读取文件内容
file='test.txt';
data=fs.readFileSync(file);
str=data.toString();
console.log(str);
*/
/*
//异步读取文件内容
file='test.txt';
fs.readFile(file,function(err,data){
	str=data.toString();
	console.log(str);
});
console.log('file is read ok!');
*/
/*
//创建文件并写入内容
file="test2.txt";
str='111\n222\n333\n444';
fs.writeFile(file,str);
console.log('file write end!');
*/
/*
//删除文件
file="test2.txt";
*/
/*
//创建和删除目录
dir='myweb';
// fs.mkdir(dir);
fs.rmdir(dir);
*/

