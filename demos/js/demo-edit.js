
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var edit = qtk.Edit.create();
	edit.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	edit.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(edit);

	edit.on(Events.CHANGING, function(evt) {
		console.log("Changing:" + evt.value);
	});
	
	edit.on(Events.CHANGE, function(evt) {
		console.log("Change:" + evt.value);
	});
	
	edit.on(Events.FOCUS, function(evt) {
		console.log("Focus:" + this.value);
	});
	
	edit.on(Events.BLUR, function(evt) {
		console.log("Blur:" + this.value);
	});

	win.open();
}
