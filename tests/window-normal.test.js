describe('WindowNormal And Widget', function() {
	this.timeout(3000);
   
	var app = new qtk.Application.create("test");
    it('test basic', (done) => {
		app.init({sysThemeDataURL:"/base/www/theme/default/theme.json"});
		var vp = app.getViewPort();
		app.on(qtk.Events.READY, function() {
			var win = qtk.WindowNormal.create(app, {hasOwnCanvas:true});
			
			win.x = 0;
			win.y = 0;
			win.w = vp.width;
			win.h = vp.height;

			app.getMainLoop().requestRedraw();
			result = true;
			done(result ? null : "Application.");
		});
    });
});
  
