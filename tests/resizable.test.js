
describe('Resizable', function() {
	var Events = qtk.Events;
	var app = new qtk.Application.create("test");
	app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
	var win = qtk.WindowNormal.create(app, {hasOwnCanvas:true});
	var widget = qtk.Button.create();
	widget.moveResizeTo(0, 0, 100, 100);
	win.addChild(widget);
	widget.useBehavior("resizable", {all:true, animateDuration:0});	
	var matrixStack = qtk.MatrixStack.create();

	function testResize(name, done, downX, downY, moveX, moveY, x, y, w, h) {
		widget.moveResizeTo(0, 0, 100, 100);
    	widget.on(Events.POINTER_UP, evt => {
			var result = widget.x === x && widget.y === y && widget.w === w && widget.h === h;
	
			done(result ? null : new Error("resize " + name));
		});

    	var detail = {PointerDown:true, pointerDownX:downX, pointerDownY:downY, x:downX, y:downY, id:1};	
    	var e = Events.PointerEvent.create(Events.POINTER_DOWN, detail);
		widget.dispatchPointerDown(e, matrixStack);
		detail.x = moveX;
		detail.y = moveY;
    	e = Events.PointerEvent.create(Events.POINTER_MOVE, detail);
		widget.dispatchPointerMove(e, matrixStack);
    	e = Events.PointerEvent.create(Events.POINTER_UP, detail);
		widget.dispatchPointerMove(e, matrixStack);
	}
    it('test Resizable', (done) => {
    	testResize("nw", done, 0, 0, 10, 10, 10, 10, 90, 90);
    });
    it('test Resizable', (done) => {
    	testResize("n", done, 10, 0, 10, 10, 0, 10, 100, 90);
    });
    it('test Resizable', (done) => {
    	testResize("ne", done, 100, 0, 90, 10, 0, 10, 90, 90);
    });
    it('test Resizable', (done) => {
    	testResize("e", done, 100, 10, 90, 10, 0, 0, 90, 100);
    });
    it('test Resizable', (done) => {
    	testResize("se", done, 100, 100, 90, 90, 0, 0, 90, 90);
    });
    it('test Resizable', (done) => {
    	testResize("s", done, 90, 100, 90, 90, 0, 0, 100, 90);
    });
    it('test Resizable', (done) => {
    	testResize("sw", done, 0, 100, 10, 90, 10, 0, 90, 90);
    });
    it('test Resizable', (done) => {
    	testResize("w", done, 0, 90, 10, 90, 10, 0, 90, 100);
    });
 })

