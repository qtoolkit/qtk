describe('TabButtonGroup', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, autoExpand:false};
		var result = testWidgetCloneJson(qtk.TabButtonGroup.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
