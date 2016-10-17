
var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
	return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
	return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
	type: 'pie',
	data: {
		datasets: [{
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
		}, {
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
		}, {
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
		}],
		labels: [
			"Red",
			"Green",
			"Yellow",
			"Grey",
			"Dark Grey"
		]
	},
	options: {
		maintainAspectRatio:false,
		responsive:true
	}
};

function addData() {
	var newDataset = {
		backgroundColor: [randomColor(0.7), randomColor(0.7), randomColor(0.7), randomColor(0.7), randomColor(0.7)],
		data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	};
	config.data.datasets.push(newDataset);
}

function randomizeData() {
	config.data.datasets.forEach(function(piece, i) {
		piece.data.forEach(function(value, j) {
			config.data.datasets[i].data[j] = randomScalingFactor();
			config.data.datasets[i].backgroundColor[j] = randomColor(0.7);
		});
	});
}

function onReady(app) {
	var win = qtk.WindowNormal.create({app:app}).maximize();
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var chartView = qtk.ChartView.create({config:config});
	chartView.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"center", w:"50%", h:"50%"});
	win.addChild(chartView);

	var group = qtk.Group.create();
	group.layoutParam = qtk.SimpleLayouterParam.create({x:"center", y:"-90", w:"50%", h:"50"});
	group.childrenLayouter = qtk.GridLayouter.create({rowHeight:40, cols:3, margin:5});
	
	win.addChild(group);

	var buttonRemove = qtk.Button.create({text:"remove"});
	buttonRemove.on(qtk.Events.CLICK, function() {
        config.data.datasets.splice(0, 1);
        chartView.update();
	});
	
	var buttonAdd = qtk.Button.create({text:"add"});
	buttonAdd.on(qtk.Events.CLICK, function() {
        addData();
        chartView.update();
	});

	var buttonRandom = qtk.Button.create({text:"random"});
	buttonRandom.on(qtk.Events.CLICK, function() {
		randomizeData();
        chartView.update();
	});
	
	var buttonResize = qtk.Button.create({text:"resize"});
	buttonResize.on(qtk.Events.CLICK, function() {
        chartView.w = 500;
	});

	group.addChild(buttonAdd);
	group.addChild(buttonRemove);
	group.addChild(buttonRandom);
//	group.addChild(buttonResize);

	win.open();
}
