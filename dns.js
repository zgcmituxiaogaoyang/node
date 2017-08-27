const dns=require('dns');

//通过域名找IP
domain='www.yzmedu.com';
dns.lookup(domain,function(err,ip,family){
	console.log('ip is '+ip);
});

/*
//反向解析存在问题
address='121.199.5.128';
dns.reverse(address,function(err,hostnames){
	console.log('反向解析：'+hostnames);
});
*/