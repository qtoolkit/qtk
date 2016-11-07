describe('Window', function() {
	this.timeout(3000);
   
	var app = new qtk.Application.create("test");
    it('test grab', (done) => {
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var win = qtk.WindowNormal.create({app:app});
			var wm = qtk.windowManager;
			var result = wm.windows.length === 1;

			done(result ? null : "grab failed");
		});
    });
});
  
