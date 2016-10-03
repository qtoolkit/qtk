describe('test load image tile', function() {
	this.timeout(3000);
	
    it('Normal Image Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("images.png"), function () {
            done(img.w === 264 && img.h === 264 ? null : new Error("Wrong Image"));
        }); 
    });

    it('Not Exist Normal Image Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("not_exist.png"), function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

	it('TexturePacker Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("images.json#0.png"), function () {
            done(img.w === 128 && img.h === 128 ? null : new Error("Wrong Image"));
        }); 
    });

	it('Not Exist TexturePacker Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("not_exist.json#0.png"), function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

    it('XYWH Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("images.png#x1y1w128h128"), function () {
            done(img.w === 128 && img.h === 128 ? null : new Error("Wrong Image"));
        }); 
    });

    it('Not Exist XYWH Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("not_exist.png#x1y1w128h128"), function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });

    it('RowColIndex Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("images.png#r3c3i1"), function () {
            done(img.x === 88 && img.y === 0 && img.w === 88 && img.h === 88 ? null : new Error("Wrong Image"));
        }); 
    });
    
    it('Not Exist RowColIndex Should Work', (done) => {
        var img = qtk.ImageTile.create(fullURL("not_exist.png#r3c3i1"), function () {
            done(!!img ? null : new Error("Wrong Image"));
        }); 
    });
});

var url = fullURL("images.png#x0y0w128h128");
function testDrawImage(type, dx, dy, dw, dh, desc, expect, done, printLog) {
    var img = qtk.ImageTile.create(url, function () {
        var ctx = CanvasContext2dMock.get();
        img.id = 1;
        img.draw(ctx, type, dx, dy, dw, dh);
        var str = ctx.toString();
        var result = str === expect;
        if(printLog) {
            console.log(str);
        }
        done(result ? null : new Error(desc));
    }); 

}

