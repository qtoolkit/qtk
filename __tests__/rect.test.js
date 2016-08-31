describe('Rect', function() {
	var Rect = qtk.Rect;

    it('test create', (done) => {
    	var r = Rect.create(1, 2, 3, 4);
    	var result = r.x === 1 && r.y === 2 && r.w === 3 && r.h === 4;
		done(result ? null : new Error("create failed."));
    });
    
    it('test clone', (done) => {
    	var r = Rect.create(1, 2, 3, 4);
    	var r1 = r.clone();
    	var result = r1.equal(r);
		done(result ? null : new Error("clone failed."));
    });
    
    it('test copy', (done) => {
    	var r = Rect.create(1, 2, 3, 4);
    	var r1 = Rect.create();
    	r1.copy(r);
    	var result = r1.equal(r);
		done(result ? null : new Error("copy failed."));
    });
    
    it('test merge', (done) => {
    	var r = Rect.create(10, 20, 30, 40);
    	var r1 = Rect.create(0, 15, 40, 10);
    	r.merge(r1);
    	var result = r.x === 0 && r.y === 15 && r.w === 40 && r.h === 45;
		done(result ? null : new Error("merge failed."));
    });
})
