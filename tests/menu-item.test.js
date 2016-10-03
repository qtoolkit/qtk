describe('MenuItem', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:100, h:20, text:"ok", iconURL:fullURL("images.json#0.png"), 
    		shortcut:"Ctrl+A", checkable:true};
    	var widget = qtk.MenuItem.create(options);
		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
