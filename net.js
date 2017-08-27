const net=require('net');
chat=net.createServer();
chat.on('connection',function(c){
	c.write('hello world');
	c.on('data',function(data){
		console.log(data.toString());
	});
});

chat.listen(9000);
console.log('the telnet server is ok');