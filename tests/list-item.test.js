describe('ListItem', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, multiLineMode:false};
		var result = testWidgetCloneJson(qtk.ListItem.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
