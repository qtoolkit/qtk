
function onReady(app) {
	var TWEEN = qtk.TWEEN;
	var Events = qtk.Events;
	var Button = qtk.Button;
	var Image = qtk.Image;
	var WindowNormal = qtk.WindowNormal;

	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.w, h:vp.h, childrenLayouter:"simple"});

	var button = Button.create({name:"button1", text:"moveTo(left, top)"});
	button.layoutParam = win.createChildLayoutParam({x:"60", y:"30px", w:"200", h:"60px"});
	button.on(Events.CLICK, function(evt){
		image.moveTo(0, 0, 1000).onComplete(function() {
			console.log("done");			
		}).easing(TWEEN.Easing.Quadratic.In);;
	});
	win.addChild(button);

	button = Button.create({name:"button2", text:"moveTo(right, bottom)"});
	button.layoutParam = win.createChildLayoutParam({x:"-260", y:"30px", w:"200", h:"60px"});
	button.on(Events.CLICK, function(evt) {
		var x = vp.w-image.w;
		var y = vp.h-image.h;
		image.moveTo(x, y, 1000).onComplete(function() {
			console.log("done");			
		}).easing(TWEEN.Easing.Quadratic.Out);;
	});
	win.addChild(button);
	
	var image = Image.create();
	var imageURL = "/demos/assets/test.jpg";
	image.set({name:"image", value:imageURL});
	image.layoutParam = win.createChildLayoutParam({x:"40%", y:"40%", w:"20%", h:"20%"});
	image.scaleTo(2, 2, 2000).repeat(500).yoyo(true);
	win.addChild(image);
	
	win.open();
}

