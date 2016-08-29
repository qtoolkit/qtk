
describe('SimpleLayouter', function() {
	this.timeout(3000);
	
	var win = qtk.WindowNormal.create();
	win.resize(600, 600);
	win.childrenLayouter = qtk.SimpleLayouter.create();
   
    it('test px', (done) => {
		var button = qtk.Button.create();
		button.layoutParam = qtk.SimpleLayouterParam.create("240px", "90px", "200px", "60px");
    	win.addChild(button);
		var result = button.x === 240 && button.y === 90 && button.w === 200 && button.h === 60;
    	done(result ? null : new Error("button x/y/w/h wrong"));
    });
    
    it('test min', (done) => {
		var button = qtk.Button.create();
		button.layoutParam = qtk.SimpleLayouterParam.create("240px", "90px", "200px", "60px");
    	button.layoutParam.minW = 220;
    	button.layoutParam.minH = 80;
    	win.addChild(button);
		var result = button.x === 240 && button.y === 90 && button.w === 220 && button.h === 80;
    	done(result ? null : new Error("button x/y/w/h wrong"));
    });
    
    it('test max', (done) => {
		var button = qtk.Button.create();
		button.layoutParam = qtk.SimpleLayouterParam.create("240px", "90px", "200px", "60px");
    	button.layoutParam.maxW = 120;
    	button.layoutParam.maxH = 40;
    	win.addChild(button);
		var result = button.x === 240 && button.y === 90 && button.w === 120 && button.h === 40;
    	done(result ? null : new Error("button x/y/w/h wrong"));
    });

    it('test percent', (done) => {
		var button = qtk.Button.create();
		button.layoutParam = qtk.SimpleLayouterParam.create("10%", "20%", "200px", "60px");
    	button.layoutParam.maxW = 120;
    	button.layoutParam.maxH = 40;
    	win.addChild(button);
		var result = button.x === 60 && button.y === 120 && button.w === 120 && button.h === 40;
    	done(result ? null : new Error("button x/y/w/h wrong"));
    });

    it('test minus', (done) => {
		var button = qtk.Button.create();
		button.layoutParam = qtk.SimpleLayouterParam.create("-240px", "20%", "200px", "60px");
    	button.layoutParam.maxW = 120;
    	button.layoutParam.maxH = 40;
    	win.addChild(button);
		var result = button.x === 360 && button.y === 120 && button.w === 120 && button.h === 40;
    	done(result ? null : new Error("button x/y/w/h wrong"));
    });


});
  
