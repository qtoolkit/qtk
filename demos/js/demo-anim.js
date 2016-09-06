
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var Events = qtk.Events;

	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var button = qtk.Button.create();
	button.set({name:"button1", text:"moveTo(0, 100)"});
	button.layoutParam = qtk.SimpleLayouterParam.create("60", "30px", "200", "60px");
	button.on(Events.CLICK, function(evt){
		image.moveTo(0, 100, 1000).onComplete(function() {
			console.log("done");			
		}).easing(TWEEN.Easing.Quadratic.In);;
	});
	win.addChild(button);

	var button = qtk.Button.create();
	button.set({name:"button2", text:"moveTo(400, 400)", styleType:"button-blue"});
	button.layoutParam = qtk.SimpleLayouterParam.create("-260", "30px", "200", "60px");
	button.on(Events.CLICK, function(evt) {
		image.moveTo(400, 400, 1000).onComplete(function() {
			console.log("done");			
		}).easing(TWEEN.Easing.Quadratic.Out);;
	});
	win.addChild(button);
	
	var image = qtk.Image.create();
	image.set({name:"", value:imageURL});
	image.layoutParam = qtk.SimpleLayouterParam.create("40%", "40%", "20%", "20%");
	image.scaleTo(2, 2, 2000).repeat(500).yoyo(true);
	win.addChild(image);
	
	win.open();
}

