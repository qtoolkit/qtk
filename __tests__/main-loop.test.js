describe('test main loop', function() {
	this.timeout(3000);
   
   	var mainLoop = qtk.MainLoop.create();
	var Events = qtk.Events;

    beforeEach(mainLoop.requestRedraw.bind(mainLoop));
    it('test pre draw callback', (done) => {
        mainLoop.on(Events.PREDRAW, function predraw(evt) {
            console.log("predraw")
            done();
        })
    });
    
    it('test draw callback', (done) => {
        mainLoop.on(Events.PREDRAW, function predraw(evt) {
            console.log("draw")
            done();
        })
    });
    
    it('test post draw callback', (done) => {
        mainLoop.on(Events.PREDRAW, function predraw(evt) {
            console.log("postdraw")
            done();
        })
    });
    
});
  
