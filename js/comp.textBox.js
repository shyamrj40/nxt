nxt.ns('nxt.components');
nxt.components.textBox = Extends(nxt.components.commonElements,function(){
	this.render= function(parentEle,textId){
		this.compId =textId;
		this.parentEle = parentEle || document.getElementsByTagName('body')[0];
		var inputHtml = nxt.getHtml({
			"ele":'input',
			"type":'text',
			"data-item-id":'input-'+textId,
			"class":'nxt-input__'+textId
		});
		var labelHtml = nxt.getHtml({
			"ele":'label',
			"data-item-id":'label-'+textId,
			"class":'nxt-label__'+textId
		});
		labelHtml.innerText=this.label;
		var wrapHtml = nxt.getHtml({
			"ele":'div',
			"data-item-id":'div-'+textId,
			"class":'nxt-div__'+textId
		});
		wrapHtml.appendChild(labelHtml);
		wrapHtml.appendChild(inputHtml);
		if(parentEle){
			parentEle.appendChild(wrapHtml);
		}
	}
});
NCR.regCmp('textBox',nxt.components.textBox);
textbox = new nxt.components.textBox();
textbox.render(document.getElementsByTagName('body')[0],'123');

