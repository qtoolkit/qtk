
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var switchBox = qtk.Switch.create();
	switchBox.value = true;
	switchBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"80px", h:"30px"});
	win.addChild(switchBox);

	var switchBox = qtk.Switch.create();
	switchBox.value = false;
	switchBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"80px", h:"30px"});
	win.addChild(switchBox);
	
	win.open();
}
