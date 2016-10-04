
describe('ListLayouter', function() {
	this.timeout(3000);
	
	var listView = qtk.ListView.create();
	listView.resizeTo(2000, 600);
  	listView.itemH = 75;
  	listView.itemSpacing = 5;

    it('test basic', (done) => {
		var item = qtk.ListItem.create();
    	listView.addChild(item);
		
		var item1 = qtk.ListItem.create();
    	listView.padding = 0;
    	listView.addChild(item1);

		var result = item.x === 0 && item.y === 0 && item.h === listView.itemH
			&& item1.y === listView.itemSpacing + item.h && item1.h === listView.itemH

    	done(result ? null : new Error("item x/y/w/h wrong"));
    });
});
  
