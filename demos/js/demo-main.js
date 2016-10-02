
function onReady(app) {
	var Events = qtk.Events;
	var ListItem = qtk.ListItem;
	var ListView = qtk.ListView;
	var WindowNormal = qtk.WindowNormal;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.w, h:vp.h, childrenLayouter:"simple"});
	
	var label = qtk.Label.create({text:"QToolKit Demos"});
	label.layoutParam = win.createChildLayoutParam({x:"25%", y:"10%", w:"50%", h:"40"});
	label.setStyle(qtk.WidgetState.NORMAL, qtk.Style.create({
			"textColor" : "green",
			"textAlign" : "center",
			"fontSize" : 30
		}));
	win.addChild(label);
	
	var listView = ListView.create({dragToScroll:true, slideToScroll:true, itemHeight:40});
	listView.layoutParam = win.createChildLayoutParam({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(listView);

	var items = [
		{title:"Edit", data:"edit"},
		{title:"Menu", data:"menu"},
		{title:"Label", data:"label"},
		{title:"Pages", data:"pages"},
		{title:"Switch", data:"switch"},
		{title:"Dialog", data:"dialog"},
		{title:"Basic Data Binding", data:"databinding-basic"},
		{title:"Accordion", data:"accordion"},
		{title:"PropertySheets", data:"propertysheets"},
		{title:"Movable", data:"movable"},
		{title:"Title Value", data:"titlevalue"},
		{title:"Title Content", data:"titlecontent"},
		{title:"Drag & Drop", data:"dnd"},
		{title:"TreeView", data:"treeview"},
		{title:"RichText", data:"richtext"},
		{title:"MessageBox", data:"messagebox"},
		{title:"RichTextEdit", data:"richtextedit"},
		{title:"ListView", data:"listview"},
		{title:"ComboBox", data:"combobox"},
		{title:"Resizable", data:"resizable"},
		{title:"Animation", data:"animation"},
		{title:"ScrollView", data:"scrollview"},
		{title:"TabControl", data:"tabcontrol"},
		{title:"ProgressBar", data:"progressbar"},
		{title:"DockLayouter", data:"docklayout"},
		{title:"GridLayouter", data:"gridlayout"},
		{title:"LinearLayouter", data:"linearlayout"},
		{title:"ColorTile & ColorLine", data:"color"},
		{title:"CheckButton & RadioButton", data:"check-button"},
	];

	function onItemClick() {
		var data = this.userData;
		window.open(location.href+"?demo="+data, "_blank");
	}

	items.forEach(iter => {
		var item = ListItem.create({text:iter.title, userData:iter.data});
		item.on(Events.CLICK, onItemClick);
		listView.addChild(item, true);
	});
	listView.relayoutChildren();
	win.target = listView;
	win.open();
}
