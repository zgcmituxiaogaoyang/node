const util=require('util');
// arr=[1,3,5];
// console.log(util.isArray(arr));//判断是否是数组类型
// obj={'name':'user1','age':'20'};
// console.log(typeof(util.inspect(obj)));//json对象转成字符串输出
// console.log(util.inspect(obj,true));
// console.log(util.isBoolean(false));//判断是否是布尔类型
// console.log(util.isObject(obj));//判断是否是对象
// show=function(){
// 	console.log('123');
// }
// console.log(util.isFunction(show));//判断是否是函数
console.log(util.isRegExp(/^\d{11}$/ig));//判断是否是正则表达式
