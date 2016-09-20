
function addShowMessage(win, msg, w, h) {
	var item = qtk.Button.create({text:"Show Message"});
	item.on(qtk.Events.CLICK, function(evt) {
		qtk.MessageBox.showMessage(msg, w, h, function(evt) {
			console.log("close");
		});
	});
	win.addChild(item, true);
}

function addShowConfirm(win, msg, w, h) {
	var item = qtk.Button.create({text:"Show Confirm"});
	item.on(qtk.Events.CLICK, function(evt) {
		qtk.MessageBox.showConfirm(msg, w, h, function(evt) {
			console.log("yes");
		},function(evt) {
			console.log("no");
		});
	});
	win.addChild(item, true);
}

function addShowToast(win, msg, w, h) {
	var item = qtk.Button.create({text:"Show Toast"});
	item.on(qtk.Events.CLICK, function(evt) {
		qtk.MessageBox.showToast(msg, w, h, 1000);
	});
	win.addChild(item, true);
}

function addShowProgress(win, w, h) {
	function download(onProgress) {
		var progress = 0;
		function updateProgress() {
			progress += 0.1;
			onProgress(progress);
			if(progress < 1) {
				setTimeout(updateProgress, 1000);
			}
		}
		updateProgress();
	}

	var item = qtk.Button.create({text:"Show Progress"});
	item.on(qtk.Events.CLICK, function(evt) {
		qtk.MessageBox.showProgress("Downloading...", w, h, download, function(evt) {
			console.log("done");
		});
	});
	win.addChild(item, true);
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app,  w:vp.width, h:vp.height, padding : 10});
	
	win.childrenLayouter = qtk.GridLayouter.create({rowHeight:60, cols:3, margin:10});

	var text = "确保已经实现的控件，对使用者都是友好的，你可以无障碍的使用它们，请告诉我们任何让你产生挫>折的地方，一定会得到优先解决。在开发的过程中我们也会在博客中写出QTK内部实现原理，以及做出某些决策的原因。";
	addShowMessage(win, "Hello QToolKit!");
	addShowMessage(win, text);
	addShowMessage(win, text, 300);
	
	addShowConfirm(win, "Hello QToolKit!");
	addShowConfirm(win, text);
	addShowConfirm(win, text, 300);
	
	addShowProgress(win);
	addShowProgress(win, 300);
	addShowProgress(win, 300, 200);

	addShowToast(win, "Hello QToolKit!");
	addShowToast(win, text);
	addShowToast(win, text, 300);

	win.relayoutChildren();
	win.open();
}
