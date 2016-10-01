describe('TreeItem', function() {
	var TreeItem = qtk.TreeItem;
	var TreeItemData = qtk.TreeItemData;

    it('test basic', (done) => {
		var root = TreeItemData.create("root", null, "userdata");
		root.selected = true;
		root.expanded = true;
		var rootItem = TreeItem.create();
		rootItem.data = root;
		rootItem.level = 1;

    	var result = root.text === rootItem.text && root.children.length === 0
    		&& root.icon === null && root.userData === rootItem.userData
    		&& root.selected === rootItem.selected && root.expanded === rootItem.expanded
    		&& rootItem.isLeaf && rootItem.data === root
    		&& rootItem.getStateForStyle() === qtk.WidgetState.SELECTED
    		&& rootItem.getStyleType() === "tree-item.leaf"

		done(result ? null : new Error("create failed."));
    });
})
