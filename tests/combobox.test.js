describe('ComoboBox', function() {
	this.timeout(3000);

    it('test attr', (done) => {
    	var result = true;
    	var widget = qtk.ComboBox.create({w:200, h:30});
		widget.addOption("Red", 0);
		widget.addOption("Green", 1);
		widget.addOption("Blue", 2);
		widget.value = 2;
		result = widget.optionsCount === 3 && widget.value === 2;

        done(result ? null : new Error("test attr"));
    });
    
    it('test clone toJson', (done) => {
    	var widget = qtk.ComboBox.create({w:200, h:30});
		widget.addOption("Red", 0);
		widget.addOption("Green", 1);
		widget.addOption("Blue", 2);
		widget.value = 2;

		var result = testWidgetCloneJson(widget);
        
        done(result ? null : new Error("test clone toJson"));
    });
})
