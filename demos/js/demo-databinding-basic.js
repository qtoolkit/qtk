
var genderConverter = {
	convert:function(value) {
		return value ? "male" : "female";
	},
	convertBack:function(value) {
		return value === "male" ? 1 : 0;
	}
};

var ageValidationRule = {
	validate : function(value) {
		if(value >= 0 && value <= 128) {
			return qtk.ValidationResult.validResult;
		}else{
			return qtk.ValidationResult.create(-1, "Age must between 0 and 100.");
		}
	}
};

function onReady(app) {
	var Events = qtk.Events;
	var ListItem = qtk.ListItem;
	var ListView = qtk.ListView;
	var WindowNormal = qtk.WindowNormal;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.w, h:vp.h, childrenLayouter:"simple"});
	
	var listView = ListView.create({dragToScroll:true, slideToScroll:false, itemHeight:40});
	listView.layoutParam = win.createChildLayoutParam({x:"center", w:"80%", h:"90%"});
	win.addChild(listView);

	function addItem(titleValue, bindingRule, h) {
		var item = ListItem.create({styleType:"widget.tansparent"});
		if(h) {
			item.layoutParam = qtk.ListLayouterParam.create({h:h});
		}
		listView.addChild(item, true);
		item.childrenLayouter = qtk.SimpleLayouter.create();
		item.addChild(titleValue);
		if(titleValue.valueWidget) {
			titleValue.valueWidget.setDataBindingRule(bindingRule);
		}else{
			titleValue.setDataBindingRule(bindingRule);
		}
		return titleValue;
	}

	addItem(qtk.TitleEdit.create({
				title:"Name", 
				titleW:"60", 
				valueW:"80%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"name"}});

	addItem(qtk.TitleEdit.create({
				inputType:"number",
				title:"Age", 
				titleW:"60", 
				valueW:"100", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"age", validationRule:"age"}});
	
	addItem(qtk.TitleComboBox.create({
				title:"Gender", 
				titleW:"60", 
				valueW:"60%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"gender", converters:["gender"]}, 
			options: {value:[{text:"female"}, {text:"male"}]}});

	addItem(qtk.TitleLabel.create({
		title:"Name(*)", 
		titleW:"60", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "name");
	addItem(qtk.TitleLabel.create({
		title:"Age(*)", 
		titleW:"60", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "age");
	addItem(qtk.TitleLabel.create({
		title:"Gender(*)", 
		titleW:"60", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), {value: {path:"gender", converters:["gender"]}});
	
	addItem(qtk.TitleLabel.create({
		title:"Org Name(*)", 
		titleW:"120", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "/org/name");
	
	var summary = addItem(qtk.Label.create({text:"",
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}));
	
	var data = {
		name:"QTK",
		age:100,
		gender:1,
		org : {
			name:"QToolKit"
		}
	};

	var viewModal = qtk.ViewModal.create(data);
	viewModal.registerValueConverter("gender", genderConverter);
	viewModal.registerValidationRule("age", ageValidationRule);

	listView.bindData(viewModal);

	viewModal.on(Events.PROP_CHANGE, function(evt) {
		summary.text = "change: " + evt.prop + " = " + evt.value;
	});

	win.target = listView;
	win.open();
}
