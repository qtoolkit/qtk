var CanvasCommandCode = {
	CMD_SAVE : 0,
	CMD_RESTORE : 1,
	CMD_SCALE : 2,
	CMD_ROTATE : 3,
	CMD_TRANSLATE : 4,
	CMD_TRANSFORM : 5,
	CMD_SETTRANSFORM : 6,
	CMD_SET_GLOBALALPHA : 7,
	CMD_SET_GLOBALCOMPOSITEOPERATION : 8,
	CMD_SET_STROKESTYLE : 9,
	CMD_SET_FILLSTYLE : 10,
	CMD_CLEARRECT : 11,
	CMD_FILLRECT : 12,
	CMD_STROKERECT : 13,
	CMD_BEGINPATH : 14,
	CMD_FILL : 15,
	CMD_STROKE : 16,
	CMD_CLIP : 17,
	CMD_FILLTEXT : 18,
	CMD_STROKETEXT : 19,
	CMD_DRAWIMAGE3 : 20,
	CMD_DRAWIMAGE5 : 21,
	CMD_DRAWIMAGE9 : 22,
	CMD_SET_LINEWIDTH : 23,
	CMD_SET_LINECAP : 24,
	CMD_SET_LINEJOIN : 25,
	CMD_SET_MITERLIMIT : 26,
	CMD_SET_FONT : 27,
	CMD_SET_TEXTALIGN : 28,
	CMD_SET_TEXTBASELINE : 29,
	CMD_CLOSEPATH : 30,
	CMD_MOVETO : 31,
	CMD_LINETO : 32,
	CMD_QUADRATICCURVETO : 33,
	CMD_BEZIERCURVETO : 34,
	CMD_ARCTO : 35,
	CMD_RECT : 36,
	CMD_ARC : 37
}

function CanvasContext2dMock(){
	this.cmds = [];
	this.strs = [];
}

CanvasContext2dMock.prototype.imageToNumber = function(img) {
	return img.imgID || this.stringToNumber(img.src);;
}

CanvasContext2dMock.prototype.constStringToNumber = CanvasContext2dMock.prototype.stringToNumber = function(str) {
	var index = this.strs.indexOf(str);

	if(index < 0) {
		index = this.strs.length;
		this.strs.push(str);
	}

	return index;
}

CanvasContext2dMock.prototype.save = function() {
	this.cmds.push(CanvasCommandCode.CMD_SAVE);
};

CanvasContext2dMock.prototype.restore = function() {
	this.cmds.push(CanvasCommandCode.CMD_RESTORE);
};

CanvasContext2dMock.prototype.scale = function(x, y) {
	this.cmds.push(CanvasCommandCode.CMD_SCALE, x, y);
};

CanvasContext2dMock.prototype.rotate = function(angle) {
	this.cmds.push(CanvasCommandCode.CMD_ROTATE, angle);
};

CanvasContext2dMock.prototype.translate = function(x, y) {
	this.cmds.push(CanvasCommandCode.CMD_TRANSLATE, x, y);
};

CanvasContext2dMock.prototype.transform = function(a, b, c, d, e, f) {
	this.cmds.push(CanvasCommandCode.CMD_TRANSFORM, a, b, c, d, e, f);
};

CanvasContext2dMock.prototype.setTransform = function(a, b, c, d, e, f) {
	this.cmds.push(CanvasCommandCode.CMD_SETTRANSFORM, a, b, c, d, e, f);
};

