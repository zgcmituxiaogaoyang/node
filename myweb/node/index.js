http=require('http');
url=require('url');
querystring=require('querystring');
mysql=require('mysql');
cs=function(req,res){
	uri=req.url;
	json=querystring.parse(url.parse(uri).query);
	// console.log(json);
	fname=json.cb;
	id=json.id;
	jsonstr=fname+'({"ok":"1"})';
	//连接  操作数据库
	conn=mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'myweb'
	});
	//操作数据库
	conn.connect();
	conn.query('delete from user where id='+id,function(err,rs){
		if(rs.affectedRows=='1'){
			//给前端jsonp返回成功删除的消息{ok:1}
			res.write(jsonstr);
			//关闭响应
			res.end();
		}
	});
	//关闭数据库
	conn.end();
}
http.createServer(cs).listen(8888);