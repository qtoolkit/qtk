
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Label = qtk.Label;
	var TWEEN = qtk.TWEEN;
	var Style = qtk.Style;
	var Align = qtk.Align;
	var AlignV = qtk.AlignV;
	var AlignH = qtk.AlignH;
	var Events = qtk.Events;
	var Image = qtk.Image;
	var Button = qtk.Button;
	var Direction = qtk.Direction;
	var WidgetState = qtk.WidgetState;
	var Orientation = qtk.Orientation;
	var RadioButton = qtk.RadioButton;
	var WindowNormal = qtk.WindowNormal;
	var ImageDrawType = qtk.ImageDrawType;
	var SimpleLayouter = qtk.SimpleLayouter;
	var SimpleLayouterParam= qtk.SimpleLayouterParam;
	var DockLayouter = qtk.DockLayouter;
	var DockLayouterParam = qtk.DockLayouterParam;
	var Events = qtk.Events;
	
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.create();
	
	var label = Label.create({multiLineMode:true, name:"text1"});
	label.layoutParam = SimpleLayouterParam.create({x:"25%", y:"40px", w:"50%", h:"100px"});
	label.text = "1.注册hello world登录后，所有生成的二维码\n都会保存在账号里";
	win.addChild(label);
	
	label = Label.create({multiLineMode:true, name:"text2"});
	label.layoutParam = SimpleLayouterParam.create({x:"25%", y:"150px", w:"50%", h:"100px"});
	label.text = "2.注册hello world登录后，所有生成的二维码\n都会保存在账号里";
	label.setStyle(WidgetState.NORMAL, Style.create({
			"textColor" : "green",
			"textAlign" : "center",
			"lineWidth" : 1,
			"fontSize" : 12
		}));
	win.addChild(label);
	
	label = Label.create({multiLineMode:true, name:"text3"});
	label.layoutParam = SimpleLayouterParam.create({x:"25%", y:"260px", w:"50%", h:"100px"});
	label.text = "2.注册hello world登录后，所有生成的二维码\n都会保存在账号里";
	label.setStyle(WidgetState.NORMAL, Style.create({
			"textColor" : "green",
			"textAlign" : "right",
			"lineWidth" : 1,
			"fontSize" : 30
		}));
	win.addChild(label);

	win.open();
}
