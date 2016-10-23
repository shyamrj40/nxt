frameWk = function(){
		this.getHtml=function(config){
			try{
				if(config.ele){
					var dom =document.createElement(config.ele);
					for(var key in config){
						if(key=='ele')
							continue;
						dom.setAttribute(key,config[key]);
					}
				}
			}catch(err){
				console.log(err.message);
			}
			return dom;
		}
};
Extends = function(class1,class2){
	class2.prototype = new class1();
	class2.prototype.constructor = class2;
	return class2;
}
frameWk.prototype.ns=function(config){
	w = window;
	var ns = config.split('.');
	for(var i=0 ;i<ns.length ; i++){
		try{
			w=w[ns[i]]=eval(ns[i])||{};
		}catch(err){
			w=w[ns[i]]={};
		}
		
	}
}

frameWk.prototype.Form=function(config){

};


nxt = new frameWk();





