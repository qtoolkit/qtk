
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var group = qtk.TabButtonGroup.create();
	group.autoExpand = true;
	group.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	win.addChild(group);

	var tabButton = qtk.TabButton.create();
	tabButton.set({value:true, text:"Home", closable:true, closeButtonAtLeft:true});;
	group.addChild(tabButton);

	tabButton = qtk.TabButton.create();
	tabButton.set({text:"Favor", closable:true});;
	group.addChild(tabButton);
	
	var group = qtk.TabButtonGroup.create();
	group.autoExpand = true;
	group.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"100px", w:"50%", h:"30px"});
	win.addChild(group);

	var tabButton = qtk.TabButton.create();
	tabButton.set({value:true, text:"Home"});;
	tabButton.setIcons("/demos/assets/icons/x2/home.normal.png", "/demos/assets/icons/x2/home.current.png");
	group.addChild(tabButton);

	tabButton = qtk.TabButton.create();
	tabButton.set({text:"Favor"});;
	tabButton.setIcons("/demos/assets/icons/x2/favor.normal.png", "/demos/assets/icons/x2/favor.current.png");
	group.addChild(tabButton);
	
	var group = qtk.TabButtonGroup.create();
	group.autoExpand = false;
	group.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"200px", w:"50%", h:"60px"});
	win.addChild(group);
	
	tabButton = qtk.TabButton.create();
	tabButton.set({text:"Home", orientation:qtk.Orientation.V});;
	tabButton.setIcons("/demos/assets/icons/x2/home.normal.png", "/demos/assets/icons/x2/home.current.png");
	group.addChild(tabButton);
	
	tabButton = qtk.TabButton.create();
	tabButton.set({text:"Favor", orientation:qtk.Orientation.V});;
	tabButton.setIcons("/demos/assets/icons/x2/favor.normal.png", "/demos/assets/icons/x2/favor.current.png");
	group.addChild(tabButton);
	
	button = qtk.Button.create();
	button.set({text:"OK", styleType:"button-red"});
	button.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"-100px", w:"50%", h:"30px"});
	win.addChild(button);
	
	win.open();
}
