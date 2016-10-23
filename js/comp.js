nxt.ns('nxt.components');
nxt.components.commonElements=Extends(nxt.events.eventRegistry,function(){
	this.label='shyam';
	this.getEle = function(){
		return this.parentEle.querySelectorAll('[data-item-id=div-'+this.compId+']');
	}

});


