describe('ThemeManager', function() {
	this.timeout(3000);
	var json = {
		"widget" : {
			"common" : {
				"lineWidth" : 1,
				"fontSize" : 16,
				"textColor" : "black",
				"backGroundColor" : "#FFFFFF"
			},
			"normal" : {},
			"active" : {},
			"over" : {},
			"disable" : {}
		},
		"dialog": {
			"extends": "widget",
			"normal" : {
				"backGroundColor" : "#606060"
			}
		},
		"scroll-view": {
			"extends": "widget",
			"normal" : {
				"lineColor" : "#EEEEEE"
			}
		},
		"grid-view": {
			"extends": "scroll-view"
		}
	};

	var themeManager = new qtk.ThemeManager();
	themeManager.init(JSON.parse(JSON.stringify(json)));
    
    it('test get', (done) => {
		var style = themeManager.get("dialog", "normal");
		var result = style.fontSize === json.widget.common.fontSize
			&& style.textColor === json.widget.common.textColor;

		done(result ? null : "ThemeManager get fail.");
    });
    
    it('test get', (done) => {
		var style = themeManager.get("grid-view", "normal");
		var scrollView = json["scroll-view"];
		var result = style.lineColor === scrollView.normal.lineColor

		done(result ? null : "ThemeManager get fail.");
    });
});
  
