describe('Application', function() {
	this.timeout(3000);
   
    it('test requestRedraw', (done) => {
		var app = new qtk.Application.create("test");
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		app.getMainLoop().requestRedraw();
		app.getMainLoop().on(qtk.Events.PRETICK, function pretick(evt) {
			done();
		});
    });
});
  
