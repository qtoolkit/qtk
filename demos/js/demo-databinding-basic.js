
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
			return qtk.ValidationResult.create(-1, "Age must between 0 and 128.");
		}
	}
};

function createViewModal() {
	var data = {
		name:"QTK",
		age:100,
		desc:"QToolKit",
		gender:1,
		org : {
			name:"QToolKit"
		}
	};

	var commandEnable = false;
	setTimeout(function() {
		commandEnable = true;
	}, 3000);

	var viewModal = qtk.ViewModal.create(data);
	viewModal.registerValueConverter("gender", genderConverter);
	viewModal.registerValidationRule("age", ageValidationRule);
	viewModal.registerCommand("dummy", qtk.DelegateCommand.create(function execute(args) {
		console.log("dummy");
	}, function() {
		return commandEnable;
	}));

	return viewModal;
}

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

	function addItem(titleValue, bindingRule, h) {
		var item = ListItem.create({styleType:"widget.tansparent"});
		if(h) {
			item.layoutParam = qtk.ListLayouterParam.create({h:h});
		}
		listView.addChild(item, true);
		item.childrenLayouter = qtk.SimpleLayouter.create();
		item.addChild(titleValue);
		if(titleValue.valueWidget) {
			titleValue.valueWidget.dataBindingRule = bindingRule;
		}else{
			titleValue.dataBindingRule = bindingRule;
		}
		return titleValue;
	}

	addItem(qtk.TitleEdit.create({
				title:"Name", 
				titleW:"60", 
				valueW:"40%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"name", updateTiming:"changed"}});

	addItem(qtk.TitleEdit.create({
				inputType:"number",
				title:"Age", 
				titleW:"60", 
				valueW:"40%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"age", validationRule:"age", updateTiming:"changing"}});
	
	addItem(qtk.TitleEdit.create({
				title:"Desc", 
				titleW:"60", 
				valueW:"80%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"desc", updateTiming:"explicit"}});

	addItem(qtk.TitleComboBox.create({
				title:"Gender", 
				titleW:"60", 
				valueW:"60%", 
				layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
		}), {value: {path:"gender", converter:"gender"}, 
			options: {value:[{text:"female"}, {text:"male"}]}});

	addItem(qtk.TitleLabel.create({
		title:"Name(*)", 
		titleW:"60", 
		valueW:"40%", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "name");

	addItem(qtk.TitleLabel.create({
		title:"Age(*)", 
		titleW:"60", 
		valueW:"120", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "age");

	addItem(qtk.TitleLabel.create({
		title:"Desc(*)", 
		titleW:"60", 
		valueW:"80%", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "desc");

	addItem(qtk.TitleLabel.create({
		title:"Gender(*)", 
		titleW:"60", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), {value: {path:"gender", converter:"gender"}});
	
	addItem(qtk.TitleLabel.create({
		title:"Org Name(*)", 
		titleW:"120", 
		valueW:"100", 
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), "/org/name");
	
	var command = addItem(qtk.Button.create({text:"command",
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}), {"click" : {command:"dummy"}});
	
	var save = addItem(qtk.Button.create({text:"save explicit",
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	})).on(qtk.Events.CLICK, function(evt) {
		win.updateExplicit();
	});

	var summary = addItem(qtk.Label.create({text:"",
		layoutParam : qtk.SimpleLayouterParam.create({h:"80%"})
	}));

	var viewModal = createViewModal();
	listView.bindData(viewModal);
	viewModal.on(Events.PROP_CHANGE, function(evt) {
		summary.text = "change: " + evt.prop + " = " + evt.value;
	});

	win.target = listView;
	win.open();
}
