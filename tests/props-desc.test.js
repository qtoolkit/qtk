
describe('PagePropsDesc', function() {
	this.timeout(3000);
	
	var json = [
		{type:"number", name:"Age", value:"100", desc:"age"},
		{type:"text", name:"Name", value:"QTK"},
		{type:"text-readonly", name:"Desc", value:"QToolKit"},
		{type:"vector2", name:"Point", value:{x:10, y:20}},
		{type:"vector3", name:"Point3D", value:{x:10, y:20, z:30}},
		{type:"range", name:"Range", value:{first:100, second:1000}},
		{type:"options", name:"Color", value:"Green", options:["Green", "Red", "Blue"]},
		{type:"slider", name:"Opacity", value:0.5}
	];

    it('basic', function(done) {
    	var pagePropsDesc = qtk.PagePropsDesc.create("name", json);
		var emptyDesc = qtk.PagePropsDesc.create();
		emptyDesc.fromJson(pagePropsDesc.toJson());

		var str1 = JSON.stringify(emptyDesc.toJson());
		var str2 = JSON.stringify(pagePropsDesc.toJson());

		var result = str1 === str2;
        done(result ? null : new Error("test basic"));
	});

})
    
