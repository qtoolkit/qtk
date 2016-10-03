describe('TitleEdit', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, title:"Name",  titleW:45, valueW:56};
		var result = testWidgetCloneJson(qtk.TitleEdit.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
