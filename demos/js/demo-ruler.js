
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

	var topRuler = HRuler.create().set({text:"Top", h:20}).setOrigin(100, 100);
	topRuler.layoutParam = DockLayouterParam.create({position:Direction.TOP});
	win.addChild(topRuler);

	var leftRuler = VRuler.create().set({text:"Left", w:20}).setOrigin(100, 100);
	leftRuler.layoutParam = DockLayouterParam.create({position:Direction.LEFT});
	win.addChild(leftRuler);

	win.on(qtk.Events.POINTER_MOVE, function(evt) {
		leftRuler.setPointer(evt.x-leftRuler.x, evt.y-leftRuler.y);		
		topRuler.setPointer(evt.x-topRuler.x, evt.y-topRuler.y);		
	});
	
	win.on(qtk.Events.WHEEL, function(evt) {
		console.log(evt.delta);
		if(evt.delta > 0) {
			topRuler.scale += 0.2;
			leftRuler.scale += 0.2;
		}else{
			topRuler.scale *= 0.9;
			leftRuler.scale *= 0.9;
		}
		win.requestRedraw();
	});
	win.open();
}
