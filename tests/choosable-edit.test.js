describe('ChoosableEdit', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, inputTips:"age"};
		var result = testWidgetCloneJson(qtk.ChoosableEdit.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
