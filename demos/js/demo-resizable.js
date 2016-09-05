var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"I'm resizable"});	
	image.useBehavior("resizable", {all:true});
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "200", "200");
	
	win.addChild(image);
}
