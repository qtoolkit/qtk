describe('Image', function() {
	this.timeout(3000);

    it('test draw', (done) => {
    	var image = qtk.Image.create();
    	var imageTile = new qtk.ImageTile();
		imageTile.init({width:100, height:100}, 0, 0, 100, 100);
		imageTile.id = 1;
		imageTile.complete = true;
        var ctx = CanvasContext2dMock.get();
		image.name = "image2";
		image.x = 0;
		image.y = 0;
		image.w = 200;
		image.h = 200;
		image.image = imageTile;
		image.drawType = qtk.ImageDrawType.AUTO;
		image.draw(ctx);

		var expected = '{"cmds":[0,4,0,0,22,1,0,0,100,100,0,0,200,200,1],"strs":[]}';
        var str = ctx.toString();
        var result = expected === str;
        done(result ? null : new Error("draw image error"));
    });
    
    it('test clone toJson', (done) => {
    	var options = {w:200, h:30};
		var result = testWidgetCloneJson(qtk.Image.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
})
