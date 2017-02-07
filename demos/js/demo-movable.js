
var imageURL = "/demos/assets/test.jpg";
	
function createImage(text) {
	var image = qtk.Image.create();
	image.on(qtk.Events.MOVE_BEGIN, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.MOVING, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.MOVE_END, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.MOVE_CANCEL, function(evt) {
		console.log(evt.type);
	});
	image.set({value:imageURL, text:text});	

	return image;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.createWithOptions();
	
	var button = qtk.Button.create();
	button.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"25%", y:"0px", w:"50%", h:"50px"});
	button.childrenLayouter = qtk.SimpleLayouter.createWithOptions();
	win.addChild(button);

	var image = createImage("Drag me to move parent");
	image.useBehavior("movable", {moveParent:true});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"middle", w:"50%", h:"50"});
	button.addChild(image);


	var image = createImage("Drag me to move");
	image.useBehavior("movable");
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"60", w:"100", h:"100"});
	win.addChild(image);
	
	var image = createImage("yMovable=false");
	image.useBehavior("movable", {yMovable:false});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"180", w:"100", h:"100"});
	win.addChild(image);
	
	var image = createImage("xMovable=false");
	image.useBehavior("movable", {xMovable:false});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"290", w:"100", h:"100"});
	win.addChild(image);
	
	var image = createImage("y{100,500}");
	image.useBehavior("movable", {xMovable:false, yLimit:true, yMin:100, yMax:500});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"400", w:"100", h:"100"});
	win.addChild(image);
	
	var image = createImage("x{100,800}");
	image.useBehavior("movable", {yMovable:false, xLimit:true, xMin:100, xMax:800});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"510", w:"100", h:"100"});
	win.addChild(image);
	
	win.open();
}
