describe('GridView', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, cols:10, rows:20};
		var result = testWidgetCloneJson(qtk.GridView.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
