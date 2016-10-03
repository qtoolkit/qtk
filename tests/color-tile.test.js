describe('Color Tile/Line', function() {
	this.timeout(3000);
   
    it('test color tile', (done) => {
    	var attr = {value:"red", roundRadius:5, lineWidth:1, lineColor:"green"};
		var tile = qtk.ColorTile.create().set(attr);
		var result = tile.value === attr.value
			&& tile.roundRadius === attr.roundRadius
			&& tile.lineWidth === attr.lineWidth
			&& tile.lineColor === attr.lineColor;

    	done(result ? null : new Error("color tile"));
    });
    
    it('test color line', (done) => {
    	var attr = {value:"red", orientation:1, vAlign:1, hAlign:2, lineWidth:1, lineColor:"green"};
		var tile = qtk.ColorTile.create().set(attr);
		var result = tile.value === attr.value
			&& tile.roundRadius === attr.roundRadius
			&& tile.lineWidth === attr.lineWidth
			&& tile.lineColor === attr.lineColor
			&& tile.orientation === attr.orientation
			&& tile.vAlign=== attr.vAlign
			&& tile.hAlign=== attr.hAlign

    	done(result ? null : new Error("color tile"));
    });
    
    it('test clone toJson', (done) => {
    	var options = {w:200, h:30, value:"red", roundRadius:5, lineWidth:1, lineColor:"green"};
		var result = testWidgetCloneJson(qtk.ColorTile.create(options));
        
        done(result ? null : new Error("test clone toJson"));
    });
});
  
