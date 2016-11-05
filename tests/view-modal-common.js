function viewModelTestGetSet(done) {
	var result = true;
	var viewModel = this;
	viewModel.setProp("/address", "ShenZhen, China");
	result = viewModel.getProp("/address") === "ShenZhen, China";
	done(result ? null : new Error("viewModelTestGetSet"));
}

function viewModelTestOnChange(done) {
	var viewModel = this;
	viewModel.onChange(function(evt) {
		var result = evt.prop === "/address";
		done(result ? null : new Error("test on change"));
	});
	viewModel.setProp("/address", "ShenZhen, China");
}

function viewModelTestRemove(done) {
	var viewModel = this;
	viewModel.onChange(function(evt) {
		var result = evt.prop === "/address";
		done(result ? null : new Error("test on remove"));
	});
	viewModel.delProp("/address");
}

function viewModelTestCommand(done) {
	var viewModel = this;
	var cmd = qtk.DelegateCommand.create(function(args) {
		var result = args.value === 100;
		done(result ? null : new Error("test command"));
	});

	viewModel.registerCommand("dummy", cmd);
	viewModel.execCommand("dummy", {value:100});
}

function viewModelTestConverter(done) {
	var viewModel = this;
	var converter = qtk.DelegateValueConverter.create(function(value) {
		return value.toLowerCase();
	}, function(value) {
		return value.toUpperCase();
	});

	viewModel.registerValueConverter("dummy", converter);
	var c = viewModel.getValueConverter("dummy");
	
	var result = c === converter;
	done(result ? null : new Error("test converter"));
}

function viewModelTestValidationRule(done) {
	var viewModel = this;
	var validationRule = qtk.DelegateValidationRule.create(function(value) {
		return qtk.ValidationResult.validResult;
	});

	viewModel.registerValidationRule("dummy", validationRule);
	var v = viewModel.getValidationRule("dummy");
	
	var result = v === validationRule;
	done(result ? null : new Error("test validationRule"));
}



