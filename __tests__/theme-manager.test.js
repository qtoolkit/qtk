describe('ThemeManager', function() {
	this.timeout(3000);
   
	var json = {
		button: {
			normal : {
				backGroundColor : "green",
				fontColor : "red",
				fontSize : 16
			},
			active : {
				backGroundColor : "green",
				fontColor : "red",
				fontSize : 18
			}
		}
	};

	var themeManager = new qtk.ThemeManager();
	themeManager.init(json);
    
    it('test get', (done) => {
		var style = themeManager.get("button", "normal");
		var result = style.fontSize === json.button.normal.fontSize
			&& style.fontColor === json.button.normal.fontColor;

		done(result ? null : "ThemeManager get fail.");
    });
});
  
