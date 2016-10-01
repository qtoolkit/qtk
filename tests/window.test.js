describe('Window', function() {
	this.timeout(3000);
   
	var app = new qtk.Application.create("test");
    it('test grab', (done) => {
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var win = qtk.WindowNormal.create();
			win.set({app:app, x:0, y:0, w:200, h:200, hasOwnCanvas:true});

			win.open();
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
  
