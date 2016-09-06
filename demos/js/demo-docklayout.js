
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});

	win.childrenLayouter = qtk.DockLayouter.create();

	var topButton = qtk.Button.create().set({text:"Top", h:50});
	topButton.layoutParam = qtk.DockLayouterParam.create(qtk.Direction.TOP);
	win.addChild(topButton);
	
	var bottomButton = qtk.Button.create().set({text:"Bottom", h:50});
	bottomButton.layoutParam = qtk.DockLayouterParam.create(qtk.Direction.BOTTOM);
	win.addChild(bottomButton);


	var leftButton = qtk.Button.create().set({text:"Left", w:150});
	leftButton.layoutParam = qtk.DockLayouterParam.create(qtk.Direction.LEFT);
	win.addChild(leftButton);

	var rightButton = qtk.Button.create().set({text:"Right", w:150});
	rightButton.layoutParam = qtk.DockLayouterParam.create(qtk.Direction.RIGHT);
	rightButton.useBehavior("resizable", {all:true});
	win.addChild(rightButton);
	
	var centerButton = qtk.Button.create().set({text:"Center"});
	centerButton.layoutParam = qtk.DockLayouterParam.create(qtk.Direction.TOP, "100%");
	win.addChild(centerButton);
	
	win.open();
}
