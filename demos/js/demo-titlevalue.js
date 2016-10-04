
function onReady(app) {
	var Events = qtk.Events;
	var ListItem = qtk.ListItem;
	var ListView = qtk.ListView;
	var WindowNormal = qtk.WindowNormal;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.w, h:vp.h, childrenLayouter:"simple"});
	
	var listView = ListView.create({dragToScroll:true, slideToScroll:false, itemH:40});
	listView.layoutParam = win.createChildLayoutParam({x:"center", w:"80%", h:"90%"});
	win.addChild(listView);

	function filterTo100(value) {
		return Math.min(100, parseInt(value)).toString();
	}

	function addItem(titleValue, h) {
		var item = ListItem.create({styleType:"widget.tansparent"});
		if(h) {
			item.layoutParam = qtk.ListLayouterParam.create({h:h});
		}
		listView.addChild(item, true);
		item.childrenLayouter = qtk.SimpleLayouter.create();
		item.addChild(titleValue);

		return titleValue;
	}

	addItem(qtk.TitleChoosableEdit.create({
				inputTips:"URL",
				title:"URL", 
				titleW:"60", 
				valueW:"100%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		})).onChoose = function() {
			this.value = "choose";	
		}
	addItem(qtk.TitleEdit.create({
				inputType:"number",
				inputTips:"Age",
				inputFilter:filterTo100,
				title:"Age", 
				titleW:"60", 
				valueW:"100", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}));
	addItem(qtk.TitleComboBox.create({
				value:"Red",
				title:"Color", 
				titleW:"60", 
				valueW:"60%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"70%"})
		})).addOption("Red").addOption("Green").addOption("Blue");;
	
	addItem(qtk.TitleComboBoxEditable.create({
				value:"Red",
				title:"Color", 
				titleW:"60", 
				valueW:"60%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"70%"})
		})).addOption("Red").addOption("Green").addOption("Blue");;
	
	addItem(qtk.TitleSlider.create({
				value : 0.1,
				title:"Opacity", 
				titleW:"60", 
				valueW:"80%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}));

	addItem(qtk.TitleTextArea.create({
				inputTips : "Desc",
				title:"Desc", 
				titleW:"60", 
				valueW:"80%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), 200);
	win.target = listView;
	win.open();
}
