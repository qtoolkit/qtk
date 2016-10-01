
var imageURL = "/demos/assets/test.jpg";
function addPage(propertySheets, title) {
	var page = qtk.PropertyPage.create({h:400});
	propertySheets.addPage(title, page);
	
	page.addEdit("Name", "QTK"); 
	page.addEdit("Age", "100", "Age", "number"); 
	page.addChoosableEdit("URL", "https://qtoolkit.github.io/demos/index.html").onChoose = function() {
		this.value = "choose";
	};
	page.addTextArea("Desc", "QToolKit"); 
	page.addSlider("Opacity", 0.3); 
	page.addComboBox("Color", "Red").addOption("Red").addOption("Green").addOption("Blue"); 
	page.addComboBoxEditable("Color", "Red").addOption("Red").addOption("Green").addOption("Blue"); 
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var propertySheets = qtk.PropertySheets.create({padding:1, titleHeight:30});
	propertySheets.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(propertySheets);

	addPage(propertySheets, "Page1");
	addPage(propertySheets, "Page2");
	addPage(propertySheets, "Page3");
	
	win.open();
}
