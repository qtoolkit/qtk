
describe('Canvas:', function() {
	this.timeout(3000);
	var x = 100;
	var y = 200;
	var w = 400;
	var h = 300;
    var dpr = 2;

    it('test canvas size', (done) => {
    	var canvas = qtk.Canvas.create(x, y, w, h, dpr, false);
		var result = canvas.x === x && canvas.y === y && canvas.w === w && canvas.h === h;
		done(result ? null : new Error("canvas size wrong"));
    });
    
    it('test create real canvas', (done) => {
    	var canvas = qtk.Canvas.create(x, y, w, h, dpr, false);
    	var ctx = canvas.getContext("2d");
		var style = canvas.canvas.style;

		var result = ctx && parseInt(style.left) === x 
			&& parseInt(style.top) === y && parseInt(style.width) === w && parseInt(style.height) === h
			&& canvas.canvas.width === dpr * w && canvas.canvas.height === dpr * h; 

		canvas.dispose();
		done(result ? null : new Error("canvas size wrong"));
    });
    
    it('test dispatch event', (done) => {
    	var detail = {x:300, y:300};
    	var event = new CustomEvent("qtk-pointer-down", {detail : {x:detail.x, y:detail.y}});
    	var canvas = qtk.Canvas.create(x, y, w, h, dpr, false);
    	var ctx = canvas.getContext("2d");
    	canvas.on("qtk-pointer-down", evt => {
			var result = evt.detail.x === detail.x  && evt.detail.y === detail.y;;
			done(result ? null : new Error("dispatch event wrong"));
			canvas.dispose();
		});
    	canvas.canvas.dispatchEvent(event);
    });
});
