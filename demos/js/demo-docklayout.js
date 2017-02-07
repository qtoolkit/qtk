
function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var Group = qtk.Group;
	var Align = qtk.Align;
	var AlignV = qtk.AlignV;
	var AlignH = qtk.AlignH;
	var Events = qtk.Events;
	var Image = qtk.Image;
	var Button = qtk.Button;
	var Direction = qtk.Direction;
	var WidgetState = qtk.WidgetState;
	var Orientation = qtk.Orientation;
	var RadioButton = qtk.RadioButton;
	var WindowNormal = qtk.WindowNormal;
	var ImageDrawType = qtk.ImageDrawType;
	var SimpleLayouter = qtk.SimpleLayouter;
	var SimpleLayouterParam= qtk.SimpleLayouterParam;
	var DockLayouter = qtk.DockLayouter;
	var DockLayouterParam = qtk.DockLayouterParam;
	
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app,  w:vp.width, h:vp.height});

	win.childrenLayouter = DockLayouter.createWithOptions();

	var topButton = Button.create().set({text:"Top", h:50});
	topButton.layoutParam = DockLayouterParam.createWithOptions({position:Direction.TOP});
	topButton.useBehavior("resizable", {south:true});
	win.addChild(topButton);
	
	var bottomButton = Button.create().set({text:"Bottom", h:50});
	bottomButton.layoutParam = DockLayouterParam.createWithOptions({position:Direction.BOTTOM});
	bottomButton.useBehavior("resizable", {north:true});
	win.addChild(bottomButton);

	var leftButton = Button.create().set({text:"Left", w:150});
	leftButton.layoutParam = DockLayouterParam.createWithOptions({position:Direction.LEFT});
	leftButton.useBehavior("resizable", {east:true});
	win.addChild(leftButton);

	var rightButton = Button.create().set({text:"Right", w:150});
	rightButton.layoutParam = DockLayouterParam.createWithOptions({position:Direction.RIGHT});
	rightButton.useBehavior("resizable", {west:true});
	win.addChild(rightButton);
	
	var centerButton = Button.create().set({text:"Center"});
	centerButton.layoutParam = DockLayouterParam.createWithOptions({position:Direction.TOP, size:"100%"});
	win.addChild(centerButton);
	
	win.open();
}
