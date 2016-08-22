describe('test assets', function() {
	this.timeout(10000);
  var fileShouldExist = "File Should Exist";
	var fileShouldNotExist = "File Should Not Exist";

  it('loadJSON Should OK', (done) => {
	var asset = qtk.assets.loadJSON("http://localhost:9876/base/www/test.json")
	  .then(json => {
	  	  done(json && json.name === "qtk" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

  it('loadJSON Again Should OK', (done) => {
	var asset = qtk.assets.loadJSON("http://localhost:9876/base/www/test.json")
	  .then(json => {
	  	  done(json && json.name === "qtk" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

	it('loadJSON Should Fail', (done) => {
  	var asset = qtk.assets.loadJSON("http://localhost:9876/base/www/not_exist.json")
	  .then(json => {
			done(new Error(fileShouldNotExist));
		}, err => {
	  	  done();
	  });
  });
  
	it('loadText Should OK', (done) => {
	var asset = qtk.assets.loadText("http://localhost:9876/base/www/test.txt")
	  .then(txt => {
	  	  done(txt === "hello\n" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });
	
	it('loadText Should Fail', (done) => {
  	var asset = qtk.assets.loadText("http://localhost:9876/base/www/not_exist.txt")
	  .then(text => {
			done(new Error(fileShouldNotExist));
		}, err => {
	  	  done();
	  });
  });
  
	it('loadBlob Should OK', (done) => {
	var asset = qtk.assets.loadBlob("http://localhost:9876/base/www/test.blob")
	  .then(blob => {
	  	  done(blob && blob.size === 5 ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

	it('loadImage Should OK', (done) => {
	var asset = qtk.assets.loadImage("http://localhost:9876/base/www/test.jpg")
	  .then(img => {
	  	  done(img ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });
	
	it('loadImage Should Fail', (done) => {
	var asset = qtk.assets.loadImage("http://localhost:9876/base/www/not_exist.jpg")
	  .then(img => {
	  	  done(img ? new Error(fileShouldNotExist) : null);
	  },err => {
			done();
		});
  });

	
	it('Preload Group Should OK', (done) => {
		var items = [
			{type:qtk.assets.TEXT, src:"http://localhost:9876/base/www/test.txt"},
			{type:qtk.assets.JSON, src:"http://localhost:9876/base/www/test.json"},
			{type:qtk.assets.IMAGE, src:"http://localhost:9876/base/www/test.jpg"},
			{type:qtk.assets.BLOB, src:"http://localhost:9876/base/www/test.blob"}
		];
		var assets = new qtk.assets.Group(items);
		assets.onProgress(function(info) {
			if(info.total === info.loaded && info.loaded === items.length) {
				done();
			}
			console.log(JSON.stringify(info));
		});
  });
});
