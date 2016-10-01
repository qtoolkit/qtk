describe('PropertyPage', function() {
	this.timeout(3000);
    var page = qtk.PropertyPage.create();
	var nameEdit = page.addEdit("Name", "QTK"); 
	var ageEdit = page.addEdit("Age", "100", "Age", "number"); 
	var urlEdit = page.addChoosableEdit("URL", "https://qtoolkit.github.io/demos/index.html");
	var descEdit = page.addTextArea("Desc", "QToolKit"); 
	var opacityEdit = page.addSlider("Opacity", 0.3); 
	var colorEdit = page.addComboBox("Color", "Red").addOption("Red").addOption("Green").addOption("Blue"); 
    
    it('test find', (done) => {
        var result = page.findByTitle("Name") === nameEdit 
        	&& ageEdit === page.findByTitle("Age")
        	colorEdit === page.findByTitle("Color");

        done(result ? null : new Error("find"));
    });
    
    it('test property', (done) => {
        var result = nameEdit.value === "QTK" && ageEdit.inputType === "number" && ageEdit.inputTips === "Age"
        done(result ? null : new Error("property"));
    });
})
