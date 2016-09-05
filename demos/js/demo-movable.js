
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move"});	
	image.useBehavior("movable");
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "200", "200");
	win.addChild(image);
	
	var button = qtk.Button.create();
	button.layoutParam = qtk.SimpleLayouterParam.create("25%", "10px", "50%", "60px");
	button.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(button);

	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move parent"});	
	image.useBehavior("movable", {moveParent:true});
	image.layoutParam = qtk.SimpleLayouterParam.create("center", "middle", "50%", "50");
	button.addChild(image);
}
