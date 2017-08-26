// console.log(__filename);
// console.info(__filename);
// console.warn(__filename);
// console.error(__filename);
// console.info(__dirname);
// console.log(__dirname);
// console.warn(__dirname);
// console.error(__dirname);
//setTimeout超时器
// i=0;
// setTimeout(function(){
// 	console.log(++i);
// },1000);
//setInterval定时器
// i=0;
// setInterval(function(){
// 	console.log(++i);
// },1000);
//console计算程序执行时间
// console.time('x');
// for(i=0;i<1000000;i++){

// }
// console.timeEnd('x');
// str=process.version;//node版本
// str=process.argv;//绝对路径
// str=process.pid;
// str=process.title;
// str=process.platform;
// str=process.cwd();
// process.stdout.write('abc');//输出
// console.log(str);
//stdin和stdout实例
process.stdin.on('readable',function(){
	str=process.stdin.read();
	if(str!==null){
		process.stdout.write('data: '+str);
	}
});
