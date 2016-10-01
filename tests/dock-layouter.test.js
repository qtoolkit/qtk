
describe('DockLayouter', function() {
	this.timeout(3000);
	var app = new qtk.Application.create("test");
	app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});

	var win = qtk.WindowNormal.create({app:app});
	win.resizeTo(600, 600);
	win.childrenLayouter = qtk.DockLayouter.create();
   
    it('test basic', (done) => {

		var topButton = qtk.Button.create().set({text:"Top", h:50});
		topButton.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
		win.addChild(topButton);
		
		var bottomButton = qtk.Button.create().set({text:"Bottom", h:50});
		bottomButton.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.BOTTOM});
		win.addChild(bottomButton);


		var leftButton = qtk.Button.create().set({text:"Left", w:150});
		leftButton.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.LEFT});
		win.addChild(leftButton);

		var rightButton = qtk.Button.create().set({text:"Right", w:150});
		rightButton.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.RIGHT});
		rightButton.useBehavior("resizable", {all:true});
		win.addChild(rightButton);
		
		var centerButton = qtk.Button.create().set({text:"Center"});
		centerButton.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP, size:"100%"});
		win.addChild(centerButton);
		win.open();

		var result = topButton.x === 0 && topButton.y === 0 && topButton.h === 50 && topButton.w === 600
			&& bottomButton.x === 0 && bottomButton.y === 550 && topButton.h === 50 && topButton.w === 600
			&& leftButton.x === 0 && leftButton.y === 50 && leftButton.h === 500 && leftButton.w === 150
			&& rightButton.x === 450 && rightButton.y === 50 && rightButton.h === 500 && rightButton.w === 150
			&& centerButton.x === 150 && centerButton.y === 50 && centerButton.w=== 300 
			&& centerButton.h === 500 

    	done(result ? null : new Error("button x/y/w/h wrong"));
    });
    

});
  
