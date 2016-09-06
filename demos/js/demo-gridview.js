
var Events = qtk.Events;
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	createGridView(win , "0", "0", "49%", "49%", 6, 0, 6, 0, 36);
	createGridView(win , "50%", "0", "49%", "49%", 6, 0, 0, 60, 3600);
	createGridView(win , "0%", "50%", "49%", "49%", 0, 60, 6, 0, 3600);
	createGridView(win , "50%", "50%", "49%", "49%", 0, 60, 0, 60, 360);

	win.open();
}

function createGridView(win, x, y, w, h, cols, colWidth, rows, rowHeight, n) {
	var gridView = qtk.GridView.create();
	gridView.setItemMargins({all:5});
	gridView.layoutParam = qtk.SimpleLayouterParam.create(x, y, w, h);
	gridView.set({cols:cols, rows:rows, colWidth:colWidth, rowHeight:rowHeight});
	gridView.set({leftPadding:2, rightPadding:0, topPadding:2, bottomPadding:2});
	gridView.set({name:"gridView", contentWidth:500, contentHeight:2000, dragToScroll:true, slideToScroll:true});
	win.addChild(gridView);

	for(var i = 0; i < n; i++) {
		var item = qtk.Button.create();
		item.set({text:i.toString()});
		gridView.addChild(item, true);
	}
	gridView.relayoutChildren();
}
