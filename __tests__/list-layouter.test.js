
describe('ListLayouter', function() {
	this.timeout(3000);
	
	var listView = qtk.ListView.create();
	listView.resizeTo(2000, 600);
  	listView.itemHeight = 75;
  	listView.itemSpacing = 5;

    it('test basic', (done) => {
		var item = qtk.ListItem.create();
    	listView.addChild(item);
		
		var item1 = qtk.ListItem.create();
    	listView.addChild(item1);

		var result = item.x === 0 && item.y === 0 && item.h === listView.itemHeight
			&& item1.y === listView.itemSpacing + item.h && item1.h === listView.itemHeight

    	done(result ? null : new Error("item x/y/w/h wrong"));
    });
});
  
