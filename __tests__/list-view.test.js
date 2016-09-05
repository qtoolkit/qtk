describe('ListView', function() {
	this.timeout(3000);
	
    it('test attrs', (done) => {
    	var listView = qtk.ListView.create();
    	var attrs = {itemHeight:60, itemSpacing:1};
    	listView.set(attrs);
        var result = listView.itemHeight === attrs.itemHeight && listView.itemSpacing === attrs.itemSpacing;

        done(result ? null : new Error("list view test attrs"));
    });
})
