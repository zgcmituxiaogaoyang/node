http=require('http');
url=require('url');
querystring=require('querystring');
cs=function(req,res){
	uri=req.url;
	if(uri!=='/favicon.ico'){
		str=url.parse(uri).query;
		json=querystring.parse(str);
		console.log(json);
		res.write('this is a web server!');
		res.end();
	}	
}

http.createServer(cs).listen(8000);
console.log('The web service is ok!');