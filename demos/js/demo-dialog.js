
var TWEEN = qtk.TWEEN;
var Group = qtk.Group;
var Align = qtk.Align;
var AlignV = qtk.AlignV;
var AlignH = qtk.AlignH;
var Events = qtk.Events;
var Dialog = qtk.Dialog;
var Button = qtk.Button;
var Direction = qtk.Direction;
var Orientation = qtk.Orientation;
var RadioButton = qtk.RadioButton;
var WindowNormal = qtk.WindowNormal;
var SimpleLayouter = qtk.SimpleLayouter;
var SimpleLayouterParam= qtk.SimpleLayouterParam;
var LinearLayouter = qtk.LinearLayouter;
var LinearLayouterParam = qtk.LinearLayouterParam;

function createDialog(app, x, y, w, h) {
	var dialog = Dialog.create({app:app, x:x, y:y, w:w, h:h, z:200, scaleX:0, scaleY:0}); 
	
	dialog.moveToCenter();
	dialog.scaleTo(1, 1, 300);
	dialog.childrenLayouter = SimpleLayouter.create();
	
	var button = Button.create({text : "Close"});
	button.layoutParam = SimpleLayouterParam.create({x:"center", y:"middle", w:"200", h:"60"});
	dialog.addChild(button);
	
	button.on(Events.CLICK, function(evt) {
		dialog.scaleTo(0, 0, 300).onComplete(function() {
			dialog.close();
		});
	});
	
	dialog.open();
	dialog.grab();

	return dialog;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.create();
	win.z = 100;

	var button = Button.create({text : "Open Dialog"});
	button.layoutParam = SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	button.on(Events.CLICK, function(evt) {
		createDialog(app, 10, 10, 300, 300);
	});

	win.addChild(button);
	win.open();
}