Object.defineProperty(CanvasContext2dMock.prototype, "globalAlpha", {
	get: function () {
		return this._globalAlpha;
	},
	set: function (value) {
		this._globalAlpha = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_GLOBALALPHA, value);
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "globalCompositeOperation", {
	get: function () {
		return this._globalCompositeOperation;
	},
	set: function (value) {
		this._globalCompositeOperation = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_GLOBALCOMPOSITEOPERATION, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "strokeStyle", {
	get: function () {
		return this._strokeStyle;
	},
	set: function (value) {
		this._strokeStyle = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_STROKESTYLE, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "fillStyle", {
	get: function () {
		return this._fillStyle;
	},
	set: function (value) {
		this._fillStyle = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_FILLSTYLE, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

CanvasContext2dMock.prototype.clearRect = function(x, y, w, h) {
	this.cmds.push(CanvasCommandCode.CMD_CLEARRECT, x, y, w, h);
};

CanvasContext2dMock.prototype.fillRect = function(x, y, w, h) {
	this.cmds.push(CanvasCommandCode.CMD_FILLRECT, x, y, w, h);
};

CanvasContext2dMock.prototype.strokeRect = function(x, y, w, h) {
	this.cmds.push(CanvasCommandCode.CMD_STROKERECT, x, y, w, h);
};

CanvasContext2dMock.prototype.beginPath = function() {
	this.cmds.push(CanvasCommandCode.CMD_BEGINPATH);
};

CanvasContext2dMock.prototype.fill = function() {
	this.cmds.push(CanvasCommandCode.CMD_FILL);
};

CanvasContext2dMock.prototype.stroke = function() {
	this.cmds.push(CanvasCommandCode.CMD_STROKE);
};

CanvasContext2dMock.prototype.clip = function() {
	this.cmds.push(CanvasCommandCode.CMD_CLIP);
};

CanvasContext2dMock.prototype.fillText = function(text, x, y, maxWidth) {
	this.cmds.push(CanvasCommandCode.CMD_FILLTEXT, this.stringToNumber(text), x, y, maxWidth);
};

CanvasContext2dMock.prototype.strokeText = function(text, x, y, maxWidth) {
	this.cmds.push(CanvasCommandCode.CMD_STROKETEXT, this.stringToNumber(text), x, y, maxWidth);
};

CanvasContext2dMock.prototype.drawImage3 = function(image, dx, dy) {
	this.cmds.push(CanvasCommandCode.CMD_DRAWIMAGE3, this.imageToNumber(image), dx, dy);
};

CanvasContext2dMock.prototype.drawImage5 = function(image, dx, dy, dw, dh) {
	this.cmds.push(CanvasCommandCode.CMD_DRAWIMAGE5, this.imageToNumber(image), dx, dy, dw, dh);
};

CanvasContext2dMock.prototype.drawImage9 = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
	this.cmds.push(CanvasCommandCode.CMD_DRAWIMAGE9, this.imageToNumber(image), sx, sy, sw, sh, dx, dy, dw, dh);
};

CanvasContext2dMock.prototype.drawImage = function(image) {
	var n = arguments.length;
	if(n === 3) {
		this.drawImage3(image, arguments[1], arguments[2]);
	}else if(n === 5) {
		this.drawImage5(image, arguments[1], arguments[2], arguments[3], arguments[4]);
	}else if(n === 9) {
		this.drawImage9(image, arguments[1], arguments[2], arguments[3], arguments[4],
				arguments[5], arguments[6], arguments[7], arguments[8]);
	}
}

Object.defineProperty(CanvasContext2dMock.prototype, "lineWidth", {
	get: function () {
		return this._lineWidth;
	},
	set: function (value) {
		this._lineWidth = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_LINEWIDTH, value);
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "lineCap", {
	get: function () {
		return this._lineCap;
	},
	set: function (value) {
		this._lineCap = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_LINECAP, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "lineJoin", {
	get: function () {
		return this._lineJoin;
	},
	set: function (value) {
		this._lineJoin = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_LINEJOIN, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "miterLimit", {
	get: function () {
		return this._miterLimit;
	},
	set: function (value) {
		this._miterLimit = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_MITERLIMIT, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "font", {
	get: function () {
		return this._font;
	},
	set: function (value) {
		this._font = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_FONT, this.stringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "textAlign", {
	get: function () {
		return this._textAlign;
	},
	set: function (value) {
		this._textAlign = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_TEXTALIGN, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasContext2dMock.prototype, "textBaseline", {
	get: function () {
		return this._textBaseline;
	},
	set: function (value) {
		this._textBaseline = value;
		this.cmds.push(CanvasCommandCode.CMD_SET_TEXTBASELINE, this.constStringToNumber(value));
		return this;
	},
	enumerable: false,
	configurable: true
});

CanvasContext2dMock.prototype.closePath = function() {
	this.cmds.push(CanvasCommandCode.CMD_CLOSEPATH);
};

CanvasContext2dMock.prototype.moveTo = function(x, y) {
	this.cmds.push(CanvasCommandCode.CMD_MOVETO, x, y);
};

CanvasContext2dMock.prototype.lineTo = function(x, y) {
	this.cmds.push(CanvasCommandCode.CMD_LINETO, x, y);
};

CanvasContext2dMock.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
	this.cmds.push(CanvasCommandCode.CMD_QUADRATICCURVETO, cpx, cpy, x, y);
};

CanvasContext2dMock.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
	this.cmds.push(CanvasCommandCode.CMD_BEZIERCURVETO, cp1x, cp1y, cp2x, cp2y, x, y);
};

CanvasContext2dMock.prototype.arcTo = function(x1, y1, x2, y2, radius) {
	this.cmds.push(CanvasCommandCode.CMD_ARCTO, x1, y1, x2, y2, radius);
};

CanvasContext2dMock.prototype.rect = function(x, y, w, h) {
	this.cmds.push(CanvasCommandCode.CMD_RECT, x, y, w, h);
};

CanvasContext2dMock.prototype.arc = function(x, y, radius, startAngle, endAngle, counterclockwise) {
	this.cmds.push(CanvasCommandCode.CMD_ARC, x, y, radius, startAngle, endAngle, this.boolToNumber(counterclockwise));
};

//////////////////////////////////////////////////////

CanvasContext2dMock.prototype.reset = function() { 
	this.cmds = [];
	this.strs = [];

	return this;
}

CanvasContext2dMock.prototype.toString = function() {
	var obj = {
		cmds : this.cmds,
		strs : this.strs
	}

	return JSON.stringify(obj);
}

CanvasContext2dMock.get = function() {
	if(!CanvasContext2dMock.instance) {
		CanvasContext2dMock.instance = new CanvasContext2dMock();
	}

	return CanvasContext2dMock.instance.reset();
}

CanvasContext2dMock.test = function() {
	var ctx = CanvasContext2dMock.get();

	ctx.fillText("hello", 100, 200, 60);
	console.log(ctx.toString());
	
	ctx.reset();
	ctx.fillText("hello", 100, 200, 60);
	console.log(ctx.toString());
}

CanvasContext2dMock.test();

