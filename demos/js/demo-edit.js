
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var edit = qtk.Edit.create();
	edit.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	edit.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(edit);

	edit.on(Events.CHANGING, function(evt) {
		console.log("Changing:" + evt.value);
	});
	
	edit.on(Events.CHANGE, function(evt) {
		console.log("Change:" + evt.value);
	});
	
	edit.on(Events.FOCUS, function(evt) {
		console.log("Focus:" + this.value);
	});
	
	edit.on(Events.BLUR, function(evt) {
		console.log("Blur:" + this.value);
	});
	
	var mlEdit = qtk.Edit.create();
	mlEdit.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"60px", w:"50%", h:"300px"});
	mlEdit.childrenLayouter = qtk.SimpleLayouter.create();
	mlEdit.multiLines = true;
	win.addChild(mlEdit);

	mlEdit.on(Events.CHANGING, function(evt) {
		console.log("Changing:" + evt.value);
	});
	
	mlEdit.on(Events.CHANGE, function(evt) {
		console.log("Change:" + evt.value);
	});
	
	mlEdit.on(Events.FOCUS, function(evt) {
		console.log("Focus:" + this.value);
	});
	
	mlEdit.on(Events.BLUR, function(evt) {
		console.log("Blur:" + this.value);
	});

	var label = qtk.Label.create();
	label.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"400px", w:"50%", h:"300px"});
	label.childrenLayouter = qtk.SimpleLayouter.create();
	label.multiLines = true;
	label.text = "注册hello world登录后，所有生成的二维码\n都会保存在账号里，方便之后进行管理和查看 !";
	win.addChild(label);
	
	win.open();
}
