
function createDialog(app, x, y, w, h) {
	var dialog = qtk.Dialog.create();
	dialog.init(app, x, y, w, h, true);
	dialog.z = 200;
	//dialog.scaleX = 0;
	//dialog.scaleY = 0;
	//dialog.scaleTo(1, 1, 1000);
	dialog.moveTo(100, 100, 1000);
	dialog.opacity = 0.5;
	dialog.childrenLayouter = qtk.SimpleLayouter.create();
	dialog.grab();

	var button = qtk.Button.create();
	button.name = "Close";
	button.text = "Close";
	button.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "200", "60");
	dialog.addChild(button);
	button.on(qtk.Events.CLICK, function(evt) {
		dialog.scaleTo(0, 0, 1000).onComplete(function() {
			dialog.close();
		});
	});
	return dialog;
}

function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;

	var button = qtk.Button.create();
	button.name = "button1";
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "10px", "50%", "60px");
	win.addChild(button);
	button.on(qtk.Events.CLICK, function(evt) {
		createDialog(app, 10, 10, 300, 300);
	});
	
	var button = qtk.Button.create();
	button.name = "button1";
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "400px", "50%", "60px");
	win.addChild(button);
}
