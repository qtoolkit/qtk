describe('TitleSlider', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, title:"Opacity",  titleW:45, valueW:56};
		var result = testWidgetCloneJson(qtk.TitleSlider.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
