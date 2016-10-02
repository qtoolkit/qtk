describe('ServicesManager', function() {
	this.timeout(3000);
   
   	var type = "test";
   	function service() {
   		return obj;
	}

    it('test register and get', (done) => {
        var servicesManager = new qtk.ServiceLocator();;
		servicesManager.register(type, service);
		var result = service === servicesManager.get(type);

		done(result ? null : "ServicesManager register/get fail.");
    });
});
  
