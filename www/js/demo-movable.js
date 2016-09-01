
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;
	
	var image = qtk.Image.create();
	image.name = "image1";
	image.useBehavior("movable");
	image.value = "/www/test.jpg";
	image.drawType = qtk.ImageDrawType.DEFAULT; 
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "100", "100");
	
	win.addChild(image);
	
	var button = qtk.Button.create();
	button.name = "button1";
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "10px", "50%", "60px");
	button.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(button);

	var image = qtk.Image.create();
	image.name = "image1";
	image.useBehavior("movable", {moveParent:true});
	image.value = "/www/test.jpg";
	image.drawType = qtk.ImageDrawType.DEFAULT; 
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "50", "50");
	button.addChild(image);
}
