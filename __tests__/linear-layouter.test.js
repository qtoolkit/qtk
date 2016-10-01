describe('LinearLayouter', function() {
	this.timeout(3000);
   
	function addButton(group, z, w, h, spacing, align) {
		var button = qtk.Button.create().set({text:z.toString(),
			layoutParam: qtk.LinearLayouterParam.create({w:w, h:h, spacing:spacing, align:align, position:z})
		});
		group.addChild(button);

		return button;
	}

	var app = new qtk.Application.create("test");
	app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:1000, h:1000, hasOwnCanvas:true});

	win.childrenLayouter = qtk.DockLayouter.create();

	var topGroup = qtk.Group.create().set({text:"Top", h:60});
	topGroup.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	win.addChild(topGroup);
	topGroup.childrenLayouter = qtk.LinearLayouter.createH({spacing:10});
	var h1 = addButton(topGroup, 1, "60", "50%", 10, qtk.Align.TOP);
	var h2 = addButton(topGroup, 2, "60", "50%", 10, qtk.Align.MIDDLE);
	var h3 = addButton(topGroup, 3, "60", "50%", 10, qtk.Align.BOTTOM);

	var h01 = addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);
	var h02 = addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);
	var h03 = addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);

	var hm1 = addButton(topGroup, -1, "60", "50%", 10, qtk.Align.MIDDLE);
	var hm2 = addButton(topGroup, -2, "60", "50%", 10, qtk.Align.MIDDLE);
	var hm3 = addButton(topGroup, -3, "60", "50%", 10, qtk.Align.MIDDLE);

	var leftGroup = qtk.Group.create().set({text:"Left", w:120});
	leftGroup.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.LEFT});
	leftGroup.childrenLayouter = qtk.LinearLayouter.createV({spacing:10});
	win.addChild(leftGroup);

	var v1 = addButton(leftGroup, 1, "50%", "30", 10, qtk.Align.LEFT);
	var v2 = addButton(leftGroup, 2, "50%", "30", 10, qtk.Align.CENTER);
	var v3 = addButton(leftGroup, 3, "50%", "30", 10, qtk.Align.RIGHT);
	
	var v01 = addButton(leftGroup, 0, "50%", "30", 10, qtk.Align.CENTER);
	var v02 = addButton(leftGroup, 0, "50%", "30", 10, qtk.Align.CENTER);
	
	var vm1 = addButton(leftGroup, -1, "50%", "30", 10, qtk.Align.CENTER);
	var vm2 = addButton(leftGroup, -2, "50%", "30", 10, qtk.Align.CENTER);
	var vm3 = addButton(leftGroup, -3, "50%", "30", 10, qtk.Align.CENTER);

	win.open();
    
    it('test Horizonal', (done) => {
		var result = h1.x === 0 && h1.y === 0 && h1.w === 60 && h1.h === 30
			&& h2.x === 70 && h2.y === 15 && h2.w === 60 && h2.h === 30
			&& h3.x === 140 && h3.y === 30 && h3.w === 60 && h3.h === 30
			&& h01.x === 220 && h01.y === 15 && h01.w === 60 && h01.h === 30
			&& h02.x === 300 && h02.y === 15 && h02.w === 60 && h02.h === 30
			&& h03.x === 380 && h03.y === 15 && h03.w === 60 && h03.h === 30
			&& hm1.x === 940
			&& hm2.x === 860
			&& hm3.x === 790

    	done(result ? null : new Error("button x/y/w/h wrong"));
    });
    
    it('test Vertical', (done) => {
		var result = v1.x === 0 && v1.y === 0 && v1.w === 60 && v1.h === 30
			&& v2.x === 30 && v2.y === 40 && v2.w === 60 && v2.h === 30
			&& v3.x === 60 && v3.y === 80 && v3.w === 60 && v3.h === 30
			&& v01.x === 30 && v01.y === 120 && v01.w === 60 && v01.h === 30
			&& v02.x === 30 && v02.y === 160 && v02.w === 60 && v02.h === 30
			&& vm1.y === 910 
			&& vm2.y === 860
			&& vm3.y === 820

    	done(result ? null : new Error("button x/y/w/h wrong"));
    });

});
  
