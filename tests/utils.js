
function equalJsonWidget(json, widget) {
	for(var key in json) {
		if(json[key] !== widget[key]) {
			return false;
		}
	}
	return true;
}

function testWidgetCloneJson(widget) {
	var json = widget.toJson();
	var jsonStr = JSON.stringify(json, null, "\t");
	
	var cloneWidget = widget.clone();
	var cloneJson = cloneWidget.toJson();
	var cloneJsonStr = JSON.stringify(cloneJson, null, "\t");

	return jsonStr === cloneJsonStr;
}