describe('test draw image tile', function() {
    it('test draw image tile default', (done) => {
        var desc = 'draw image tile default failed';
        var expect = '{"cmds":[22,1,0,0,128,128,0,0,200,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.DEFAULT, 0, 0, 200, 200, desc, expect, done);
    });
    
    it('test draw image tile center', (done) => {
        var desc = 'test draw image tile center';
        var expect = '{"cmds":[22,1,0,0,128,128,36,36,128,128],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.CENTER, 0, 0, 200, 200, desc, expect, done);
    });

    it('test draw image tile auto(large width & large height)', (done) => {
        var desc = 'test draw image tile auto(large width & large height)';
        var expect = '{"cmds":[22,1,0,0,128,128,0,0,200,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.AUTO, 0, 0, 200, 200, desc, expect, done);
    });
    
    it('test draw image tile auto(small width && large height)', (done) => {
        var desc = 'test draw image tile auto(large width & large height)';
        var expect = '{"cmds":[22,1,0,0,128,128,0,50,100,100],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.AUTO, 0, 0, 100, 200, desc, expect, done);
    });
    
    it('test draw image tile auto(large width && small height)', (done) => {
        var desc = 'test draw image tile auto(large width && small height)';
        var expect = '{"cmds":[22,1,0,0,128,128,50,0,100,100],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.AUTO, 0, 0, 200, 100, desc, expect, done);
    });
////
    it('test draw image tile 3patch horizonal(small dw)', (done) => {
        var desc = 'test draw image tile 3patch horizonal(small dw)';
        var expect = '{"cmds":[22,1,0,0,42,128,0,0,42,200,22,1,86,0,42,128,58,0,42,200,22,1,42,0,42,128,42,0,16,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH3_H, 0, 0, 100, 200, desc, expect, done);
    });
    
    it('test draw image tile 3patch horizonal(large dw)', (done) => {
        var desc = 'test draw image tile 3patch horizonal(small dw)';
        var expect = '{"cmds":[22,1,0,0,42,128,0,0,42,200,22,1,86,0,42,128,258,0,42,200,22,1,42,0,42,128,42,0,216,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH3_H, 0, 0, 300, 200, desc, expect, done);
    });

////
    it('test draw image tile 3patch vertical(small dh)', (done) => {
        var desc = 'test draw image tile 3patch vertical(small dh)';
        var expect = '{"cmds":[22,1,0,0,128,42,0,0,200,42,22,1,0,86,128,42,0,58,200,42,22,1,0,42,128,42,0,42,200,16],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH3_V, 0, 0, 200, 100, desc, expect, done);
    });
    
    it('test draw image tile 3patch vertical(large dh)', (done) => {
        var desc = 'test draw image tile 3patch vertical(large dh)';
        var expect = '{"cmds":[22,1,0,0,128,42,0,0,200,42,22,1,0,86,128,42,0,158,200,42,22,1,0,42,128,42,0,42,200,116],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH3_V, 0, 0, 200, 200, desc, expect, done);
    });

////
    it('test draw image tile 9patch(small dw && dh)', (done) => {
        var desc = 'test draw image tile 9patch(small dw && dh)';
        var expect = '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,58,0,42,42,22,1,42,0,42,42,42,0,16,42,22,1,0,42,42,42,0,42,42,16,22,1,86,42,42,42,58,42,42,16,22,1,42,42,42,42,42,42,16,16,22,1,0,86,42,42,0,58,42,42,22,1,86,86,42,42,58,58,42,42,22,1,42,86,42,42,42,58,16,42],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH9, 0, 0, 100, 100, desc, expect, done);
    });
    
    it('test draw image tile 9patch(large dw && dh)', (done) => {
        var desc = 'test draw image tile 9patch(large dw && dh)';
        var expect = '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,158,0,42,42,22,1,42,0,42,42,42,0,116,42,22,1,0,42,42,42,0,42,42,116,22,1,86,42,42,42,158,42,42,116,22,1,42,42,42,42,42,42,116,116,22,1,0,86,42,42,0,158,42,42,22,1,86,86,42,42,158,158,42,42,22,1,42,86,42,42,42,158,116,42],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH9, 0, 0, 200, 200, desc, expect, done);
    });
    
    it('test draw image tile 9patch(large dw)', (done) => {
        var desc = 'test draw image tile 9patch(large dw)';
        var expect = '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,158,0,42,42,22,1,42,0,42,42,42,0,116,42,22,1,0,42,42,42,0,42,42,16,22,1,86,42,42,42,158,42,42,16,22,1,42,42,42,42,42,42,116,16,22,1,0,86,42,42,0,58,42,42,22,1,86,86,42,42,158,58,42,42,22,1,42,86,42,42,42,58,116,42],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH9, 0, 0, 200, 100, desc, expect, done);
    });

    it('test draw image tile 9patch(large dh)', (done) => {
        var desc = 'test draw image tile 9patch(large dh)';
        var expect = '{"cmds":[22,1,0,0,42,42,0,0,42,42,22,1,86,0,42,42,58,0,42,42,22,1,42,0,42,42,42,0,16,42,22,1,0,42,42,42,0,42,42,116,22,1,86,42,42,42,58,42,42,116,22,1,42,42,42,42,42,42,16,116,22,1,0,86,42,42,0,158,42,42,22,1,86,86,42,42,58,158,42,42,22,1,42,86,42,42,42,158,16,42],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.PATCH9, 0, 0, 100, 200, desc, expect, done);
    });
 //// 
    it('test draw image tile tileh(small dw)', (done) => {
        var desc = 'test draw image tile tileh(small dw)';
        var expect = '{"cmds":[22,1,0,0,80,128,0,0,80,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE_H, 0, 0, 80, 200, desc, expect, done);
    });
    it('test draw image tile tileh(large dw)', (done) => {
        var desc = 'test draw image tile tileh(large dw)';
        var expect = '{"cmds":[22,1,0,0,128,128,0,0,128,200,22,1,0,0,128,128,128,0,128,200,22,1,0,0,128,128,256,0,128,200,22,1,0,0,16,128,384,0,16,200],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE_H, 0, 0, 400, 200, desc, expect, done);
    });
 //// 
    it('test draw image tile tilev(small dh)', (done) => {
        var desc = 'test draw image tile tilev(small dh)';
        var expect = '{"cmds":[22,1,0,0,128,80,0,0,200,80],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE_V, 0, 0, 200, 80, desc, expect, done);
    });
    it('test draw image tile tilev(large dh)', (done) => {
        var desc = 'test draw image tile tilev(large dh)';
        var expect = '{"cmds":[22,1,0,0,128,128,0,0,200,128,22,1,0,0,128,128,0,128,200,128,22,1,0,0,128,128,0,256,200,128,22,1,0,0,128,16,0,384,200,16],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE_V, 0, 0, 200, 400, desc, expect, done);
    });
 //// 
    it('test draw image tile tile(small dw/dh)', (done) => {
        var desc = 'test draw image tile tile(small dw/dh)';
        var expect = '{"cmds":[22,1,0,0,100,100,0,0,100,100],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE, 0, 0, 100, 100, desc, expect, done);
    });
    it('test draw image tile tile(large dw/dh)', (done) => {
        var desc = 'test draw image tile tile(large dw/dh)';
        var expect = '{"cmds":[22,1,0,0,128,128,0,0,128,128,22,1,0,0,128,128,128,0,128,128,22,1,0,0,128,128,256,0,128,128,22,1,0,0,16,128,384,0,16,128,22,1,0,0,128,128,0,128,128,128,22,1,0,0,128,128,128,128,128,128,22,1,0,0,128,128,256,128,128,128,22,1,0,0,16,128,384,128,16,128,22,1,0,0,128,128,0,256,128,128,22,1,0,0,128,128,128,256,128,128,22,1,0,0,128,128,256,256,128,128,22,1,0,0,16,128,384,256,16,128,22,1,0,0,128,16,0,384,128,16,22,1,0,0,128,16,128,384,128,16,22,1,0,0,128,16,256,384,128,16,22,1,0,0,16,16,384,384,16,16],"strs":[]}';
        testDrawImage(qtk.ImageDrawType.TILE, 0, 0, 400, 400, desc, expect, done);
    });
});
