describe('CheckButton', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30};
		var result = testWidgetCloneJson(qtk.CheckButton.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
