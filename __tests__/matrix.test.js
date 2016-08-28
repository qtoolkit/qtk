describe('Matrix', function() {
	this.timeout(3000);
   
    it('test basic', (done) => {
    	var m = qtk.Matrix.create();

    	m.translate(10, 20);
    	m.scale(2, 2);
    	m.rotate(10);

    	m1 = m.clone();
		var p = m.transformPoint(30, 40);
		var x = p.x.toFixed(2);
		var y = p.y.toFixed(2);
		var str = m1.toString()
    	var result = m.equal(m1) 
    		&& x === "3.18" && y === "-79.77"
    		&& str === '["-1.68","-1.09","1.09","-1.68","10.00","20.00"]';
    	
    	done(result ? null : new Error("test basic fail."));
    });
    
    it('test invert', (done) => {
    	var m = qtk.Matrix.create();

    	m.translate(10, 20);
    	m.translate(10, 10);
    	m.scale(2, 2);
    	m.translate(-10, -10);

    	m1 = m.invert();
		var p = m1.transformPoint(30, 40);
		var x = p.x.toFixed(2);
		var y = p.y.toFixed(2);
		var str = m1.toString()
    	var result = x === "15.00" && y === "15.00";
    	
    	done(result ? null : new Error("test invert fail."));
    });
});
