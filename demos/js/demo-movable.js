
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move"});	
	image.useBehavior("movable");
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"200", h:"200"});
	win.addChild(image);
	
	var button = qtk.Button.create();
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"60px"});
	button.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(button);

	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move parent"});	
	image.useBehavior("movable", {moveParent:true});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"50%", h:"50"});
	button.addChild(image);

	win.open();
}
