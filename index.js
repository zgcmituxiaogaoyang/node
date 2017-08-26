//加载HTTP web模块


const http=require('http');
cs=function(req,res){
	res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
	res.write('<h1>hello world!</h1>');
	res.end();
}
http.createServer(cs).listen(666);
console.log('http is ok!');