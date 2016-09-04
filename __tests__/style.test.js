
describe('Style', function() {
	this.timeout(10000);

	var fontFamily = "sans";
	var fontSize = 16;
	var fontColor = "green";
	var fontBold = "bold";
	var fontItalic = true;
	var fontUnderline = true;
	var lineWidth = 3;
	var lineColor = "red";
	var roundRatius = 5;

	var image = qtk.ImageTile.create("http://localhost:9876/base/www/test.jpg", evt=> {
	});
	;
  	
	 it('test color', (done) => {
  		var style = new qtk.Style();
		style.backGroundColor = "white";
		style.forceGroundColor = "white";

		var result = style.backGroundColor === style.forceGroundColor && style.forceGroundColor === "white";
		done(result ? null : new Error("color is wrong"))
  	});
	 
	 it('test line', (done) => {
  		var style = new qtk.Style();
		style.lineWidth = lineWidth;
		style.lineColor = lineColor;
		style.roundRatius = roundRatius;

		var result = style.lineWidth === lineWidth 
		 && style.lineColor === lineColor && style.roundRatius === roundRatius
		done(result ? null : new Error("line color is wrong"))
  	});
	 
	it('test font', (done) => {
  		var style = new qtk.Style();
		style.fontFamily = fontFamily;
		style.fontSize = fontSize;
		style.fontBold = fontBold;
		style.fontItalic = fontItalic;
		style.fontUnderline = fontUnderline;
	
		var result = style.fontFamily === fontFamily && style.fontSize === fontSize 
			&& style.fontBold === fontBold && style.fontItalic === fontItalic
			&& style.fontUnderline === fontUnderline;

		done(result ? null : new Error("font is wrong"))
  	});

	it('test image', (done) => {
  		var style = new qtk.Style();
		style.backGroundImage = image;
		style.forceGroundImage = image;

		var result = style.backGroundImage === style.forceGroundImage && style.forceGroundImage === image;
		done(result ? null : new Error("color is wrong"))
  	});	  
	
	it('test image', (done) => {
  		var style = new qtk.Style();
		style.backGroundImage = image;
		style.forceGroundImage = image;

		var result = style.backGroundImage === style.forceGroundImage && style.forceGroundImage === image;
		done(result ? null : new Error("color is wrong"))
  	});	  
	 
	it('test clone', (done) => {
  		var style = new qtk.Style();
		style.backGroundImage = image;
		style.forceGroundImage = image;
		style.backGroundColor = "white";
		style.forceGroundColor = "white";

		styleNew = style.clone();
		var result = JSON.stringify(styleNew.toJson()) === JSON.stringify(style.toJson());

		done(result ? null : new Error("clone wrong"))
  	});	  
	
	it('test to/from JSON', (done) => {
  		var style = new qtk.Style();
		style.backGroundImage = image;
		style.forceGroundImage = image;
		style.backGroundColor = "white";
		style.forceGroundColor = "white";
		style.lineWidth = lineWidth;
		style.lineColor = lineColor;
		style.roundRatius = roundRatius;

		styleNew = new qtk.Style();
		styleNew.fromJson(style.toJson());
		var result = JSON.stringify(styleNew.toJson()) === JSON.stringify(style.toJson());

		done(result ? null : new Error("clone to/from json"))
  	});	  
	 
	it('test changed', (done) => {
  		var style = new qtk.Style();
		style.on(qtk.Events.CHANGE, function() {
			done()
		});
		style.lineWidth = lineWidth;
  	});
});
