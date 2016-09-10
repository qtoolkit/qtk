
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var bar = qtk.Edit.create();
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	win.open();
}
