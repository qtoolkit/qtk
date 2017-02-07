
function genData() {
	var data = [];
	for(var i = 0; i < 500; i++) {
		data.push({
			name:"QToolKit"+i, 
			age:i, 
			gender:i%2?"Male":"Female",
			address:"https://qtoolkit.github.io/demos/index.html"
		});
	}

	return data;
}

function createViewModel(table) {
	var viewModel = qtk.CollectionViewModel.create(genData());
	
	viewModel.bindingMode = qtk.BindingMode.ONE_WAY;
	var nameInc = qtk.ObjectPropComparator.create(qtk.StringComparator.create(), "name");
	var nameDec = qtk.RevertComparator.create(nameInc);
	viewModel.registerComparator("name.inc", nameInc);
	viewModel.registerComparator("name.dec", nameDec);
	
	var ageInc = qtk.ObjectPropComparator.create(qtk.NumberComparator.create(), "age");
	var ageDec = qtk.RevertComparator.create(ageInc);
	viewModel.registerComparator("age.inc", ageInc);
	viewModel.registerComparator("age.dec", ageDec);
	viewModel.comparator = "age.dec";
	table.on(qtk.Events.SORT, function(evt) {
		var comparator = evt.key + (evt.isDec ? ".dec" : ".inc");
		viewModel.comparator = comparator;
	});

	return viewModel;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	
	win.childrenLayouter = qtk.SimpleLayouter.createWithOptions();

	var indexBarW = 80;
	var table = qtk.Table.create({indexBarW:indexBarW});
	table.layoutParam = qtk.SimpleLayouterParam.createWithOptions({w:"100%", h:"100%"});
	
	win.addChild(table);
	
	table.addColumn(qtk.TableColInfo.create("Name", "label", 100, {dataBindingRule:"name"}, "name"));
	table.addColumn(qtk.TableColInfo.create("Age", "edit", 100, 
				{inputType:"number", dataBindingRule:"age"}, "age"));
	table.addColumn(qtk.TableColInfo.create("Gender", "combo-box", 100, {dataBindingRule:"gender",
		options:[{text:"Male"}, {text:"Female"}]
	}));
	var w = table.w - 310 - indexBarW;
	table.addColumn(qtk.TableColInfo.create("Address", "edit", w, {dataBindingRule:"address"}));
	
	var viewModel = createViewModel(table);
	
	table.bindData(viewModel);

	win.target = table;
	win.open();
}
