describe('Application', function() {
	this.timeout(3000);
   

    it('test getService', (done) => {
		var app = new qtk.Application.create("test");
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		app.on(qtk.Events.READY, function() {
			var themeManager = app.getService(qtk.Services.THEME_MANAGER);
			var result = !!themeManager 
				&& themeManager === app.getThemeManager();

			done(result ? null : "Application.");
		});
    });
    
    it('test requestRedraw', (done) => {
		var app = new qtk.Application.create("test");
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		app.mainLoop.requestRedraw();
		app.mainLoop.on(qtk.Events.PRETICK, function pretick(evt) {
			done();
		});
    });
});
  
