
describe('Movable', function() {
	var Events = qtk.Events;
	var app = new qtk.Application.create("test");
	app.init({themeDataURL:"/base/www/theme/default/theme.json"});
	var win = qtk.WindowNormal.create(app, {hasOwnCanvas:true});
	var widget = qtk.Widget.create();
	widget.moveResizeTo(0, 0, 100, 100);
	win.addChild(widget);
	widget.useBehavior("movable");	
	var matrixStack = qtk.MatrixStack.create();

    it('test Movable', (done) => {
    	widget.on(Events.POINTER_UP, evt => {
			var result = widget.x === 10 && widget.y === 10;
	
			done(result ? null : new Error("Movable"));
		});
    	var detail = {PointerDown:true, pointerDownX:10, pointerDownY:10, x:10, y:10, id:1};	
    	var e = Events.PointerEvent.create(Events.POINTER_DOWN, detail);
		widget.dispatchPointerDown(e, matrixStack);
		detail.x = 20;
		detail.y = 20;
    	e = Events.PointerEvent.create(Events.POINTER_MOVE, detail);
		widget.dispatchPointerMove(e, matrixStack);
    	e = Events.PointerEvent.create(Events.POINTER_UP, detail);
		widget.dispatchPointerMove(e, matrixStack);
    });
 })

