
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
	//return 0;
};
var randomColorFactor = function() {
	return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
	return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
	type: 'line',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
			fill: false,
			borderDash: [5, 5],
		}, {
			hidden: true,
			label: 'hidden dataset',
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		}, {
			label: "My Second dataset",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		}]
	},
	options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			callbacks: {
				// beforeTitle: function() {
				//     return '...beforeTitle';
				// },
				// afterTitle: function() {
				//     return '...afterTitle';
				// },
				// beforeBody: function() {
				//     return '...beforeBody';
				// },
				// afterBody: function() {
				//     return '...afterBody';
				// },
				// beforeFooter: function() {
				//     return '...beforeFooter';
				// },
				// footer: function() {
				//     return 'Footer';
				// },
				// afterFooter: function() {
				//     return '...afterFooter';
				// },
			}
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				},
				ticks: {
					suggestedMin: -10,
					suggestedMax: 250,
				}
			}]
		}
	}
};

function each(arr, func) {
	arr.forEach(function(item, i) {
		func(i, item);
	});
}

each(config.data.datasets, function(i, dataset) {
	dataset.borderColor = randomColor(0.4);
	dataset.backgroundColor = randomColor(0.5);
	dataset.pointBorderColor = randomColor(0.7);
	dataset.pointBackgroundColor = randomColor(0.5);
	dataset.pointBorderWidth = 1;
});

function randomizeData() {
	each(config.data.datasets, function(i, dataset) {
		dataset.data = dataset.data.map(function() {
			return randomScalingFactor();
		});
	});
}

function addData() {
	var newDataset = {
		label: 'Dataset ' + config.data.datasets.length,
		borderColor: randomColor(0.4),
		backgroundColor: randomColor(0.5),
		pointBorderColor: randomColor(0.7),
		pointBackgroundColor: randomColor(0.5),
		pointBorderWidth: 1,
		data: [],
	};

	for (var index = 0; index < config.data.labels.length; ++index) {
		newDataset.data.push(randomScalingFactor());
	}

	config.data.datasets.push(newDataset);
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
	
	group.addChild(buttonAdd);
	group.addChild(buttonRemove);
	group.addChild(buttonRandom);

	win.open();
}
