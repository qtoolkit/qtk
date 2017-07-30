import {BindingCommandSource, BindingDataSource, IBindingSource, BindingRuleItem} from "../mvvm/binding-rule"
import {BindingMode, UpdateTiming} from "../mvvm/iview-model"

enum ParseState {
    NONE,
    FIRST_KEY,
    FIRST_VALUE,
    KEY,
    VALUE
}

enum LexState {
    IN = 1,
    IN_STRING = 2,
    OUT = 3
}

export class RuleParser {
    constructor() {
    }

    public parse(str:string, type:string, first_key:string) : void {
        this.type = type;
        this.first_key = first_key;
        this.parse_state = ParseState.NONE;

        var i = 0;
        var start = 0;
        var n = str.length;
        var delim = " ";
        var ctokens = ",{}=";
        var state : number = 0;
        
        state = LexState.OUT;
        this.key = "";
        this.value = "";

        for(i = 0; i < n; i++) {
            var c = str[i];
            if(c == '\"' && (state == LexState.IN_STRING || state == LexState.OUT)) {
                if(state == LexState.IN_STRING) {
                    if(str[i-1] != '\\') {
                        this.onToken(str.substr(start, i-start+1));
                        state = LexState.OUT;
                    }
                }else{
                    start = i;
                    state = LexState.IN_STRING;
                }
            }else if(ctokens.indexOf(c) >= 0) {
                if(state == LexState.IN) {
                    this.onToken(str.substr(start, i-start));
                }
                this.onToken(str.substr(i, 1));
            
                state = LexState.OUT;
            }else if(delim.indexOf(c) >= 0) {
                if(state == LexState.IN) {
                    this.onToken(str.substr(start, i-start));
                    state = LexState.OUT;
                }
            }else{
                if(state == LexState.OUT) {
                    start = i;
                    state = LexState.IN;
                }
            }
        }
        
        if(state == LexState.IN) {
            this.onToken(str.substr(start, i-start));
        }
    }

    public flushKeyValue() : boolean {
        this.onKeyValue(this.key.toLowerCase(), this.value);
        this.key = "";
        this.value = "";

        return false;
    }

    public onKeyValue(key:string, value:string) : boolean {
        return false;
    }

    public onToken(token:string) : boolean {
        if(token == "{") {
            return true;
        }
    
        if(token == "}") {
            this.flushKeyValue();
            return true;
        }

        switch(this.parse_state) {
            case ParseState.NONE: {
                if(token.toLowerCase() == this.type.toLowerCase()) {
                    this.parse_state = ParseState.FIRST_KEY;
                }else{
                    this.parse_state = ParseState.FIRST_KEY;
                    this.onToken(token);
                }
                break;
            }
            case ParseState.FIRST_KEY: {
                this.key = this.first_key;
                if(token.toLowerCase() == this.first_key.toLowerCase()) {
                    this.parse_state = ParseState.KEY;
                    this.onToken(token);
                }else{
                    this.value = token;
                    this.parse_state = ParseState.VALUE;
                }
                break;
            }
            case ParseState.KEY: {
                 if(token == "=") {
                     this.parse_state = ParseState.VALUE;
                 }else if(token == "," && this.key.toLowerCase() == this.first_key.toLowerCase()){
                    this.value = this.key;
                    this.flushKeyValue();
                    this.parse_state = ParseState.KEY;
                 }else{
                     this.key = token;
                     this.parse_state = ParseState.KEY;
                 }
                 break;
            }
            case ParseState.VALUE : {
                if(token == ",") {
                    this.flushKeyValue();
                    this.parse_state = ParseState.KEY;
                }else {
                    this.value += token;
                }
                break;
            }
        }

        return false;
    }

    protected type  : string;
    protected key   : string;
    protected value : string;
    protected first_key : string;
    protected parse_state : number; 
}

const STR_ASSIGN             = "=";
const STR_BINDING            = "Binding".toLowerCase();
const STR_MODE               = "Mode".toLowerCase();
const STR_PATH               = "Path".toLowerCase();
const STR_CONVERTER          = "Converter".toLowerCase();
const STR_VALIDATOR          = "Validator".toLowerCase();
const STR_TRIGGER            = "Trigger".toLowerCase();
const STR_ONCE               = "Once".toLowerCase();
const STR_TWO_WAY            = "TwoWay".toLowerCase();
const STR_ONE_WAY            = "OneWay".toLowerCase();
const STR_ONE_WAY_TO_MODEL   = "OneWayToModel".toLowerCase();
const STR_CHANGED            = "Changed".toLowerCase();
const STR_CHANGING           = "Changing".toLowerCase();
const STR_EXPLICIT           = "Explicit".toLowerCase();

export class DataRuleParser extends RuleParser {
    constructor() {
        super();
    }

    public onKeyValue(key:string, value:string) : boolean {
        var db = <BindingDataSource>this.source;

        if(key == STR_PATH) {
            if(value.length == 0 && db.path.length == 0) { 
                db.path = key;
            }else{
                db.path = value;
            }
        }else if(key == STR_MODE) {
            if(value == STR_TWO_WAY) {
                db.mode = BindingMode.TWO_WAY;
            }else if(value == STR_ONE_WAY) {
                db.mode = BindingMode.ONE_WAY;
            }else if(value == STR_ONE_WAY) {
                db.mode = BindingMode.ONCE;
            }else if(value == STR_ONE_WAY_TO_MODEL) {
                db.mode = BindingMode.ONE_WAY_TO_SOURCE;
            }
        }else if(key == STR_CONVERTER) {
            db.converter = value;
        }else if(key == STR_VALIDATOR) {
            db.validator = value;
        }else if(key == STR_TRIGGER) {
            if(value == STR_CHANGED) {
                db.updateTiming = UpdateTiming.CHANGED;
            }else if(value == STR_CHANGING) {
                db.updateTiming = UpdateTiming.CHANGING;
            }else{
                db.updateTiming = UpdateTiming.EXPLICIT;
            }
        }else{
            var a = <any>db;
            a[key] = value;
        }

        return true;
    }

    public static parseOne(str:string) : BindingDataSource {
        var parser = new DataRuleParser();

        parser.source = new BindingDataSource("");
        parser.parse(str, "Data", "Path");

        return parser.source;
    }

    public source : BindingDataSource;
}

const STR_COMMAND      = "Command".toLowerCase();
const STR_NAME         = "Name".toLowerCase();
const STR_ARGS         = "Args".toLowerCase();
const STR_CLOSE_WINDOW = "CloseWindow".toLowerCase();
const STR_UPDATE_MODEL = "UpdateModel".toLowerCase();
const STR_TRIGGERS     = "Triggers".toLowerCase();

export class CommandRuleParser extends RuleParser {
    constructor() {
        super();
    }

    public onKeyValue(key:string, value:string) : boolean {
        var cb = this.source;
        if(key == STR_NAME) {
            cb.command = value;
        }else if((key == STR_ARGS)) {
            cb.commandArgs = value;
        }else if((key == STR_CLOSE_WINDOW)) {
            cb.closeWindow = true;
        }else if((key == STR_UPDATE_MODEL)) {
            cb.updateModel = true;
        }

        return true;
    }

    public static parseOne(str:string) : BindingCommandSource {
        var parser = new CommandRuleParser();

        parser.source = new BindingCommandSource("");
        parser.parse(str, "Command", "Name");

        return parser.source;
    }

    public source : BindingCommandSource;
}
