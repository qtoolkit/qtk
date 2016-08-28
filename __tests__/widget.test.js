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
		widget.x = x;
		widget.y = y;
		widget.z = z;
		widget.w = w;
		widget.h = h;
		widget.state = state;
		widget.mode = mode;
		widget.selected = selected;
		widget.opacity = opacity;
		widget.scaleX = scaleX;
		widget.scaleY = scaleY;;
		widget.pivotX = pivotX;
		widget.rotation = rotation;;
		widget.focusable = focusable;
		widget.name = name;
		widget.tag = tag;
		widget.type = type;
		widget.tips = tips;
		widget.userData = userData;
		widget.setText(text);
		widget.setValue(value);
	}

    it('test basic attr', (done) => {
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var widget = qtk.Widget.create(app);
		
			initWidget(widget);
			result = widget.app === app && widget.dirty && !widget.isWindow() && widget.x === x
				&& widget.y === y
				&& widget.z === z
				&& widget.w === w
				&& widget.h === h
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
});
  
