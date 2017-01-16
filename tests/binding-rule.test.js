describe('BindingRule', function() {
	this.timeout(3000);

    it('basic', function(done) {
    	var rule = qtk.BindingRule.create("name");
    	var item = rule.getSource("value");
		var result = item.prop === "value" && item.source.path === "/name" 
        done(result ? null : new Error("test basic"));
	});
    
    it('basic', function(done) {
    	var rule = qtk.BindingRule.create({value: "name"});
    	var item = rule.getSource("value");
		var result = item.prop === "value" && item.source.path === "/name" 
        done(result ? null : new Error("test basic"));
	});
    
    it('basic', function(done) {
    	var rule = qtk.BindingRule.create({value: {path:"name"}});
    	var item = rule.getSource("value");
		var result = item.prop === "value" && item.source.path === "/name" 
        done(result ? null : new Error("test basic"));
	});
    
    it('command', function(done) {
    	var rule = qtk.BindingRule.create({click: {command:"dummy"}});
    	var item = rule.getSource("click");
		var result = item.prop === "click" && item.source.command === "dummy" 
        done(result ? null : new Error("test command"));
	});
    
    it('json', function(done) {
    	var rule = qtk.BindingRule.create({click: {command:"dummy"}});
    	var ruleClone = qtk.BindingRule.createFromJson(rule.toJson());
    	var item = ruleClone.getSource("click");

		var result = item.prop === "click" && item.source.command === "dummy" 
        done(result ? null : new Error("test command"));
	});
})
