describe('TitleEdit', function() {
	this.timeout(3000);
	var attrs = {
		title:"name",
		titleW:"30px",
		valueW:"60%",
		inputTips:"Name",
		inputType : "number"
	};

    it('test attr', (done) => {
    	var result = true;
    	var widget = qtk.TitleEdit.create(attrs);
    	for(var key in attrs) {
			if(attrs[key] !==  widget[key]) {
				result = false;
				break;
			}
		}

        done(result ? null : new Error("test attr"));
    });
})
