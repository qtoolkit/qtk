describe('test image tile', function() {
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
