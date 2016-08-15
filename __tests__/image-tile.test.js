describe('test load image tile', function() {
	this.timeout(3000);
	
    it('Normal Image Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/images.png", function () {
            done(img.w === 264 && img.h === 264 ? null : new Error("Wrong Image"));
        }); 
    });

    it('Not Exist Normal Image Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/not_exist.png", function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

	it('TexturePacker Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/images.json#0.png", function () {
            done(img.w === 128 && img.h === 128 ? null : new Error("Wrong Image"));
        }); 
    });

	it('Not Exist TexturePacker Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/not_exist.json#0.png", function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

    it('XYWH Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/images.png#x1y1w128h128", function () {
            done(img.w === 128 && img.h === 128 ? null : new Error("Wrong Image"));
        }); 
    });

    it('Not Exist XYWH Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/not_exist.png#x1y1w128h128", function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

    it('RowColIndex Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/images.png#r3c3i1", function () {
            done(img.x === 88 && img.y === 0 && img.w === 88 && img.h === 88 ? null : new Error("Wrong Image"));
        }); 
    });
    
    it('Not Exist RowColIndex Should Work', (done) => {
        var img = qtk.ImageTile.create("http://localhost:9876/base/www/not_exist.png#r3c3i1", function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });
});

describe('test draw image tile', function() {
	var url = "http://localhost:9876/base/www/images.png#x0y0w128h128";
    it('test draw image tile default', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_DEFAULT, 0, 0, 200, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,128,0,0,200,200],"strs":[]}';
            done(result ? null : new Error("draw image tile default failed"));
        }); 
    });
    
    it('test draw image tile center', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_CENTER, 0, 0, 200, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,128,36,36,128,128],"strs":[]}';
            done(result ? null : new Error("draw image tile center failed"));
        }); 
    });

    it('test draw image tile auto(large width & large height)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_AUTO, 0, 0, 200, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,128,0,0,200,200],"strs":[]}';
            done(result ? null : new Error("draw image tile auto failed"));
        }); 
    });
    
    it('test draw image tile auto(small width && large height)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_AUTO, 0, 0, 100, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,128,0,50,100,100],"strs":[]}';
            done(result ? null : new Error("draw image tile auto failed"));
        }); 
    });
    
    it('test draw image tile auto(large width && small height)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_AUTO, 0, 0, 200, 100);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,128,50,0,100,100],"strs":[]}';
            done(result ? null : new Error("draw image tile auto failed"));
        }); 
    });
////
    it('test draw image tile 3patch horizonal(small target)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_3PATCH_H, 0, 0, 100, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,128,0,0,42,200,22,1,86,0,42,128,58,0,42,200,22,1,42,0,42,128,42,0,16,200],"strs":[]}';
            done(result ? null : new Error("draw image tile 3patch horizonal failed"));
        }); 
    });
    
    it('test draw image tile 3patch horizonal(large target)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_3PATCH_H, 0, 0, 300, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,128,0,0,42,200,22,1,86,0,42,128,258,0,42,200,22,1,42,0,42,128,42,0,216,200],"strs":[]}';
            done(result ? null : new Error("draw image tile 3patch horizonal failed"));
        }); 
    });

////
    it('test draw image tile 3patch vertical(small target)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_3PATCH_V, 0, 0, 200, 100);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,42,0,0,200,42,22,1,0,86,128,42,0,58,200,42,22,1,0,42,128,42,0,42,200,16],"strs":[]}';
            done(result ? null : new Error("draw image tile 3patch vertical failed"));
        }); 
    });
    
    it('test draw image tile 3patch vertical(large target)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_3PATCH_V, 0, 0, 200, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,128,42,0,0,200,42,22,1,0,86,128,42,0,158,200,42,22,1,0,42,128,42,0,42,200,116],"strs":[]}';
            done(result ? null : new Error("draw image tile 3patch vertical failed"));
        }); 
    });

////
    it('test draw image tile 9patch(small dw && dh)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_9PATCH, 0, 0, 100, 100);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,58,0,42,42,22,1,42,0,42,42,42,0,16,42,22,1,0,42,42,42,0,42,42,16,22,1,86,42,42,42,58,42,42,16,22,1,42,42,42,42,42,42,16,16,22,1,0,86,42,42,0,58,42,42,22,1,86,86,42,42,58,58,42,42,22,1,42,86,42,42,42,58,16,42],"strs":[]}';
            done(result ? null : new Error("draw image tile 9patch failed"));
        }); 
    });
    it('test draw image tile 9patch(large dw && dh)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_9PATCH, 0, 0, 200, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,158,0,42,42,22,1,42,0,42,42,42,0,116,42,22,1,0,42,42,42,0,42,42,116,22,1,86,42,42,42,158,42,42,116,22,1,42,42,42,42,42,42,116,116,22,1,0,86,42,42,0,158,42,42,22,1,86,86,42,42,158,158,42,42,22,1,42,86,42,42,42,158,116,42],"strs":[]}';
            done(result ? null : new Error("draw image tile 9patch failed"));
        }); 
    });
    
    it('test draw image tile 9patch(large dw)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_9PATCH, 0, 0, 200, 100);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,158,0,42,42,22,1,42,0,42,42,42,0,116,42,22,1,0,42,42,42,0,42,42,16,22,1,86,42,42,42,158,42,42,16,22,1,42,42,42,42,42,42,116,16,22,1,0,86,42,42,0,58,42,42,22,1,86,86,42,42,158,58,42,42,22,1,42,86,42,42,42,58,116,42],"strs":[]}';
            done(result ? null : new Error("draw image tile 9patch failed"));
        }); 
    });

    it('test draw image tile 9patch(large dh)', (done) => {
        var img = qtk.ImageTile.create(url, function () {
			var ctx = CanvasContext2dMock.get();
			img.id = 1;
			img.draw(ctx, qtk.ImageTile.DRAW_9PATCH, 0, 0, 100, 200);
			var str = ctx.toString();
			var result = str === '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,58,0,42,42,22,1,42,0,42,42,42,0,16,42,22,1,0,42,42,42,0,42,42,116,22,1,86,42,42,42,58,42,42,116,22,1,42,42,42,42,42,42,16,116,22,1,0,86,42,42,0,158,42,42,22,1,86,86,42,42,58,158,42,42,22,1,42,86,42,42,42,158,16,42],"strs":[]}';
            done(result ? null : new Error("draw image tile 9patch failed"));
        }); 
    });
});
