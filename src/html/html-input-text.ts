
import Events = require("../events");
import {HtmlEdit} from "./html-edit";

export class HtmlInputText extends HtmlEdit {
	constructor() {
		super();
		this.create("input");
		this.element.type = "text";
	}

	protected static _input : HtmlInputText;
	public static get input() : HtmlInputText {
		if(!HtmlInputText._input) {
			HtmlInputText._input = new HtmlInputText();
		}
		return HtmlInputText._input;
	}
};

