nxt.ns('nxt.events');
nxt.events.eventRegistry = function(){
	var eventRegistry={};
	this.addEvents = function(eventId,func){
		if(!eventRegistry[this.compId+eventId]<0){
			eventRegistry[this.compId+eventId] = fucn;
		}
	}
	this.on=function(eventId){
		return eventRegistry[this.compId+eventId];
	}
}
nxt.ns('nxt.components');
nxt.components.registry = function(){
	var registry={};
	return({
		regCmp :function(compId,func){
			registry[compId] =func;
		},
		getCmp:function(compId){
			return registry[compId];
		}
	});
}
NCR = new nxt.components.registry();
