const events=require('events');
evt=new events.EventEmitter();
function eventHandler(){
	console.log('111');
	console.log('222');
}
evt.on('eventName',eventHandler);
evt.emit('eventName');