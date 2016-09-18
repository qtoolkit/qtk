
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.w, h:vp.h});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var switchBox = qtk.Switch.create({value:true});
	switchBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"80px", h:"30px"});
	win.addChild(switchBox);

	var switchBox = qtk.Switch.create({value:false});
	switchBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"80px", h:"30px"});
	win.addChild(switchBox);
	
	win.open();
}
