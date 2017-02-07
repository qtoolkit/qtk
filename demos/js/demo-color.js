
var Group = qtk.Group;
var Align = qtk.Align;
var AlignV = qtk.AlignV;
var AlignH = qtk.AlignH;
var Events = qtk.Events;
var ColorLine = qtk.ColorLine;
var ColorTile = qtk.ColorTile;;
var Direction = qtk.Direction;
var Orientation = qtk.Orientation;
var RadioButton = qtk.RadioButton;
var WindowNormal = qtk.WindowNormal;
var SimpleLayouter = qtk.SimpleLayouter;
var SimpleLayouterParam= qtk.SimpleLayouterParam;
var LinearLayouter = qtk.LinearLayouter;
var LinearLayouterParam = qtk.LinearLayouterParam;

function onReady(app) {
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.createWithOptions();
	
	var color = ColorTile.create({value:"blue", roundRadius:5, lineColor:"green", lineWidth:1});
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"10px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	win.addChild(color);

	color = ColorLine.create({orientation:Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	win.addChild(color);
	
	color = ColorLine.create();
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	color.set({vAlign:AlignV.T, orientation:Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	color = ColorLine.create();
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	color.set({vAlign:AlignV.B, orientation:Orientation.H, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);

	color = ColorLine.create();
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	color.set({orientation:Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);

	color = ColorLine.create();
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	color.set({hAlign:AlignH.L, orientation:Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	color = ColorLine.create();
	color.layoutParam = SimpleLayouterParam.createWithOptions({x:"25%", y:"60px", w:"50%", h:"30px"});
	color.childrenLayouter = SimpleLayouter.createWithOptions();
	color.set({hAlign:AlignH.R, orientation:Orientation.V, lineColor:"green", lineWidth:1, dashLine:[4,4]});
	win.addChild(color);
	
	win.open();
}
