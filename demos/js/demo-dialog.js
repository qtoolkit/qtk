
function createDialog(app, x, y, w, h) {
	var dialog = qtk.Dialog.create();
	dialog.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	dialog.set({z:200, scaleX:0, scaleY:0}); 
	dialog.scaleTo(1, 1, 300);
	dialog.childrenLayouter = qtk.SimpleLayouter.create();
	
	var button = qtk.Button.create();
	button.text = "Close";
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"200", h:"60"});
	dialog.addChild(button);
	
	button.on(qtk.Events.CLICK, function(evt) {
		dialog.scaleTo(0, 0, 300).onComplete(function() {
			dialog.close();
		});
	});
	
	dialog.grab();
	dialog.open();

	return dialog;
}

function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;

	var button = qtk.Button.create();
	button.text = "Open Dialog";
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	button.on(qtk.Events.CLICK, function(evt) {
		createDialog(app, 10, 10, 300, 300);
	});
	win.addChild(button);
	win.open();
}
