var imageURL = "/demos/assets/icons/@density/" + "favor.normal.png";
function genData() {
	var data = [];
	for(var i = 0; i < 10; i++) {
		data.push({name:"name"+i, photo:imageURL});
	}

	return data;
}

function createTemplateItem() {
	var templateItem = qtk.ListItem.create();
	
	templateItem.childrenLayouter = qtk.SimpleLayouter.createWithOptions();
	var nameLabel = qtk.Label.create({
		layoutParam:qtk.SimpleLayouterParam.createWithOptions({w:"80%", h:"100%", y:"center"})});
	templateItem.addChild(nameLabel);
	nameLabel.dataBindingRule = "name";

	var photoImage = qtk.Image.create({
		layoutParam:qtk.SimpleLayouterParam.createWithOptions({x:"-40", y:"center", w:30, h:30})});
	photoImage.dataBindingRule = "photo";
	templateItem.addChild(photoImage);
	templateItem.dataBindingRule = {click:{command:"activate"}}
	return templateItem;
}

function createViewModel() {
	var viewModel = qtk.CollectionViewModel.create(genData());
	viewModel.registerCommand("add", qtk.DelegateCommand.create(function() {
		viewModel.addItem({name:"jim"+Date.now(), photo:imageURL});
	}));;
	
	viewModel.registerCommand("remove", qtk.DelegateCommand.create(function() {
		viewModel.removeItem(viewModel.current);
	}));;

	return viewModel;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.createWithOptions();

	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, 
		itemH : 40, 
		templateItem: createTemplateItem(),
		layoutParam : qtk.SimpleLayouterParam.createWithOptions({x:"25%", y:"25%", w:"50%", h:"50%"})
	});
	win.addChild(listView);
	
	var group = qtk.Group.create({
		childrenLayouter : qtk.GridLayouter.createWithOptions({cols:3, rows:1}),
		layoutParam : qtk.SimpleLayouterParam.createWithOptions({y:"-50", w:"100%", h:"40"})
	});
	win.addChild(group);

	var viewModel = createViewModel();
	var addButton = qtk.Button.create({text:"Add",
		dataBindingRule : {click:{command:"add"}},
		layoutParam : qtk.GridLayouterParam.createWithOptions({margin:2})
	}).bindData(viewModel);

	var removeButton = qtk.Button.create({text:"Remove",
		dataBindingRule : {click:{command:"remove"}},
		layoutParam : qtk.GridLayouterParam.createWithOptions({margin:2})
	}).bindData(viewModel);
	
	var currentName = qtk.Label.create({text:"current",
		dataBindingRule : "name",
		layoutParam : qtk.GridLayouterParam.createWithOptions({margin:2})
	}).bindData(viewModel);
	
	group.addChild(addButton);
	group.addChild(removeButton);
	group.addChild(currentName);

	listView.bindData(viewModel);
	
	win.open();
}
