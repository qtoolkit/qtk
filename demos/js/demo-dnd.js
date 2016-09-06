var imageURL = "/demos/assets/test.jpg";

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL});
	image.useBehavior("draggable");
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"10", w:"100", h:"100"});
	image.on(qtk.Events.DRAGSTART, function(evt) {
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
	image.on(qtk.Events.DRAGEND, function(evt) {
		console.log("DRAGEND");
	});
	win.addChild(image);
	
	var targetImage = qtk.Image.create();
	targetImage.useBehavior("droppable");
	targetImage.setStyle(qtk.WidgetState.NORMAL,
		{
			"fontColor" : "black",
			"lineColor" : "black",
			"lineWidth" : 1,
			"fontSize" : 16
		});
	targetImage.set({name:"targetImage2",  drawType:qtk.ImageDrawType.DEFAULT, text: "Drop On Me"});
	targetImage.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"-210", w:"100%", h:"200"});
	targetImage.on(qtk.Events.DRAGENTER, function(evt) {
		console.log("DRAGENTER");
	});
	targetImage.on(qtk.Events.DRAGLEAVE, function(evt) {
		console.log("DRAGLEAVE");
	});
	targetImage.on(qtk.Events.DRAGOVER, function(evt) {
		console.log("DRAGOVER");
	});
	targetImage.on(qtk.Events.DROP, function(evt) {
		var url = evt.dataTransfer.getData("text/plain");
		targetImage.value = url;
		console.log("DROP:" + url);
	});

	win.addChild(targetImage);
	win.open();
}
