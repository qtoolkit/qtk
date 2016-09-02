
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create();
	image.name = "image1";
	image.useBehavior("draggable");
	image.value = "/www/test.jpg";
	image.drawType = qtk.ImageDrawType.DEFAULT; 
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "10", "100", "100");
	image.on(qtk.Events.DRAGSTART, function(evt) {
		console.log("DRAGSTART");
		var image = {
			draw : function(ctx, x, y) {
				ctx.fillStyle = "gold";
				ctx.fillRect(x, y, 100, 20);
			}
		}
		evt.dataTransfer.setDragImage(image);
		evt.dataTransfer.setData("text/plain", "/www/test.jpg");
	});

	image.on(qtk.Events.DRAGEND, function(evt) {
		console.log("DRAGEND");
	});

	win.addChild(image);
	
	
	var image = qtk.Image.create();
	image.name = "image2";
	image.useBehavior("droppable");
	image.drawType = qtk.ImageDrawType.DEFAULT; 
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "-210", "100%", "200");
	image.on(qtk.Events.DRAGENTER, function(evt) {
		console.log("DRAGENTER");
	});
	image.on(qtk.Events.DRAGLEAVE, function(evt) {
		console.log("DRAGLEAVE");
	});
	
	image.on(qtk.Events.DRAGOVER, function(evt) {
		console.log("DRAGOVER");
	});
	image.on(qtk.Events.DROP, function(evt) {
		var url = evt.dataTransfer.getData("text/plain");
		image.value = url;
		console.log("DROP:" + url);
	});

	win.addChild(image);
}
