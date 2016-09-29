
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var Label = qtk.Label;
	var Events = qtk.Events;
	var Image = qtk.Image;
	var ListView = qtk.ListView;
	var Events = qtk.Events;
	var WindowNormal= qtk.WindowNormal;
	var TitleContent = qtk.TitleContent;
	var SimpleLayouter = qtk.SimpleLayouter;
	var SimpleLayouterParam = qtk.SimpleLayouterParam;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = SimpleLayouter.create();
	
	var titleContent = TitleContent.create({movable:true});
	titleContent.layoutParam = SimpleLayouterParam.create({x:"center", w:"50%", h:"50%"});
	win.addChild(titleContent);

	titleContent.titleWidget = Label.create({text:"draggable && collapsable", styleType:"dialog.title-bg"});
	titleContent.contentWidget = Image.create({value:imageURL});
	titleContent.titleWidget.on(Events.CLICK, function(evt) {
		titleContent.collapsed = !titleContent.collapsed;
	});

	win.open();
}
