describe('WidgetFactory', function() {
	this.timeout(3000);
   
   	var type = "test";
   	var obj = "123";
   	function create() {
   		return obj;
	}

    it('test register and create', (done) => {
        qtk.WidgetFactory.register(type, create);
		var result = obj === qtk.WidgetFactory.create(type);
		done(result ? null : "WidgetFactory create failed.");
    });
});
  
