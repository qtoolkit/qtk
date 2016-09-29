"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rich_text_1 = require("./rich-text");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var carota = require('carota');
var createDoc = carota.document;
var dom = carota.dom;
var node = carota.node;
var text = carota.text;
var rect = carota.rect;
var frame = carota.frame;
var toggles = {
    66: 'bold',
    73: 'italic',
    85: 'underline',
    83: 'strikeout'
};
var RichTextEdit = (function (_super) {
    __extends(RichTextEdit, _super);
    function RichTextEdit() {
        _super.call(this, RichTextEdit.TYPE);
        this._element = null;
        this._textArea = null;
        this._keyboardX = null;
        this._focusChar = null;
        this._textAreaDiv = null;
        this._keyboardSelect = 0;
        this._textAreaContent = '';
        this._nextKeyboardX = null;
        this._richClipboard = null;
        this._plainClipboard = null;
        this._selectDragStart = null;
        this.focused = false;
        this.cachedWidth = 0;
        this.cachedHeight = 0;
        this.nextCaretToggle = Date.now();
    }
    RichTextEdit.prototype.undo = function () {
        this._doc.performUndo();
    };
    RichTextEdit.prototype.redo = function () {
        this._doc.performUndo(true);
    };
    RichTextEdit.prototype.selectAll = function () {
        var length = this._doc.frame.length - 1;
        this._doc.select(0, length);
    };
    RichTextEdit.prototype.setSelectedFont = function (value) {
        this.setSelectedFormatting("font", value);
    };
    RichTextEdit.prototype.getSelectedFont = function () {
        return this.getSelectedFormatting("font");
    };
    RichTextEdit.prototype.setSelectedSize = function (value) {
        this.setSelectedFormatting("size", value);
    };
    RichTextEdit.prototype.getSelectedSize = function () {
        return this.getSelectedFormatting("size");
    };
    RichTextEdit.prototype.setSelectedBold = function (value) {
        this.setSelectedFormatting("bold", value);
    };
    RichTextEdit.prototype.getSelectedBold = function () {
        return this.getSelectedFormatting("bold");
    };
    RichTextEdit.prototype.setSelectedItalic = function (value) {
        this.setSelectedFormatting("italic", value);
    };
    RichTextEdit.prototype.getSelectedItalic = function () {
        return this.getSelectedFormatting("italic");
    };
    RichTextEdit.prototype.setSelectedUnderline = function (value) {
        this.setSelectedFormatting("underline", value);
    };
    RichTextEdit.prototype.getSelectedUnderline = function () {
        return this.getSelectedFormatting("underline");
    };
    RichTextEdit.prototype.setSelectedStrikeout = function (value) {
        this.setSelectedFormatting("strikeout", value);
    };
    RichTextEdit.prototype.getSelectedStrikeout = function () {
        return this.getSelectedFormatting("strikeout");
    };
    RichTextEdit.prototype.setSelectedAlign = function (value) {
        this.setSelectedFormatting("align", value);
    };
    RichTextEdit.prototype.getSelectedAlign = function () {
        return this.getSelectedFormatting("align");
    };
    RichTextEdit.prototype.setSelectedScript = function (value) {
        this.setSelectedFormatting("script", value);
    };
    RichTextEdit.prototype.getSelectedScript = function () {
        return this.getSelectedFormatting("script");
    };
    RichTextEdit.prototype.setSelectedColor = function (value) {
        this.setSelectedFormatting("color", value);
    };
    RichTextEdit.prototype.getSelectedColor = function () {
        return this.getSelectedFormatting("color");
    };
    RichTextEdit.prototype.setSelectedFormatting = function (id, value) {
        var range = this._doc.selectedRange();
        range.setFormatting(id, value);
        return this;
    };
    RichTextEdit.prototype.getSelectedFormatting = function (id) {
        return null;
    };
    RichTextEdit.prototype.exhausted = function (ordinal, direction) {
        return direction < 0 ? ordinal <= 0 : ordinal >= this._doc.frame.length - 1;
    };
    ;
    RichTextEdit.prototype.differentLine = function (caret1, caret2) {
        return (caret1.b <= caret2.t) || (caret2.b <= caret1.t);
    };
    ;
    RichTextEdit.prototype.changeLine = function (ordinal, direction) {
        var originalCaret = this._doc.getCaretCoords(ordinal), newCaret;
        this._nextKeyboardX = (this._keyboardX !== null) ? this._keyboardX : originalCaret.l;
        while (!this.exhausted(ordinal, direction)) {
            ordinal += direction;
            newCaret = this._doc.getCaretCoords(ordinal);
            if (this.differentLine(newCaret, originalCaret)) {
                break;
            }
        }
        originalCaret = newCaret;
        while (!this.exhausted(ordinal, direction)) {
            if ((direction > 0 && newCaret.l >= this._nextKeyboardX) ||
                (direction < 0 && newCaret.l <= this._nextKeyboardX)) {
                break;
            }
            ordinal += direction;
            newCaret = this._doc.getCaretCoords(ordinal);
            if (this.differentLine(newCaret, originalCaret)) {
                ordinal -= direction;
                break;
            }
        }
        return ordinal;
    };
    ;
    RichTextEdit.prototype.endOfline = function (ordinal, direction) {
        var originalCaret = this._doc.getCaretCoords(ordinal), newCaret;
        while (!this.exhausted(ordinal, direction)) {
            ordinal += direction;
            newCaret = this._doc.getCaretCoords(ordinal);
            if (this.differentLine(newCaret, originalCaret)) {
                ordinal -= direction;
                break;
            }
        }
        return ordinal;
    };
    ;
    RichTextEdit.prototype.handleKey = function (key, selecting, ctrlKey) {
        var doc = this._doc;
        var start = doc.selection.start, end = doc.selection.end, length = doc.frame.length - 1, handled = false;
        this._nextKeyboardX = null;
        if (!selecting) {
            this._keyboardSelect = 0;
        }
        else if (!this._keyboardSelect) {
            switch (key) {
                case 37: // left arrow
                case 38: // up - find character above
                case 36: // start of line
                case 33:
                    this._keyboardSelect = -1;
                    break;
                case 39: // right arrow
                case 40: // down arrow - find character below
                case 35: // end of line
                case 34:
                    this._keyboardSelect = 1;
                    break;
            }
        }
        var ordinal = this._keyboardSelect === 1 ? end : start;
        var changingCaret = false;
        switch (key) {
            case 37:
                if (!selecting && start != end) {
                    ordinal = start;
                }
                else {
                    if (ordinal > 0) {
                        if (ctrlKey) {
                            var wordInfo = doc.wordContainingOrdinal(ordinal);
                            if (wordInfo.ordinal === ordinal) {
                                ordinal = wordInfo.index > 0 ? doc.wordOrdinal(wordInfo.index - 1) : 0;
                            }
                            else {
                                ordinal = wordInfo.ordinal;
                            }
                        }
                        else {
                            ordinal--;
                        }
                    }
                }
                changingCaret = true;
                break;
            case 39:
                if (!selecting && start != end) {
                    ordinal = end;
                }
                else {
                    if (ordinal < length) {
                        if (ctrlKey) {
                            var wordInfo = doc.wordContainingOrdinal(ordinal);
                            ordinal = wordInfo.ordinal + wordInfo.word.length;
                        }
                        else {
                            ordinal++;
                        }
                    }
                }
                changingCaret = true;
                break;
            case 40:
                ordinal = this.changeLine(ordinal, 1);
                changingCaret = true;
                break;
            case 38:
                ordinal = this.changeLine(ordinal, -1);
                changingCaret = true;
                break;
            case 36:
                ordinal = this.endOfline(ordinal, -1);
                changingCaret = true;
                break;
            case 35:
                ordinal = this.endOfline(ordinal, 1);
                changingCaret = true;
                break;
            case 33:
                ordinal = 0;
                changingCaret = true;
                break;
            case 34:
                ordinal = length;
                changingCaret = true;
                break;
            case 8:
                if (start === end && start > 0) {
                    doc.range(start - 1, start).clear();
                    this._focusChar = start - 1;
                    doc.select(this._focusChar, this._focusChar);
                    handled = true;
                }
                break;
            case 46:
                if (start === end && start < length) {
                    doc.range(start, start + 1).clear();
                    handled = true;
                }
                break;
            case 90:
                if (ctrlKey) {
                    handled = true;
                    doc.performUndo();
                }
                break;
            case 89:
                if (ctrlKey) {
                    handled = true;
                    doc.performUndo(true);
                }
                break;
            case 65:
                if (ctrlKey) {
                    handled = true;
                    doc.select(0, length);
                }
                break;
            case 67: // C - copy to clipboard
            case 88:
                if (ctrlKey) {
                    // Allow standard handling to take place as well
                    this._richClipboard = doc.selectedRange().save();
                    this._plainClipboard = doc.selectedRange().plainText();
                }
                break;
        }
        var toggle = toggles[key];
        if (ctrlKey && toggle) {
            var selRange = doc.selectedRange();
            selRange.setFormatting(toggle, selRange.getFormatting()[toggle] !== true);
            handled = true;
            this.requestRedraw();
        }
        if (changingCaret) {
            switch (this._keyboardSelect) {
                case 0:
                    start = end = ordinal;
                    break;
                case -1:
                    start = ordinal;
                    break;
                case 1:
                    end = ordinal;
                    break;
            }
            if (start === end) {
                this._keyboardSelect = 0;
            }
            else {
                if (start > end) {
                    this._keyboardSelect = -this._keyboardSelect;
                    var t = end;
                    end = start;
                    start = t;
                }
            }
            this._focusChar = ordinal;
            doc.select(start, end);
            handled = true;
        }
        this._keyboardX = this._nextKeyboardX;
        return handled;
    };
    ;
    RichTextEdit.prototype.findNodeByEvent = function (evt) {
        var x = evt.x - this.x + this.offsetX;
        var y = evt.y - this.y + this.offsetY;
        var node = this._doc.byCoordinate(x, y - this.getVerticalOffset());
        return node;
    };
    RichTextEdit.prototype.dispatchDblClick = function (evt) {
        var node = this.findNodeByEvent(evt).parent();
        if (node) {
            this._doc.select(node.ordinal, node.ordinal +
                (node.word ? node.word.text.length : node.length));
        }
    };
    RichTextEdit.prototype.updateTextArea = function () {
        var doc = this._doc;
        var textArea = this._textArea;
        var textAreaDiv = this._textAreaDiv;
        var element = this._element;
        this._focusChar = this._focusChar === null ? doc.selection.end : this._focusChar;
        var endChar = doc.byOrdinal(this._focusChar);
        this._focusChar = null;
        if (endChar) {
            var bounds = endChar.bounds();
            textAreaDiv.style.left = bounds.l + 'px';
            textAreaDiv.style.top = bounds.t + 'px';
            textArea.focus();
            var scrollDownBy = Math.max(0, bounds.t + bounds.h -
                (element.scrollTop + element.clientHeight));
            if (scrollDownBy) {
                element.scrollTop += scrollDownBy;
            }
            var scrollUpBy = Math.max(0, element.scrollTop - bounds.t);
            if (scrollUpBy) {
                element.scrollTop -= scrollUpBy;
            }
            var scrollRightBy = Math.max(0, bounds.l -
                (element.scrollLeft + element.clientWidth));
            if (scrollRightBy) {
                element.scrollLeft += scrollRightBy;
            }
            var scrollLeftBy = Math.max(0, element.scrollLeft - bounds.l);
            if (scrollLeftBy) {
                element.scrollLeft -= scrollLeftBy;
            }
        }
        this._textAreaContent = doc.selectedRange().plainText();
        textArea.value = this._textAreaContent;
        textArea.select();
        setTimeout(function () {
            textArea.focus();
        }, 10);
        return;
    };
    ;
    RichTextEdit.prototype.dispatchPointerDown = function (evt, ctx) {
        var doc = this._doc;
        var node = this.findNodeByEvent(evt);
        this._selectDragStart = node.ordinal;
        doc.select(node.ordinal, node.ordinal);
        this._keyboardX = null;
        this.requestRedraw();
    };
    RichTextEdit.prototype.dispatchPointerUp = function (evt) {
        var node = this.findNodeByEvent(evt);
        this._selectDragStart = null;
        this._keyboardX = null;
        this.updateTextArea();
        this.requestRedraw();
        this._textArea.focus();
    };
    RichTextEdit.prototype.dispatchPointerMove = function (evt, ctx) {
        var doc = this._doc;
        var node = this.findNodeByEvent(evt);
        if (this._selectDragStart !== null) {
            if (node) {
                this._focusChar = node.ordinal;
                if (this._selectDragStart > node.ordinal) {
                    doc.select(node.ordinal, this._selectDragStart);
                }
                else {
                    doc.select(this._selectDragStart, node.ordinal);
                }
            }
        }
        this.requestRedraw();
    };
    RichTextEdit.prototype.onInit = function () {
        var _this = this;
        _super.prototype.onInit.call(this);
        var doc = this._doc;
        var div = document.createElement("div");
        div.innerHTML = '<div class="carotaTextArea" style="overflow: hidden; position: absolute; height: 0;">' +
            '<textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" ' +
            'style="position: absolute; padding: 0px; width: 1000px; height: 1em; ' +
            'outline: none; font-size: 4px;"></textarea>';
        '</div>';
        document.body.appendChild(div);
        this._element = div;
        var textAreaDiv = div.querySelector('.carotaTextArea');
        var textArea = div.querySelector('textarea');
        this._textArea = textArea;
        this._textAreaDiv = textAreaDiv;
        dom.handleEvent(textArea, 'keydown', function (evt) {
            _this.handleKey(evt.keyCode, evt.shiftKey, evt.ctrlKey);
        });
        dom.handleEvent(textArea, 'input', function (evt) {
            var newText = textArea.value;
            if (_this._textAreaContent != newText) {
                _this._textAreaContent = '';
                textArea.value = '';
                if (newText === _this._plainClipboard) {
                    newText = _this._richClipboard;
                }
                doc.insert(newText);
            }
            _this.requestRedraw();
        });
        var timer = setInterval(function (evt) {
            if (_this.parent) {
                _this.updateCaret();
            }
            else {
                clearInterval(timer);
            }
        }, 200);
        doc.selectionChanged(function (getformatting, takeFocus) {
            _this.requestRedraw();
            if (!_this._selectDragStart) {
                if (takeFocus !== false) {
                    _this.updateTextArea();
                }
            }
        });
    };
    RichTextEdit.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        document.body.removeChild(this._textAreaDiv);
        this._textArea = null;
        this._textAreaDiv = null;
    };
    RichTextEdit.prototype.updateCaret = function () {
        var doc = this._doc;
        var requirePaint = false;
        var textArea = this._textArea;
        var newFocused = document.activeElement === textArea;
        if (this.focused !== newFocused) {
            this.focused = newFocused;
            requirePaint = true;
        }
        var now = Date.now();
        if (now > this.nextCaretToggle) {
            this.nextCaretToggle = now + 500;
            if (doc.toggleCaret()) {
                requirePaint = true;
            }
        }
        if (this.w !== this.cachedWidth ||
            this.h !== this.cachedHeight) {
            requirePaint = true;
            this.cachedWidth = this.w;
            this.cachedHeight = this.h;
        }
        if (requirePaint) {
            this.requestRedraw();
        }
    };
    ;
    RichTextEdit.prototype.hasFocus = function () {
        return this._selectDragStart || (document.activeElement === this._textArea);
    };
    RichTextEdit.create = function (options) {
        return RichTextEdit.rBin.create().reset(RichTextEdit.TYPE, options);
    };
    RichTextEdit.TYPE = "rich-text-edit";
    RichTextEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new RichTextEdit(); });
    return RichTextEdit;
}(rich_text_1.RichText));
exports.RichTextEdit = RichTextEdit;
;
widget_factory_1.WidgetFactory.register(RichTextEdit.TYPE, RichTextEdit.create);
