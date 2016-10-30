describe('ViewModal', function() {
	this.timeout(3000);
	var data = [{name:"qtk"}];
	var viewModal = qtk.CollectionViewModal.create(data);
	viewModal.current = 0;

    it('get/set', viewModalTestGetSet.bind(viewModal));
    it('change', viewModalTestOnChange.bind(viewModal));
    it('remove', viewModalTestRemove.bind(viewModal));
    it('command', viewModalTestCommand.bind(viewModal));
    it('converter', viewModalTestConverter.bind(viewModal));
    it('validation', viewModalTestValidationRule.bind(viewModal));

    it("filter", (done) => {
		var data = [{name:"jim"}, {name:"jim.li"}, {name:"jim.q"}, {name:"abc"}, {name:"qtk"}, {name:"qtoolkit"}];
		var vm = qtk.CollectionViewModal.create(data);
		vm.registerFilter("jim", {check:function(item) {
			return item.name.indexOf("jim") >= 0;
		}});
		vm.filter = "jim";
		var result = vm.total === 3;
		done(result ? null : new Error("filter failed."));
	});
    
    it("sort", (done) => {
		var data = [{name:"jim", age:100}, {name:"abc", age:108}, {name:"xyz", age:1},];
		var vm = qtk.CollectionViewModal.create(data);
		
		var nameIncComparator = qtk.ObjectPropComparator.create(qtk.StringComparator.create(), "name");
		vm.registerComparator("name-inc", nameIncComparator);
		vm.registerComparator("name-dec", qtk.RevertComparator.create(nameIncComparator));
		vm.comparator = "name-inc";
		var result = vm.getItemViewModal(0).getProp("name") === "abc" 
			&& vm.getItemViewModal(2).getProp("name") === "xyz"
		
		vm.comparator = "name-dec";
		result = result && vm.getItemViewModal(2).getProp("name") === "abc" 
			&& vm.getItemViewModal(0).getProp("name") === "xyz"

		done(result ? null : new Error("sort failed."));
	});
    
    it("remove", (done) => {
		var data = [{name:"jim"}, {name:"jim.li"}, {name:"jim.q"}, {name:"abc"}, {name:"qtk"}, {name:"qtoolkit"}];
		var vm = qtk.CollectionViewModal.create(data);
		vm.removeItems(function(item) {
			return item.name === "abc";
		});
		var result = vm.total === 5;
		done(result ? null : new Error("removeItems failed."));
	});
})
