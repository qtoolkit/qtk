
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var data = {
		text : "root item",
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

	treeView.itemHeight = 30;
	treeView.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	treeView.set({name:"treeView", multiSelectable:true,  contentWidth:500, contentHeight:2000});	
	win.addChild(treeView);
	
	treeView.loadData(data);

	win.open();
}
