

var Group = qtk.Group;
var Align = qtk.Align;
var AlignV = qtk.AlignV;
var AlignH = qtk.AlignH;
var Events = qtk.Events;
var ComboBox = qtk.ComboBox;
var ComboBoxEditable = qtk.ComboBoxEditable;
var Direction = qtk.Direction;
var Orientation = qtk.Orientation;
var RadioButton = qtk.RadioButton;
var WindowNormal = qtk.WindowNormal;
var SimpleLayouter = qtk.SimpleLayouter;
var SimpleLayouterParam= qtk.SimpleLayouterParam;
var LinearLayouter = qtk.LinearLayouter;
var LinearLayouterParam = qtk.LinearLayouterParam;

var imageURL = "/demos/assets/icons/@density/";

function drawCommbox(ctx, style, rect, option) {
	rect.x += 10;
	rect.w -= 10;
	drawCommboxItem(ctx, style, rect, option);

	return;
}

function drawCommboxItem(ctx, style, rect, option) {
	var x = rect.x;
	var y = rect.y + (rect.h >> 1);

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + rect.w, y);
	
	ctx.lineWidth = option.value || 1;
	ctx.strokeStyle = style.lineColor;
	ctx.stroke();

}

function onReady(app) {
	var Events = Events;
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.create();
	
	var comboBox = ComboBox.create();
	comboBox.layoutParam = SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	comboBox.addOption("item1", 1, imageURL + "favor.normal.png");
	comboBox.addOption("item1", 2, imageURL + "home.current.png");
	comboBox.addOption("item1", 3, imageURL + "close.normal.png");
	win.addChild(comboBox);

	var comboBox = ComboBoxEditable.create({value:1});
	comboBox.layoutParam = SimpleLayouterParam.create({x:"25%", y:"100px", w:"50%", h:"30px"});
	comboBox.addOption("red", 1, null, "red");
	comboBox.addOption("green", 2, null, "green");
	comboBox.addOption("blue", 3, null, "blue");
	win.addChild(comboBox);
	
	comboBox = ComboBox.create({value:1, customDraw:drawCommbox, customItemDraw:drawCommboxItem});
	comboBox.layoutParam = SimpleLayouterParam.create({x:"25%", y:"-60px", w:"50%", h:"30px"});
	comboBox.addOption(null, 1);
	comboBox.addOption(null, 2);
	comboBox.addOption(null, 3);
	win.addChild(comboBox);
	
	comboBox = ComboBox.create({value:1});
	comboBox.layoutParam = SimpleLayouterParam.create({x:"25%", y:"-120px", w:"50%", h:"30px"});
	for(var i = 0; i < 100; i++) {
		comboBox.addOption("item"+i, i);
	}
	win.addChild(comboBox);
	
	win.open();
}
