describe('ViewModel', function() {
	this.timeout(3000);
	var data = [{name:"qtk"}];
	var viewModel = qtk.CollectionViewModel.create(data);
	viewModel.current = 0;

    it('get/set', viewModelTestGetSet.bind(viewModel));
    it('change', viewModelTestOnChange.bind(viewModel));
    it('remove', viewModelTestRemove.bind(viewModel));
    it('command', viewModelTestCommand.bind(viewModel));
    it('converter', viewModelTestConverter.bind(viewModel));
    it('validation', viewModelTestValidationRule.bind(viewModel));

    it("filter", (done) => {
		var data = [{name:"jim"}, {name:"jim.li"}, {name:"jim.q"}, {name:"abc"}, {name:"qtk"}, {name:"qtoolkit"}];
		var vm = qtk.CollectionViewModel.create(data);
		vm.registerFilter("jim", {check:function(item) {
			return item.name.indexOf("jim") >= 0;
		}});
		vm.filter = "jim";
		var result = vm.total === 3;
		done(result ? null : new Error("filter failed."));
	});
    
    it("sort", (done) => {
		var data = [{name:"jim", age:100}, {name:"abc", age:108}, {name:"xyz", age:1},];
		var vm = qtk.CollectionViewModel.create(data);
		
		var nameIncComparator = qtk.ObjectPropComparator.create(qtk.StringComparator.create(), "name");
		vm.registerComparator("name-inc", nameIncComparator);
		vm.registerComparator("name-dec", qtk.RevertComparator.create(nameIncComparator));
		vm.comparator = "name-inc";
		var result = vm.getItemViewModel(0).getProp("name") === "abc" 
			&& vm.getItemViewModel(2).getProp("name") === "xyz"
		
		vm.comparator = "name-dec";
		result = result && vm.getItemViewModel(2).getProp("name") === "abc" 
			&& vm.getItemViewModel(0).getProp("name") === "xyz"

		done(result ? null : new Error("sort failed."));
	});
    
    it("remove", (done) => {
		var data = [{name:"jim"}, {name:"jim.li"}, {name:"jim.q"}, {name:"abc"}, {name:"qtk"}, {name:"qtoolkit"}];
		var vm = qtk.CollectionViewModel.create(data);
		vm.removeItems(function(item) {
			return item.name === "abc";
		});
		var result = vm.total === 5;
		done(result ? null : new Error("removeItems failed."));
	});
    
    it("hasItems", (done) => {
		var data = [{name:"jim"}, {name:"jim.li"}, {name:"jim.q"}, {name:"abc"}, {name:"qtk"}, {name:"qtoolkit"}];
		var vm = qtk.CollectionViewModel.create(data);
		var result = vm.hasItems(function(item) {
			return item.name === "abc";	
		})
		var noResult = !vm.hasItems(function(item) {
			return item.name === "ddd";	
		});
		done(result && noResult ? null : new Error("hasItems failed."));
	});
})
