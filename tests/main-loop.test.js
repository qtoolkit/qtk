describe('test main loop', function() {
	this.timeout(3000);
   
   	var mainLoop = qtk.MainLoop.create();
	var Events = qtk.Events;

    beforeEach(mainLoop.requestRedraw.bind(mainLoop));
    it('test pre tick callback', (done) => {
        mainLoop.on(Events.PRETICK, function pretick(evt) {
            console.log("pretick")
            done();
        })
    });
    
    it('test tick callback', (done) => {
        mainLoop.on(Events.PRETICK, function pretick(evt) {
            console.log("tick")
            done();
        })
    });
    
    it('test post tick callback', (done) => {
        mainLoop.on(Events.PRETICK, function pretick(evt) {
            console.log("posttick")
            done();
        })
    });
    
});
  
