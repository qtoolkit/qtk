
function hookEvents(edit) {
	var Events = qtk.Events;
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
	
	edit.on(Events.KEYDOWN, function(evt) {
		console.log("KeyDown:" + evt.keyCode);
	});
	
	edit.on(Events.KEYUP, function(evt) {
		console.log("KeyUp:" + evt.keyCode);
	});
	
	edit.on(Events.CONFIRM, function(evt) {
		console.log("CONFIRM");
	});
}

function onReady(app) {
	var Edit = qtk.Edit;
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
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.createWithOptions();
	
	var edit = Edit.create({inputTips:"Title"});
	edit.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"10px", w:"50%", h:"30px"});
	edit.childrenLayouter = SimpleLayouter.createWithOptions();
	win.addChild(edit);

	var mlEdit = Edit.create({inputTips:"Content"});
	mlEdit.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"300px"});
	mlEdit.childrenLayouter = SimpleLayouter.createWithOptions();
	mlEdit.multiLineMode = true;
	win.addChild(mlEdit);

	hookEvents(edit);
	hookEvents(mlEdit);
	
	win.open();
}
