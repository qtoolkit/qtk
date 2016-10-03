describe('TitleContent', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:300, titleHeight:20, contentHeight:300};
		var result = testWidgetCloneJson(qtk.TitleContent.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
