
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var bar1 = qtk.ProgressBar.create();
	bar1.value = 0.3;
	bar1.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	bar1.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar1);
	
	var slider1 = qtk.Slider.create();
	slider1.value = 0.3;
	slider1.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"50px", w:"50%", h:"30px"});
	slider1.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(slider1);
	slider1.on(qtk.Events.CHANGING, function(evt) {
		bar1.value = this.value;		
	});
	slider1.on(qtk.Events.CHANGE, function(evt) {
		bar1.value = this.value;
		console.log("CHANGE:" + this.value);
	});

	var bar2 = qtk.ProgressBar.create();
	bar2.set({value:0.3, barType:qtk.ProgressBarType.VERTICAL});;
	bar2.layoutParam = qtk.SimpleLayouterParam.create({x:"20px", y:"100px", w:"30px", h:"50%"});
	bar2.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar2);

	var slider2 = qtk.Slider.create();
	slider2.set({value:0.3, barType:qtk.ProgressBarType.VERTICAL});;
	slider2.layoutParam = qtk.SimpleLayouterParam.create({x:"100px", y:"100px", w:"30px", h:"50%"});
	slider2.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(slider2);
	slider2.on(qtk.Events.CHANGING, function(evt) {
		bar2.value = this.value;		
		circle.value = this.value;		
	});
	slider2.on(qtk.Events.CHANGE, function(evt) {
		bar2.value = this.value;
		circle.value = this.value;		
		console.log("CHANGE:" + this.value);
	});
	
	var circle = qtk.ProgressBar.create();
	circle.set({value:0.1, barType:qtk.ProgressBarType.CIRCLE});;
	circle.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"60px", h:"60px"});
	circle.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(circle);
	
	win.open();
}
