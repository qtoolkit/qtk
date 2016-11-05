describe('ViewModel', function() {
	this.timeout(3000);
	var data = {
		name:"qtk",
		age:100
	};

	var viewModel = qtk.ViewModel.create(data);

    it('get/set', viewModelTestGetSet.bind(viewModel));
    it('change', viewModelTestOnChange.bind(viewModel));
    it('remove', viewModelTestRemove.bind(viewModel));
    it('command', viewModelTestCommand.bind(viewModel));
    it('converter', viewModelTestConverter.bind(viewModel));
    it('validation', viewModelTestValidationRule.bind(viewModel));
})
