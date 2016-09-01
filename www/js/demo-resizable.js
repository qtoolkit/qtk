
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;
	
	var image = qtk.Image.create();
	image.name = "image1";
	image.useBehavior("resizable", {all:true});
	image.value = "/www/test.jpg";
	image.drawType = qtk.ImageDrawType.DEFAULT; 
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "100", "100");
	
	win.addChild(image);
}
