describe('Application', function() {
	this.timeout(3000);
   
	var app = new qtk.Application.create("test");
   
   	app.init({themeDataURL:"/base/www/theme/default/theme.json"});

    it('test getService', (done) => {
		app.on(qtk.Events.READY, function() {
			var themeManager = app.getService(qtk.Services.THEME_MANAGER);
			var result = !!themeManager 
				&& themeManager === app.getThemeManager();

			done(result ? null : "Application.");
		});
    });
    
    it('test requestRedraw', (done) => {
		app.requestRedraw();
		app.mainLoop.on(app.mainLoop.PREDRAW, function predraw(evt) {
			done();
		});
    });
});
  
