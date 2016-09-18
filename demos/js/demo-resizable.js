var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.w, h:vp.h});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var image = qtk.Image.create({name:"image1", value:imageURL, text:"I'm resizable"});	
	image.useBehavior("resizable", {all:true});
	image.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"200", h:"200"});
	
	win.addChild(image);
	win.open();
}
