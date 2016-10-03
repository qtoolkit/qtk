describe('Edit', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, multiLineMode:false, inputType:"number", inputTips:"age"};
		var result = testWidgetCloneJson(qtk.Edit.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
