function show(){
	this.name="user";
	this.say=function(){
		console.log("my name is "+this.name);
	}
}
module.exports=new show();
