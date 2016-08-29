describe('Button', function() {
	this.timeout(3000);
	
	var styles = {
		"normal" : {
			"backGroundColor" : "green",
			"fontColor" : "black",
			"roundRadius" : 5,
			"fontSize" : 16
		},
		"over" : {
			"backGroundColor" : "blue",
			"fontColor" : "black",
			"roundRadius" : 5,
			"fontSize" : 16
		},
		"active" : {
			"backGroundColor" : "red",
			"fontColor" : "black",
			"roundRadius" : 5,
			"lineWidth" : 1,
			"lineColor" : "green",
			"fontSize" : 18
		}
	};

    it('test draw', (done) => {
    	var button = qtk.Button.create();
        var ctx = CanvasContext2dMock.get();
		button.name = "button2";
		button.x = 10;
		button.y = 90;
		button.w = 200;
		button.h = 60;
		button.setStyle(qtk.WidgetState.NORMAL, styles.normal);
		button.text = "OK";
		button.draw(ctx);
		var expected = '{"cmds":[0,4,10,90,14,31,0,5,33,0,0,5,0,32,195,0,33,200,0,200,5,32,200,55,33,200,60,195,60,32,5,60,33,0,60,0,55,30,10,0,15,27,1,10,2,28,1,29,1,18,3,100,30,null,1],"strs":["green",null,"black","OK"]}'; 
        var str = ctx.toString();
        var result = expected === str;
        done(result ? null : new Error("draw button error"));
    });
})
