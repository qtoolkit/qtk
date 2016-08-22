describe('test main loop', function() {
	this.timeout(3000);
    
    beforeEach(qtk.mainLoop.requestRedraw);
    it('test pre draw callback', (done) => {
        qtk.mainLoop.on(qtk.mainLoop.PREDRAW, function predraw(evt) {
            console.log("predraw")
            done();
        })
    });
    
    it('test draw callback', (done) => {
        qtk.mainLoop.on(qtk.mainLoop.PREDRAW, function predraw(evt) {
            console.log("draw")
            done();
        })
    });
    
    it('test post draw callback', (done) => {
        qtk.mainLoop.on(qtk.mainLoop.PREDRAW, function predraw(evt) {
            console.log("postdraw")
            done();
        })
    });
    
});
  
