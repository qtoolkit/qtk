describe('TitleComboBox', function() {
	this.timeout(3000);
	var attrs = {
		title:"name",
		titleW:"30px",
		valueW:"60%",
		itemHeight:30,
		value:"Red"
	};

    it('test attr', (done) => {
    	var result = true;
    	var widget = qtk.TitleComboBox.create(attrs);
    	widget.addOption("Red");

    	for(var key in attrs) {
			if(attrs[key] !==  widget[key]) {
				result = false;
				break;
			}
		}

        done(result ? null : new Error("test attr"));
    });
})
