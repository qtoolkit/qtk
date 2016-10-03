describe('TitleComboBox', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, title:"Name", itemHeight:32, titleW:45, valueW:56};
		var widget = qtk.TitleComboBox.create(options);
		widget.addOption("Red").addOption("Green");;
		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
