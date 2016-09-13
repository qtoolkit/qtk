
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var imageURL = "/demos/assets/theme/default/images/x2/check-button-checked.png";
	var comboBox = qtk.ComboBox.create();
	comboBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	comboBox.addOption("item1", 1, imageURL, "red");
	comboBox.addOption("item2", 2, null, "green");
	comboBox.addOption("item3", 3, null, "blue");
	win.addChild(comboBox);

	var comboBox = qtk.ComboBox.create();
	comboBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"100px", w:"50%", h:"30px"});
	comboBox.addOption("item1", 1);
	comboBox.addOption("item2", 2);
	comboBox.addOption("item3", 3);
	comboBox.value = 1;
	win.addChild(comboBox);
	
	win.open();
}
