describe('TabControl', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:300, buttonGroupAtTop:true, buttonGroupHeight:25};
		var result = testWidgetCloneJson(qtk.TabControl.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
