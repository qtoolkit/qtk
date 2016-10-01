describe('TreeItemData', function() {
	var TreeItemData = qtk.TreeItemData;

    it('test basic', (done) => {
		var root = TreeItemData.create("root", null, "userdata");
		var item = root.addChild("item", null, "userdata1");
		var item2 = root.addChild("item2", null, "userdata2");
		root.removeChild(item2, true);
		root.selected = true;
		root.expanded = true;
    	var result = root.text === "root" && root.children.length === 1 
    		&& root.icon === null && root.userData === "userdata"
    		&& root.selected === true && root.expanded === true
    		&& item.parent === root && item.text === "item" && item.userData === "userdata1"

		done(result ? null : new Error("create failed."));
    });
})
