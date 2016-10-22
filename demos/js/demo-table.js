
function genData() {
	var data = [];
	for(var i = 0; i < 1000; i++) {
		data.push({name:"name"+i, age:i, address:"QToolKit"});
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

	var table = qtk.Table.create();
	table.layoutParam = qtk.SimpleLayouterParam.create({w:320, h:"100%"});
	
	win.addChild(table);

	table.addColumn(qtk.TableColInfo.create("Name", "label", 100, {dataBindingRule:"name"}));
	table.addColumn(qtk.TableColInfo.create("Age", "edit", 100, {dataBindingRule:"age"}));
	table.addColumn(qtk.TableColInfo.create("Address", "edit", 100, {dataBindingRule:"address"}));
	
	var viewModal = createViewModal();
	table.bindData(viewModal);


/*	
	win.childrenLayouter = qtk.DockLayouter.create();
	var indexBar = qtk.TableIndex.create();
	indexBar.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.LEFT, size:30});
	for(var i = 0; i < 20; i++) {
		var item = qtk.TableIndexItem.create({h:30, text:i, sortable:true});
		indexBar.addChild(item);
	}
	indexBar.offsetY = 50;
	win.addChild(indexBar);
	
	var header = qtk.TableHeader.create();
	header.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP, size:30});
	for(var i = 0; i < 20; i++) {
		var item = qtk.TableHeaderItem.create({w:100, text:"Header"+i, sortable:true});
		header.addChild(item);
	}
	header.offsetX = 100;
	win.addChild(header);
*/	
	win.open();
}
