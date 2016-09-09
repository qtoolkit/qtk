describe('TreeItemData', function() {
	var TreeItemData = qtk.TreeItemData;

    it('test create', (done) => {
    	var data = {
			text:"root",
			children : [
				{text:"1"},
				{text:"2"},
				{text:"3"}
			]
		};

		var root = TreeItemData.loadFromJson(data);

    	var result = root.text === "root" && root.children.length === 3;
		done(result ? null : new Error("create failed."));
    });
})
