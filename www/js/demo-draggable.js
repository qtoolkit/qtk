
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;

	var button = qtk.Button.create();
	button.name = "button1";
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "10px", "50%", "60px");
	button.useBehavior("draggable");
	win.addChild(button);
	
	var button = qtk.Button.create();
	button.name = "button2";
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "400px", "50%", "60px");
	win.addChild(button);
}
