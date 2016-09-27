
function onReady(app) {
	var Events = qtk.Events;
	var ListItem = qtk.ListItem;
	var ListView = qtk.ListView;
	var WindowNormal = qtk.WindowNormal;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.w, h:vp.h, childrenLayouter:"simple"});
	
	var listView = ListView.create({dragToScroll:true, slideToScroll:true, itemHeight:40});
	listView.layoutParam = win.createChildLayoutParam({x:"center", y:"center", w:"80%", h:"90%"});
	win.addChild(listView);

	function filterTo100(value) {
		return Math.min(100, parseInt(value)).toString();
	}

	function addItem(titleValue) {
		var item = ListItem.create();
		listView.addChild(item, true);
		item.childrenLayouter = qtk.SimpleLayouter.create();
		item.addChild(titleValue);
	}

	addItem(qtk.TitleEdit.create({
				inputType:"number",
				inputTips:"Age",
				inputFilter:filterTo100,
				padding:5, 
				title:"Age", 
				titleW:"60", 
				valueW:"60%", 
				w:260, 
				h:30,
				layoutParam : qtk.SimpleLayouterParam.create({y:"center"})
		}));

	listView.relayoutChildren();
	win.target = listView;
	win.open();
}
