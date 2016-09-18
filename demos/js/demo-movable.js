
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var button = qtk.Button.create();
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"0px", w:"50%", h:"50px"});
	button.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(button);

	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move parent"});	
	image.useBehavior("movable", {moveParent:true});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"50%", h:"50"});
	button.addChild(image);

	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"Drag me to move"});	
	image.useBehavior("movable");
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"60", w:"100", h:"100"});
	win.addChild(image);
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"yMovable=false"});	
	image.useBehavior("movable", {yMovable:false});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"180", w:"100", h:"100"});
	win.addChild(image);
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"xMovable=false"});	
	image.useBehavior("movable", {xMovable:false});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"290", w:"100", h:"100"});
	win.addChild(image);
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"y{100,500}"});	
	image.useBehavior("movable", {xMovable:false, yLimit:true, yMin:100, yMax:500});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"400", w:"100", h:"100"});
	win.addChild(image);
	
	var image = qtk.Image.create();
	image.set({name:"image1", value:imageURL, text:"x{100,800}"});	
	image.useBehavior("movable", {yMovable:false, xLimit:true, xMin:100, xMax:800});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"510", w:"100", h:"100"});
	win.addChild(image);
	
	win.open();
}
