describe('TitleRange', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {value:{first:1, second:2}, w:200, h:30, title:"Name",  titleW:45, valueW:56, d:3};
		var result = testWidgetCloneJson(qtk.TitleRange.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
