describe('Pages', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:100, h:20};
    	var widget = qtk.Pages.create(options);
    	widget.addChild(qtk.Page.create());
    	widget.addChild(qtk.Page.create());
    	widget.addChild(qtk.Page.create());
		widget.value = 1;
		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
