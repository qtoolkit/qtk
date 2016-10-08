describe('TitleVector', function() {
	this.timeout(3000);

    it('test clone toJson', (done) => {
    	var options = {value:{x:1, y:2, z:3}, w:200, h:30, title:"Name",  titleW:45, valueW:56, d:3};
		var result = testWidgetCloneJson(qtk.TitleVector.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
    
    it('test clone toJson', (done) => {
    	var options = {value:{x:1, y:2, z:3}, w:200, h:30, title:"Name",  titleW:45, valueW:56, d:2};
		var result = testWidgetCloneJson(qtk.TitleVector.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
