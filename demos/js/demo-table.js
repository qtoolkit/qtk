
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

function createViewModal() {
	var viewModal = qtk.CollectionViewModal.create(genData());

	return viewModal;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var table = qtk.Table.create({indexBarW:80});
	table.layoutParam = qtk.SimpleLayouterParam.create({w:"100%", h:"100%"});
	
	win.addChild(table);

	table.addColumn(qtk.TableColInfo.create("Name", "label", 100, {dataBindingRule:"name"}));
	table.addColumn(qtk.TableColInfo.create("Age", "edit", 100, {inputType:"number", dataBindingRule:"age"}));
	table.addColumn(qtk.TableColInfo.create("Gender", "combo-box", 100, {dataBindingRule:"gender",
		options:[{text:"Male"}, {text:"Female"}]
	}));
	table.addColumn(qtk.TableColInfo.create("Address", "edit", table.w-320, {dataBindingRule:"address"}));
	
	var viewModal = createViewModal();
	table.bindData(viewModal);

	win.open();
}
