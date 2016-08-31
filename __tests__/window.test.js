describe('Window', function() {
	this.timeout(3000);
   
	var app = new qtk.Application.create("test");
    it('test grab', (done) => {
		app.init({themeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var win = qtk.WindowNormal.create();
			win.init(app, 0, 0, 200, 200, true);
			win.grab();
			result = win.grabbed;
			win.ungrab();
			result = result && !win.grabbed;
			
			win.grab();
			win.visible = false;
			result = result && !win.grabbed;
			win.visible = true;
			result = result && win.grabbed;

			done(result ? null : "grab failed");
		});
    });
});
  
