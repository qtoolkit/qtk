
import {Style} from "../style";
import {Widget} from "./widget";
import {RichText} from "./rich-text";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

var carota = require('carota');

var createDoc = carota.document;
var dom   = carota.dom;
var node  = carota.node;
var text  = carota.text;
var rect  = carota.rect;
var frame = carota.frame;

var toggles = {
	66: 'bold',
	73: 'italic',
	85: 'underline',
	83: 'strikeout'
};

export class RichTextEdit extends RichText {
	protected _element = null;
	protected _textArea = null;
	protected _keyboardX = null;
	protected _focusChar = null;
	protected _textAreaDiv = null;
	protected _keyboardSelect = 0;
	protected _textAreaContent = '';
	protected _nextKeyboardX = null;
	protected _richClipboard = null;
	protected _plainClipboard = null;
	protected _selectDragStart = null;

	constructor() {
		super(RichTextEdit.TYPE);
	}

	public undo() {
		this._doc.performUndo();
	}
	
	public redo() {
		this._doc.performUndo(true);
	}

	public selectAll() {
		var length = this._doc.frame.length - 1;
		this._doc.select(0, length);
	}

	public setSelectedFont(value:any) {
		this.setSelectedFormatting("font", value);
	}
	public getSelectedFont() : any {
		return this.getSelectedFormatting("font");
	}
	public setSelectedSize(value:any) {
		this.setSelectedFormatting("size", value);
	}
	public getSelectedSize() : any {
		return this.getSelectedFormatting("size");
	}
	public setSelectedBold(value:any) {
		this.setSelectedFormatting("bold", value);
	}
	public getSelectedBold() : any {
		return this.getSelectedFormatting("bold");
	}
	public setSelectedItalic(value:any) {
		this.setSelectedFormatting("italic", value);
	}
	public getSelectedItalic() : any {
		return this.getSelectedFormatting("italic");
	}
	public setSelectedUnderline(value:any) {
		this.setSelectedFormatting("underline", value);
	}
	public getSelectedUnderline() : any {
		return this.getSelectedFormatting("underline");
	}
	public setSelectedStrikeout(value:any) {
		this.setSelectedFormatting("strikeout", value);
	}
	public getSelectedStrikeout() : any {
		return this.getSelectedFormatting("strikeout");
	}
	public setSelectedAlign(value:any) {
		this.setSelectedFormatting("align", value);
	}
	public getSelectedAlign() : any {
		return this.getSelectedFormatting("align");
	}
	public setSelectedScript(value:any) {
		this.setSelectedFormatting("script", value);
	}
	public getSelectedScript() : any {
		return this.getSelectedFormatting("script");
	}
	public setSelectedColor(value:any) {
		this.setSelectedFormatting("color", value);
	}
	public getSelectedColor() : any {
		return this.getSelectedFormatting("color");
	}

	public setSelectedFormatting(id:string, value:any) : Widget {
		var range = this._doc.selectedRange();
		range.setFormatting(id, value);

		return this;
	}
	
	public getSelectedFormatting(id:string) : any {
		return  null;
	}

    protected exhausted(ordinal, direction) {
        return direction < 0 ? ordinal <= 0 : ordinal >= this._doc.frame.length - 1;
    };

    protected differentLine (caret1, caret2) {
        return (caret1.b <= caret2.t) || (caret2.b <= caret1.t);
    };

