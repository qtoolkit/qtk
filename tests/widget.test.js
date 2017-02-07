describe('Widget', function() {
	this.timeout(3000);
  
  	var x = 10;
  	var y = 20;
  	var z = 1;
  	var w = 30;
  	var h = 40
  	var selected = true;
	var opacity = 0.5;
	var value = 2;
	var scaleX = 2;
	var scaleY = 3;
	var pivotX = 0.5;
	var pivotY = 0.1;
	var rotation = 3;
	var focusable = true;
	var tips = "tips";
	var text = "text";
  	var id = "131231";
  	var name =  "mywidget";
  	var tag = "mytag";
	var mode = 2;
	var type = "button";
	var state = 3;
	var userData = "userdata";
	var app = new qtk.Application.create("test");
	function initWidget(widget) {
		widget.set({x:x, y:y, z:z, w:w, h:h, state:state, mode:mode, selected:selected, opacity:opacity});
		widget.set({scaleX:scaleX, scaleY:scaleY, pivotX:pivotX, pivotY:pivotY, rotation:rotation});
		widget.set({focusable:focusable, name:name, tag:tag, type:type, tips:tips, userData:userData});
		widget.setText(text);
		widget.setValue(value);
	}

    it('test basic attr', (done) => {
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var widget = qtk.Button.create({app:app});
			var attrs = {x:0, y:0, z:0};		
			initWidget(widget);
			widget.get(attrs);
			result = widget.app === app && widget.dirty && !widget.isWindow() && widget.x === x
				&& widget.y === y
				&& widget.z === z
				&& widget.w === w
				&& widget.h === h
				&& attrs.x === x
				&& attrs.y === y
				&& attrs.z === z
				&& widget.state === state
				&& widget.mode === mode
				&& widget.selected === selected
				&& widget.opacity === opacity
				&& widget.scaleX === scaleX
				&& widget.scaleY === scaleY
				&& widget.pivotX === pivotX
				&& widget.rotation === rotation
				&& widget.focusable === focusable
				&& widget.text === text
				&& widget.value === value 
				&& widget.name === name
				&& widget.tag === tag
				&& widget.type === type
				&& widget.tips === tips

			done(result ? null : new Error("widget basic attr."));
		});
    });
    
    it('test add/remmove/find', (done) => {
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var child = qtk.Button.create({app:app});
			var widget = qtk.Button.create({app:app});
		
			initWidget(child);
			initWidget(widget);
			child.name = "child";
			
			widget.addChild(child);
			var result = widget.children.length == 1
				&& widget.findChildByName(child.name) === child
				&& widget.findChildByName(child.name) === widget.findChildByID(child.id)
				&& widget.findChildByName(child.name) === widget.findChildByName(child.name)
			widget.removeChild(child);

			result = result && widget.children.length === 0;

			done(result ? null : new Error("widget add/remove/find."));
		});
    });
    
    it('test moveTo', (done) => {
		var widget = qtk.Button.create();
		widget.moveTo(10, 20);
		var result = widget.x === 10 && widget.y === 20;
		done(result ? null : new Error("widget moveTo."));
	});
    
    it('test resizeTo', (done) => {
		var widget = qtk.Button.create();
		widget.resizeTo(30, 40);
		var result = widget.w === 30 && widget.h === 40;
		done(result ? null : new Error("widget resizeTo."));
	});
    
    it('test moveResizeTo', (done) => {
		var widget = qtk.Button.create();
		widget.moveResizeTo(10, 20, 30, 40);
		var result = widget.x === 10 && widget.y === 20 && widget.w === 30 && widget.h === 40;

		done(result ? null : new Error("widget moveResizeTo."));
	});
  	
  	it('test padding', (done) => {
		var widget = qtk.Button.create();
		widget.padding = 4;
		var result = widget.leftPadding === widget.padding && widget.topPadding === widget.padding
			&& widget.bottomPadding === widget.padding;
		done(result ? null : new Error("padding is wrong"))
  	});
  	
  	it('test clone/toJson', (done) => {
		var widget = qtk.Button.create({w:400, h:300});
		widget.childrenLayouter = qtk.LinearLayouter.createHWithOptions({spacing:10});
		widget.addChild(qtk.Button.create({text:"button", 
			layoutParam : qtk.LinearLayouterParam.createWithOptions({w:20, h:20})
		}));

		widget.addChild(qtk.Label.create({text:"hello"}));

		var json = JSON.stringify(widget.toJson(), null, "\t");
		var cloneWidget = widget.clone();
		var cloneJson = JSON.stringify(cloneWidget.toJson(), null, "\t");

		var result = json === cloneJson;

		done(result ? null : new Error("clone wrong"))
  	});
});
  
