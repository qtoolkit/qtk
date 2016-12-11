describe('test assets', function() {
	this.timeout(10000);
  var fileShouldExist = "File Should Exist";
	var fileShouldNotExist = "File Should Not Exist";

  it('loadJson Should OK', (done) => {
	var asset = qtk.AssetManager.loadJson("http://localhost:9876/base/www/test.json")
	  .then(json => {
	  	  done(json && json.name === "qtk" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

  it('loadJson Again Should OK', (done) => {
	var asset = qtk.AssetManager.loadJson("http://localhost:9876/base/www/test.json")
	  .then(json => {
	  	  done(json && json.name === "qtk" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

	it('loadJson Should Fail', (done) => {
  	var asset = qtk.AssetManager.loadJson("http://localhost:9876/base/www/not_exist.json")
	  .then(json => {
			done(new Error(fileShouldNotExist));
		}, err => {
	  	  done();
	  });
  });
  
	it('loadText Should OK', (done) => {
	var asset = qtk.AssetManager.loadText("http://localhost:9876/base/www/test.txt")
	  .then(txt => {
	  	  done(txt === "hello\n" ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });
	
	it('loadText Should Fail', (done) => {
  	var asset = qtk.AssetManager.loadText("http://localhost:9876/base/www/not_exist.txt")
	  .then(text => {
			done(new Error(fileShouldNotExist));
		}, err => {
	  	  done();
	  });
  });
  
	it('loadBlob Should OK', (done) => {
	var asset = qtk.AssetManager.loadBlob("http://localhost:9876/base/www/test.blob")
	  .then(blob => {
	  	  done(blob && blob.size === 5 ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });

	it('loadImage Should OK', (done) => {
	var asset = qtk.AssetManager.loadImage("http://localhost:9876/base/www/test.jpg")
	  .then(img => {
	  	  done(img ? null : new Error(fileShouldExist));
	  },err => {
			done(new Error(fileShouldExist));
		});
  });
	
	it('loadImage Should Fail', (done) => {
	var asset = qtk.AssetManager.loadImage("http://localhost:9876/base/www/not_exist.jpg")
	  .then(img => {
	  	  done(img ? new Error(fileShouldNotExist) : null);
	  },err => {
			done();
		});
  });

	
	it('Preload Group Should OK', (done) => {
		var items = [
			{type:qtk.AssetManager.TEXT, src:"http://localhost:9876/base/www/test.txt"},
			{type:qtk.AssetManager.JSON, src:"http://localhost:9876/base/www/test.json"},
			{type:qtk.AssetManager.IMAGE, src:"http://localhost:9876/base/www/test.jpg"},
			{type:qtk.AssetManager.BLOB, src:"http://localhost:9876/base/www/test.blob"}
		];
		var assets = new qtk.AssetGroup(items);
		assets.onProgress(function(info) {
			if(info.total === info.loaded && info.loaded === items.length) {
				done();
			}
			console.log(JSON.stringify(info));
		});
  });
});
