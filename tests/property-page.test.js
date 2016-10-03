describe('PropertyPage', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:300, itemH:32, titleW:45, valueW:56};
		var result = testWidgetCloneJson(qtk.PropertyPage.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
