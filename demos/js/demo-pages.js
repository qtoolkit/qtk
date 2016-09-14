
var imageURL = "/demos/assets/test.jpg";
function createPage(pages, index) {
	var page = qtk.Page.create();
	page.childrenLayouter = qtk.SimpleLayouter.create();
	pages.addChild(page);

	var button = qtk.Button.create();
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	button.text = index.toString();
	button.on(qtk.Events.CLICK, function(evt) {
		console.log(this.text);
	});

	page.addChild(button);

	return page;
}

function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var imageURL = "/demos/assets/theme/default/images/x2/check-button-checked.png";
	var pages = qtk.Pages.create();
	pages.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(pages);

	createPage(pages, 0);
	createPage(pages, 1);
	createPage(pages, 2);
	createPage(pages, 3);
	pages.value = 3;

	var comboBox = qtk.ComboBox.create();
	comboBox.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"-100px", w:"50%", h:"30px"});
	comboBox.addOption("item0", 0);
	comboBox.addOption("item1", 1);
	comboBox.addOption("item2", 2);
	comboBox.addOption("item3", 3);
	comboBox.value = pages.value;
	comboBox.on(qtk.Events.CHANGE, evt => {
		pages.value = evt.value;
	});
	win.addChild(comboBox);

	win.open();
}
