
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	createTreeView1(win);
	createTreeView2(win);

	win.open();
}
	
function createTreeView1(win) {
	var data = {
		text : "%root%",
		children: [
		{text:"item1",children:[{text:"item11"}, {text:"item12"}]},
		{text:"item2",children:[{text:"item11"}, {text:"item12"}]},
		{text:"item3",children:[{text:"item11"}, {text:"item12"}]},
		{text:"item4",children:[{text:"item41"}, {text:"item42"}]},
		{text:"item5",children:[{text:"item11"}, {text:"item12"}]},
		{text:"item6",children:[{text:"item11"}, {text:"item12"}]},
		{text:"qtk.TreeView.create",children:[{text:"qtk."}, {text:"qtk.SimpleLayouter.create children"}]}
		]
	};

	var treeView = qtk.TreeView.create();
	treeView.dragToScroll = true;
	treeView.slideToScroll = true;
	treeView.itemH = 30;
	treeView.layoutParam = qtk.SimpleLayouterParam.create({x:"5%", y:"5%", w:"45%", h:"45%"});
	treeView.set({name:"treeView", multiSelectable:true,  contentWidth:500, contentH:2000});	
	win.addChild(treeView);
	
	treeView.loadData(data);
}

function createTreeView2(win) {
	var treeView = qtk.TreeView.create();
	treeView.dragToScroll = true;

	treeView.itemH = 30;
	treeView.layoutParam = qtk.SimpleLayouterParam.create({x:"52%", y:"5%", w:"45%", h:"45%"});
	treeView.set({name:"treeView", multiSelectable:true,  contentWidth:500, contentH:2000});	
	win.addChild(treeView);
	var item = treeView.addItem(null, "item1");
	treeView.addItem(item, "item11");
	treeView.addItem(item, "item12");
	treeView.addItem(item, "item13");
	
	item = treeView.addItem(null, "item2");
	treeView.addItem(item, "item21");
	treeView.addItem(item, "item22");
	treeView.addItem(item, "item23");
	item = treeView.addItem(null, "item3");
	treeView.addItem(item, "item31");
	treeView.addItem(item, "item32");
	treeView.addItem(item, "item33");
//	treeView.removeItem(item);
}

