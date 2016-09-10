describe('Radio Button', function() {
	this.timeout(3000);
   
	function addButton(group, z, w, h, spacing, align) {
		var button = qtk.RadioButton.create().set({text:z.toString(),
			layoutParam: qtk.LinearLayouterParam.create({w:w, h:h, spacing:spacing, align:align, position:z})
		});
		group.addChild(button);

		return button;
	}

	var topGroup = qtk.Group.create().set({text:"Top", h:60});
	topGroup.childrenLayouter = qtk.LinearLayouter.createH({spacing:10});
	var b1 = addButton(topGroup, 1, "60", "50%", 10, qtk.Align.TOP);
	var b2 = addButton(topGroup, 2, "60", "50%", 10, qtk.Align.MIDDLE);
	var b3 = addButton(topGroup, 3, "60", "50%", 10, qtk.Align.BOTTOM);

    it('test Horizonal', (done) => {
		b3.value = true;
		b3.value = true;
		b1.value = true;
		var result = b1.value && !b2.value && !b3.value;

    	done(result ? null : new Error("radio button value"));
    });
    
});
  
