function viewModalTestGetSet(done) {
	var result = true;
	var viewModal = this;
	viewModal.setProp("/address", "ShenZhen, China");
	result = viewModal.getProp("/address") === "ShenZhen, China";
	done(result ? null : new Error("viewModalTestGetSet"));
}

function viewModalTestOnChange(done) {
	var viewModal = this;
	viewModal.onChange(function(evt) {
		var result = evt.prop === "/address";
		done(result ? null : new Error("test on change"));
	});
	viewModal.setProp("/address", "ShenZhen, China");
}

function viewModalTestRemove(done) {
	var viewModal = this;
	viewModal.onChange(function(evt) {
		var result = evt.prop === "/address";
		done(result ? null : new Error("test on remove"));
	});
	viewModal.delProp("/address");
}

function viewModalTestCommand(done) {
	var viewModal = this;
	var cmd = qtk.DelegateCommand.create(function(args) {
		var result = args.value === 100;
		done(result ? null : new Error("test command"));
	});

	viewModal.registerCommand("dummy", cmd);
	viewModal.execCommand("dummy", {value:100});
}

function viewModalTestConverter(done) {
	var viewModal = this;
	var converter = qtk.DelegateValueConverter.create(function(value) {
		return value.toLowerCase();
	}, function(value) {
		return value.toUpperCase();
	});

	viewModal.registerValueConverter("dummy", converter);
	var c = viewModal.getValueConverter("dummy");
	
	var result = c === converter;
	done(result ? null : new Error("test converter"));
}

function viewModalTestValidationRule(done) {
	var viewModal = this;
	var validationRule = qtk.DelegateValidationRule.create(function(value) {
		return qtk.ValidationResult.validResult;
	});

	viewModal.registerValidationRule("dummy", validationRule);
	var v = viewModal.getValidationRule("dummy");
	
	var result = v === validationRule;
	done(result ? null : new Error("test validationRule"));
}



