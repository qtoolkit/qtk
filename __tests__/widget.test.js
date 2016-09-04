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
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var widget = qtk.Widget.create(app);
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
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var child = qtk.Widget.create(app);
			var widget = qtk.Widget.create(app);
		
			initWidget(child);
			initWidget(widget);
			child.name = "child";
			
			widget.addChild(child);
			var result = widget.children.length == 1
				&& widget.find(child.name) === child
				&& widget.find(child.name) === widget.findChildByID(child.id)
				&& widget.find(child.name) === widget.findChildByName(child.name)
			widget.removeChild(child);

			result = result && widget.children.length === 0;

			done(result ? null : new Error("widget add/remove/find."));
		});
    });
    
    it('test moveTo', (done) => {
		var widget = qtk.Widget.create();
		widget.moveTo(10, 20);
		var result = widget.x === 10 && widget.y === 20;
		done(result ? null : new Error("widget moveTo."));
	});
    
    it('test resizeTo', (done) => {
		var widget = qtk.Widget.create();
		widget.resizeTo(30, 40);
		var result = widget.w === 30 && widget.h === 40;
		done(result ? null : new Error("widget resizeTo."));
	});
    
    it('test moveResizeTo', (done) => {
		var widget = qtk.Widget.create();
		widget.moveResizeTo(10, 20, 30, 40);
		var result = widget.x === 10 && widget.y === 20 && widget.w === 30 && widget.h === 40;

		done(result ? null : new Error("widget moveResizeTo."));
	});
});
  
