const http=require('http');
const url=require('url');
cs=function(req,res){
	uri=req.url;
	if(uri!=='/favicon.ico'){
		path=url.parse(uri).pathname;
		switch(path){
			case "/user/add":
			res.write('<h1>user add</h1>');
			break;
				case "/user/delete":
			res.write('<h1>user delete</h1>');
			break;
				case "/user/update":
			res.write('<h1>user update</h1>');
			break;
				case "/user/select":
			res.write('<h1>user select</h1>');
			break;
			default:res.write('<h1>index page!</h1>');
			break;
		}
	}
	res.end();
}
http.createServer(cs).listen('888');
console.log('Server is ok!');