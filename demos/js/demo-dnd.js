
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
	var LinearLayouter = qtk.LinearLayouter;
	var LinearLayouterParam = qtk.LinearLayouterParam;
	var imageURL = "/demos/assets/test.jpg";
	
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.createWithOptions();
	
	var image = Image.create({name:"image1", text:"DragMe", value:imageURL});
	image.useBehavior("draggable");
	image.layoutParam = SimpleLayouterParam.createWithOptions({x:"center", y:"10", w:"100", h:"100"});
	
	image.on(Events.DRAGSTART, function(evt) {
		console.log("DRAGSTART");
		var image = {
			draw : function(ctx, x, y) {
				ctx.fillStyle = "gold";
				ctx.fillRect(x, y, 100, 20);
			}
		}
		evt.dataTransfer.setDragImage(image);
		evt.dataTransfer.setData("text/plain", imageURL);
	});
	image.on(Events.DRAGEND, function(evt) {
		console.log("DRAGEND");
	});
	win.addChild(image);
	
	var targetImage = Image.create({name:"targetImage2",  drawType:ImageDrawType.DEFAULT, text: "Drop On Me"});
	targetImage.useBehavior("droppable");
	targetImage.setStyle(WidgetState.NORMAL,
		{
			"textColor" : "black",
			"lineColor" : "black",
			"textAlign" : "center",
			"lineWidth" : 1,
			"fontSize" : 16
		});
	targetImage.layoutParam = SimpleLayouterParam.createWithOptions({x:"center", y:"-210", w:"100%", h:"200"});
	targetImage.on(Events.DRAGENTER, function(evt) {
		console.log("DRAGENTER");
	});
	targetImage.on(Events.DRAGLEAVE, function(evt) {
		console.log("DRAGLEAVE");
	});
	targetImage.on(Events.DRAGOVER, function(evt) {
		console.log("DRAGOVER");
	});
	targetImage.on(Events.DROP, function(evt) {
		var url = evt.dataTransfer.getData("text/plain");
		targetImage.value = url;
		console.log("DROP:" + url);
	});

	win.addChild(targetImage);
	win.open();
}
