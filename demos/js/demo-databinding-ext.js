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
	
	templateItem.childrenLayouter = qtk.SimpleLayouter.create();
	var nameLabel = qtk.Label.create({
		layoutParam:qtk.SimpleLayouterParam.create({w:"80%", h:"100%", y:"center"})});
	templateItem.addChild(nameLabel);
	nameLabel.setDataBindingRule("name");

	var photoImage = qtk.Image.create({
		layoutParam:qtk.SimpleLayouterParam.create({x:"-40", y:"center", w:30, h:30})});
	photoImage.setDataBindingRule("photo");
	templateItem.addChild(photoImage);

	return templateItem;
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, 
		itemH : 40, 
		templateItem: createTemplateItem(),
		layoutParam : qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"})
	});
	win.addChild(listView);
	
	var group = qtk.Group.create({
		childrenLayouter : qtk.GridLayouter.create({cols:3, rows:1}),
		layoutParam : qtk.SimpleLayouterParam.create({y:"-50", w:"100%", h:"40"})
	});
	win.addChild(group);

	var addButton = qtk.Button.create({text:"Add",
		layoutParam : qtk.GridLayouterParam.create({margin:2})
	});

	var removeButton = qtk.Button.create({text:"Remove",
		layoutParam : qtk.GridLayouterParam.create({margin:2})
	});
	
	group.addChild(addButton);
	group.addChild(removeButton);

	var viewModal = qtk.CollectionViewModal.create(genData());
	listView.bindData(viewModal);
	
	win.open();
}
