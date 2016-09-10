
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var bar = qtk.ProgressBar.create();
	bar.value = 0.3;
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"10px", w:"50%", h:"30px"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	var bar = qtk.Slider.create();
	bar.value = 0.3;
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"50px", w:"50%", h:"30px"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	var bar = qtk.ProgressBar.create();
	bar.set({value:0.3, barType:qtk.ProgressBarType.VERTICAL});;
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"20px", y:"100px", w:"30px", h:"50%"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	var bar = qtk.Slider.create();
	bar.set({value:0.3, barType:qtk.ProgressBarType.VERTICAL});;
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"100px", y:"100px", w:"30px", h:"50%"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	var bar = qtk.ProgressBar.create();
	bar.set({value:0.1, barType:qtk.ProgressBarType.CIRCLE});;
	bar.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"middle", w:"60px", h:"60px"});
	bar.childrenLayouter = qtk.SimpleLayouter.create();
	win.addChild(bar);
	
	win.open();
}
