
var imageURL = "/demos/assets/test.jpg";
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
	var Events = qtk.Events;
	
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.create();
	
	var edit = Edit.create({inputTips:"Title"});
	edit.layoutParam = SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	edit.childrenLayouter = SimpleLayouter.create();
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
	
	var mlEdit = Edit.create({inputTips:"Content"});
	mlEdit.layoutParam = SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"300px"});
	mlEdit.childrenLayouter = SimpleLayouter.create();
	mlEdit.multiLineMode = true;
	win.addChild(mlEdit);

	mlEdit.on(Events.CHANGING, function(evt) {
		console.log("Changing:" + evt.value);
	});
	
	mlEdit.on(Events.CHANGE, function(evt) {
		console.log("Change:" + evt.value);
	});
	
	mlEdit.on(Events.FOCUS, function(evt) {
		console.log("Focus:" + this.value);
	});
	
	mlEdit.on(Events.BLUR, function(evt) {
		console.log("Blur:" + this.value);
	});

	win.open();
}