    protected changeLine(ordinal, direction) {
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

    protected endOfline(ordinal, direction) {
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

    protected handleKey(key, selecting, ctrlKey) {
    	var doc = this._doc;
        var start = doc.selection.start,
            end = doc.selection.end,
            length = doc.frame.length - 1,
            handled = false;

        this._nextKeyboardX = null;

        if (!selecting) {
            this._keyboardSelect = 0;
        } else if (!this._keyboardSelect) {
            switch (key) {
                case 37: // left arrow
                case 38: // up - find character above
                case 36: // start of line
                case 33: // page up
                    this._keyboardSelect = -1;
                    break;
                case 39: // right arrow
                case 40: // down arrow - find character below
                case 35: // end of line
                case 34: // page down
                    this._keyboardSelect = 1;
                    break;
            }
        }

        var ordinal = this._keyboardSelect === 1 ? end : start;

        var changingCaret = false;
        switch (key) {
            case 37: // left arrow
                if (!selecting && start != end) {
                    ordinal = start;
                } else {
                    if (ordinal > 0) {
                        if (ctrlKey) {
                            var wordInfo = doc.wordContainingOrdinal(ordinal);
                            if (wordInfo.ordinal === ordinal) {
                                ordinal = wordInfo.index > 0 ? doc.wordOrdinal(wordInfo.index - 1) : 0;
                            } else {
                                ordinal = wordInfo.ordinal;
                            }
                        } else {
                            ordinal--;
                        }
                    }
                }
                changingCaret = true;
                break;
            case 39: // right arrow
                if (!selecting && start != end) {
                    ordinal = end;
                } else {
                    if (ordinal < length) {
                        if (ctrlKey) {
                            var wordInfo = doc.wordContainingOrdinal(ordinal);
                            ordinal = wordInfo.ordinal + wordInfo.word.length;
                        } else {
                            ordinal++;
                        }
                    }
                }
                changingCaret = true;
                break;
            case 40: // down arrow - find character below
                ordinal = this.changeLine(ordinal, 1);
                changingCaret = true;
                break;
            case 38: // up - find character above
                ordinal = this.changeLine(ordinal, -1);
                changingCaret = true;
                break;
            case 36: // start of line
                ordinal = this.endOfline(ordinal, -1);
                changingCaret = true;
                break;
            case 35: // end of line
                ordinal = this.endOfline(ordinal, 1);
                changingCaret = true;
                break;
            case 33: // page up
                ordinal = 0;
                changingCaret = true;
                break;
            case 34: // page down
                ordinal = length;
                changingCaret = true;
                break;
            case 8: // backspace
                if (start === end && start > 0) {
                    doc.range(start - 1, start).clear();
                    this._focusChar = start - 1;
                    doc.select(this._focusChar, this._focusChar);
                    handled = true;
                }
                break;
            case 46: // del
                if (start === end && start < length) {
                    doc.range(start, start + 1).clear();
                    handled = true;
                }
                break;
            case 90: // Z undo
                if (ctrlKey) {
                    handled = true;
                    doc.performUndo();
                }
                break;
            case 89: // Y undo
                if (ctrlKey) {
                    handled = true;
                    doc.performUndo(true);
                }
                break;
            case 65: // A select all
                if (ctrlKey) {
                    handled = true;
                    doc.select(0, length);
                }
                break;
            case 67: // C - copy to clipboard
            case 88: // X - cut to clipboard
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
            } else {
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
    
	protected findNodeByEvent(evt:any) {
		var x = evt.x - this.x + this.offsetX;
		var y = evt.y - this.y + this.offsetY;
        var node = this._doc.byCoordinate(x, y - this.getVerticalOffset());

        return node;
    }

	protected dispatchDblClick(evt:any) {
        var node = this.findNodeByEvent(evt).parent();
        if (node) {
            this._doc.select(node.ordinal, node.ordinal +
                (node.word ? node.word.text.length : node.length));
        }
	}

    protected updateTextArea () {
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

        setTimeout(function() {
            textArea.focus();
        }, 10);
    	return;
    };

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
        var doc = this._doc;
        var node = this.findNodeByEvent(evt);
        this._selectDragStart = node.ordinal;
        doc.select(node.ordinal, node.ordinal);
        this._keyboardX = null;
        this.requestRedraw();
	}

	protected dispatchPointerUp(evt:Events.PointerEvent) {
        var node = this.findNodeByEvent(evt);
        this._selectDragStart = null;
        this._keyboardX = null;
        this.updateTextArea();
        this.requestRedraw();
        this._textArea.focus();
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
        var doc = this._doc;
        var node = this.findNodeByEvent(evt);

        if (this._selectDragStart !== null) {
            if (node) {
                this._focusChar = node.ordinal;
                if (this._selectDragStart > node.ordinal) {
                    doc.select(node.ordinal, this._selectDragStart);
                } else {
                    doc.select(this._selectDragStart, node.ordinal);
                }
            }
        }
        this.requestRedraw();
	}
    
	protected onInit() {
		super.onInit();
		var doc = this._doc;
		var div = document.createElement("div");
		
		div.innerHTML = '<div class="carotaTextArea" style="overflow: hidden; position: absolute; height: 0;">' +
            '<textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" ' +
            'style="position: absolute; padding: 0px; width: 1000px; height: 1em; ' +
            'outline: none; font-size: 4px;"></textarea>'
        '</div>';
        document.body.appendChild(div);

		this._element = div;
        var textAreaDiv = div.querySelector('.carotaTextArea');
        var textArea = <HTMLTextAreaElement>div.querySelector('textarea');
    
    	this._textArea = textArea;
    	this._textAreaDiv = textAreaDiv;

    	dom.handleEvent(textArea, 'keydown', evt => {
        	this.handleKey(evt.keyCode, evt.shiftKey, evt.ctrlKey);
		});

    	dom.handleEvent(textArea, 'input', evt => {
			var newText = textArea.value;
			if (this._textAreaContent != newText) {
				this._textAreaContent = '';
				textArea.value = '';
				if (newText === this._plainClipboard) {
					newText = this._richClipboard;
				}
				doc.insert(newText);
			}
			this.requestRedraw();
    	});

    	var timer = setInterval(evt => {
    		if(this.parent) {
    			this.updateCaret();
			}else{
				clearInterval(timer);
			}
		}, 200);
    
    	doc.selectionChanged((getformatting, takeFocus) => {
        	this.requestRedraw();
        	if (!this._selectDragStart) {
				if (takeFocus !== false) {
					this.updateTextArea();
				}
        	}
		});
	}
	
	public dispose(){
		super.dispose();
		document.body.removeChild(this._textAreaDiv);
		this._textArea = null;
		this._textAreaDiv = null;
	}
    
    protected focused = false;
    protected cachedWidth = 0;
    protected cachedHeight = 0;
    protected nextCaretToggle = Date.now();

    protected updateCaret() {
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

	protected hasFocus() : boolean {
		return this._selectDragStart || (document.activeElement === this._textArea);
	}

	public static TYPE = "rich-text-edit";
	private static rBin = new RecyclableCreator<RichTextEdit>(function() {return new RichTextEdit()});
	public static create(options?:any) : RichTextEdit {
		return <RichTextEdit>RichTextEdit.rBin.create().reset(RichTextEdit.TYPE).set(options);
	}
};

WidgetFactory.register(RichTextEdit.TYPE, RichTextEdit.create);

