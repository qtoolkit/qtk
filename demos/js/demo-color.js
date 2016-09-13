
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var color = qtk.ColorTile.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({value:"blue", roundRadius:5, lineColor:"green", lineWidth:1});
	win.addChild(color);

	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({orientation:qtk.Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({vAlign:qtk.AlignV.T, orientation:qtk.Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({vAlign:qtk.AlignV.B, orientation:qtk.Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);

	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({orientation:qtk.Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);

	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({hAlign:qtk.AlignH.L, orientation:qtk.Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	color = qtk.ColorLine.create();
	color.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = qtk.SimpleLayouter.create();
	color.set({hAlign:qtk.AlignH.R, orientation:qtk.Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	win.open();
}
