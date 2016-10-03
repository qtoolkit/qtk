describe('MenuBar', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, itemWidth:68};
		var result = testWidgetCloneJson(qtk.MenuBar.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
