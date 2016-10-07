
function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var Group = qtk.Group;
	var Align = qtk.Align;
	var AlignV = qtk.AlignV;
	var AlignH = qtk.AlignH;
	var Events = qtk.Events;
	var Image = qtk.Image;
	var Button = qtk.Button;
	var VRuler = qtk.VRuler;
	var HRuler = qtk.HRuler;
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

	win.childrenLayouter = DockLayouter.create();

	var topButton = HRuler.create().set({text:"Top", h:20});
	topButton.layoutParam = DockLayouterParam.create({position:Direction.TOP});
	win.addChild(topButton);

	var leftButton = VRuler.create().set({text:"Left", w:20});
	leftButton.layoutParam = DockLayouterParam.create({position:Direction.LEFT});
	win.addChild(leftButton);

	
	win.open();
}
