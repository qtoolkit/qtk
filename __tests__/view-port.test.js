
describe('viewport', function() {
	this.timeout(3000);
    
    it('width/height/density', (done) => {
    	var vp = qtk.viewport;
    	vp.init(800, 600, 2);
		var result = vp.width === 800 && vp.height === 600 && vp.density === 2;
		done(result ? null : "view port wrong");
	});
});
