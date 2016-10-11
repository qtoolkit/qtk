
var imageURL = "/demos/assets/test.jpg";
function addPage(propertySheets, title) {
	var page = qtk.PropertyPage.create();
	
	page.addEdit("Name", "QTK"); 
	page.addEdit("Age", "100", "Age", "number"); 
	page.addChoosableEdit("URL", "https://qtoolkit.github.io/demos/index.html").onChoose = function() {
		this.value = "choose";
	};
	page.addTextArea("Desc", "QToolKit"); 
	page.addSlider("Opacity", 0.3); 
	page.addComboBox("Color", "Red").addOption("Red").addOption("Green").addOption("Blue"); 
	page.addComboBoxEditable("Color", "Red").addOption("Red").addOption("Green").addOption("Blue"); 
	page.addLabel("Address", "China"); 
	page.addRange("Range", 10, 100).on(qtk.Events.CHANGING, function(evt) {
		console.log(this.value);
	}); 

	page.addGroupBegin("Vector");
	page.addVector2("Vector2", 10, 100).on(qtk.Events.CHANGING, function(evt) {
		console.log(this.value);
	}); 
	
	page.addVector3("Vector3", 10, 100, 1000).on(qtk.Events.CHANGING, function(evt) {
		console.log(this.value);
	}); 
	page.addGroupEnd();
	
	propertySheets.addPage(title, page);
}

function addPageFromJson(propertySheets, title) {
	var page = qtk.PropertyPage.create({h:500});
	propertySheets.addPage(title, page);

	var json = [
		{type:"number", name:"Age", value:"100", desc:"age"},
		{type:"text", name:"Name", value:"QTK"},
		{type:"text-readonly", name:"Desc", value:"QToolKit"},
		{type:"vector2", name:"Point", value:{x:10, y:20}},
		{type:"vector3", name:"Point3D", value:{x:10, y:20, z:30}},
		{type:"range", name:"Range", value:{first:100, second:1000}},
		{type:"options", name:"Color", value:"Green", options:["Green", "Red", "Blue"]},
		{type:"slider", name:"Opacity", value:0.5}
	];

	page.initWithJson(json);
}

function addPageFromJsonWatch(propertySheets, title) {
	var page = qtk.PropertyPage.create({h:560});
	propertySheets.addPage(title, page);

	var data = {
		name:"QTK",
		age:100,
		desc:"QToolKit",
		point:{x:100, y:200},
		point3d:{x:1, y:2, z:3},
		range:{first:100, second:200},
		color:"Red",
		opacity:0.5
	};

	var objectConverter = {
		convert:function(data) {
			return JSON.stringify(data);
		},
		convertBack:function(data) {
			return JSON.parse(data);
		}
	}

	var vm = qtk.ViewModal.create(data);

	vm.registerValueConverter("object", objectConverter);
	var json = [
		{type:"number", name:"Age", desc:"age", path:"age"},
		{type:"text", name:"Name", desc:"name", path:"name"},
		{type:"text-readonly", name:"Desc", path:"desc"},
		{type:"line", name:"Point"},
		{type:"vector2", name:"Point", path:"point"},
		{type:"vector3", name:"Point3D", path:"point3d"},
		{type:"line", name:""},
		{type:"range", name:"Range", path:"range"},
		{type:"options", name:"Color", path:"color", options:["Green", "Red", "Blue"]},
		{type:"slider", name:"Opacity", path:"opacity"},
		{type:"text-readonly", name:"Name(*)", path:"name"},
		{type:"text-readonly", name:"Age(*)", path:"age"},
		{type:"text-readonly", name:"Point(*)", path:"point", converter:"object"},
		{type:"text-readonly", name:"Point3D(*)", path:"point3d", converter:"object"},
		{type:"text-readonly", name:"Range(*)", path:"range", converter:"object"},
		{type:"text-readonly", name:"Opacity(*)", path:"opacity"},
		{type:"text-readonly", name:"Color(*)", path:"color"}
	];

	
	var json2 = [
		{type:"number", name:"Age", desc:"age", path:"age"},
		{type:"text", name:"Name", path:"name"}
	];

	var propsDesc = qtk.PropsDesc.create(json);

	setTimeout(function() {
		propsDesc.parse(json2);
		propsDesc.notifyChange();
	}, 5000);
	page.initWithPropsDesc(propsDesc);
	page.bindData(vm);
}

function addPageDataBinding(propertySheets, title) {
	var page = qtk.PropertyPage.create({h:560});
	propertySheets.addPage(title, page);

	var data = {
		name:"QTK",
		age:100,
		desc:"QToolKit",
		point:{x:100, y:200},
		point3d:{x:1, y:2, z:3},
		range:{first:100, second:200},
		color:"Red",
		opacity:0.5
	};

	var objectConverter = {
		convert:function(data) {
			return JSON.stringify(data);
		},
		convertBack:function(data) {
			return JSON.parse(data);
		}
	}

	var vm = qtk.ViewModal.create(data);

	vm.registerValueConverter("object", objectConverter);
	var json = [
		{type:"number", name:"Age", desc:"age", path:"age"},
		{type:"text", name:"Name", desc:"name", path:"name"},
		{type:"text-readonly", name:"Desc", path:"desc"},
		{type:"line", name:"Point"},
		{type:"vector2", name:"Point", path:"point"},
		{type:"vector3", name:"Point3D", path:"point3d"},
		{type:"line", name:""},
		{type:"range", name:"Range", path:"range"},
		{type:"options", name:"Color", path:"color", options:["Green", "Red", "Blue"]},
		{type:"slider", name:"Opacity", path:"opacity"},
		{type:"text-readonly", name:"Name(*)", path:"name"},
		{type:"text-readonly", name:"Age(*)", path:"age"},
		{type:"text-readonly", name:"Point(*)", path:"point", converter:"object"},
		{type:"text-readonly", name:"Point3D(*)", path:"point3d", converter:"object"},
		{type:"text-readonly", name:"Range(*)", path:"range", converter:"object"},
		{type:"text-readonly", name:"Opacity(*)", path:"opacity"},
		{type:"text-readonly", name:"Color(*)", path:"color"}
	];

	page.initWithJson(json);
	page.bindData(vm);
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var propertySheets = qtk.PropertySheets.create({padding:1, titleH:30});
	propertySheets.layoutParam = qtk.SimpleLayouterParam.create({x:"10%", y:"10%", w:"80%", h:"80%"});
	win.addChild(propertySheets);

	addPage(propertySheets, "Normal");
	addPageFromJsonWatch(propertySheets, "Create From Json Watch");
	addPageFromJson(propertySheets, "Create From Json");
	addPageDataBinding(propertySheets, "Data Binding");
	
	win.open();
}
