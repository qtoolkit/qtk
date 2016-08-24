describe('MatrixStack', function() {
	this.timeout(3000);
   
    it('test matrix stack', (done) => {
    	var m = qtk.MatrixStack.create();

    	m.translate(10, 20);
		m.push();
    	m.scale(2, 2);
		m.push();
    	m.rotate(10);
		m.push();
		m.pop();

		var p = m.transformPoint(30, 40);
		var x = p.x.toFixed(2);
		var y = p.y.toFixed(2);
		var str = m.matrixToString();

    	var result = x === "3.18" && y === "-79.77"
    		&& str === '["-1.68","-1.09","1.09","-1.68","10.00","20.00"]';
    	
    	done(result ? null : new Error("test matrix stack fail."));
    });
});
