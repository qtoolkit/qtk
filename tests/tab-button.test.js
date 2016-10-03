describe('TabButton', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, closeButtonAtLeft:true, orientation:qtk.Orientation.V};
		var widget = qtk.TabButton.create(options);
    	widget.setIcons(fullURL("images.json#0.png"), fullURL("images.json#0.png")); 
		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
