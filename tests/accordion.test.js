describe('Accordion', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, titleH:35};
		var result = testWidgetCloneJson(qtk.Accordion.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
