describe('MenuBarItem', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:100, h:20, text:"ok"};
    	var widget = qtk.MenuBarItem.create(options);
    	widget.setIcons(fullURL("images.json#0.png"), fullURL("images.json#0.png"), 
    		fullURL("images.json#0.png"), fullURL("images.json#0.png"));
		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
