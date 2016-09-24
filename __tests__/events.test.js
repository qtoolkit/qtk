describe('Events', function() {
	var Events = qtk.Events;
	var inputEventDetail = {
		id:3,
		x:10,
		y:20,
		keyCode:108,
		delta:10,
		pointerDown:true,
		pointerDownX:30,
		pointerDownY:30,
		pointerDownTime:Date.now(),
		altKey:true, ctrlKey:true, shiftKey:true, commandKey:false};

    it('test basic', (done) => {
    	var e = new Events.Event();
		e.init("test");
		e.stopPropagation();

		var result = e.type === "test" && e.propagationStopped;
		done(result ? null : new Error("test basic failed."));
    });
    
    it('test InputEvent', (done) => {
    	var e = new Events.InputEvent();
		e.init("test", inputEventDetail);

		var result = e.type === "test" 
			&& e.commandKey === inputEventDetail.commandKey
			&& e.altKey === inputEventDetail.altKey
			&& e.shiftKey === inputEventDetail.shiftKey
			&& e.ctrlKey === inputEventDetail.ctrlKey

		done(result ? null : new Error("test InputEvent failed."));
    });
    
    it('test PointerEvent', (done) => {
    	var e = Events.PointerEvent.create("test", inputEventDetail);
		var result = e.type === "test" 
			&& e.commandKey === inputEventDetail.commandKey
			&& e.altKey === inputEventDetail.altKey
			&& e.shiftKey === inputEventDetail.shiftKey
			&& e.ctrlKey === inputEventDetail.ctrlKey
			&& e.id === inputEventDetail.id
			&& e.x === inputEventDetail.x
			&& e.y === inputEventDetail.y
			&& e.pointerDown === inputEventDetail.pointerDown
			&& e.pointerDownX === inputEventDetail.pointerDownX
			&& e.pointerDownY === inputEventDetail.pointerDownY
			&& e.pointerDownTime === inputEventDetail.pointerDownTime

		done(result ? null : new Error("test PointerEvent failed."));
    });
    
    it('test WheelEvent', (done) => {
    	var e = Events.WheelEvent.create(inputEventDetail);
		var result = e.type === Events.WHEEL
			&& e.delta === inputEventDetail.delta

		done(result ? null : new Error("test WheelEvent failed."));
    });
    
    it('test KeyEvent', (done) => {
    	var e = Events.KeyEvent.create("test", inputEventDetail);
		var result = e.type === "test" 
			&& e.commandKey === inputEventDetail.commandKey
			&& e.altKey === inputEventDetail.altKey
			&& e.shiftKey === inputEventDetail.shiftKey
			&& e.ctrlKey === inputEventDetail.ctrlKey
			&& e.keyCode === inputEventDetail.keyCode

		done(result ? null : new Error("test KeyEvent failed."));
    });
   
    it('test TickEvent', (done) => {
    	var e = Events.TickEvent.create("test");
    		e.fps = 60;
			e.time = 12345;
    		e.deltaTime = 1234;

		var result = e.type === "test" 
			&& e.fps === 60
			&& e.time === 12345
			&& e.deltaTime === 1234

		done(result ? null : new Error("test KeyEvent failed."));
    });
   
    it('test PropChangeEvent', (done) => {
    	var e = Events.PropChangeEvent.create().init(Events.CHANGE, {prop:"test",oldValue:"old",newValue:"new"});
		var result = e.type === Events.CHANGE
			&& e.prop === "test"
			&& e.oldValue === "old"
			&& e.newValue === "new"

		done(result ? null : new Error("test ChangeEvent failed."));
    });
   

    it('test DrawEvent', (done) => {
    	var e = Events.DrawEvent.get();
			e.reset(Events.DRAW, 123, 321);

		var result = e.type === Events.DRAW
			&& e.ctx === 123
			&& e.widget === 321

		done(result ? null : new Error("test DrawEvent failed."));
    });
    
    it('test DragEvent', (done) => {
    	var e = Events.DragEvent.get(Events.DRAGSTART);
			e.dataTransfer.setData("text", "data");
		var result = e.type === Events.DRAGSTART
			&& e.dataTransfer.getData("text") === "data" 

		done(result ? null : new Error("test DragEvent failed."));
    });
})
