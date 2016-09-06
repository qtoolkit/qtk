
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.leftPadding = 10;
	win.topPadding = 10;
	win.rightPadding = 10;
	win.bottomPadding = 10;

//	win.childrenLayouter = qtk.GridLayouter.create({rows:6, cols:6});
	win.childrenLayouter = qtk.GridLayouter.create({rowHeight:60, cols:6,
		leftMargin:10, topMargin:10, rightMargin:10, bottomMargin:10});
//	win.childrenLayouter = qtk.GridLayouter.create({rows:6, colWidth:60, 
//		leftMargin:10, topMargin:10, rightMargin:10, bottomMargin:10});
	
	for(var i = 0; i < 30; i++) {
		var item = qtk.Button.create();
		//item.layoutParam = qtk.GridLayouterParam.create(i, 1, 0, i+1);
		item.set({text:i.toString()});
		win.addChild(item, true);
	}
	win.relayoutChildren();
	win.open();
}
