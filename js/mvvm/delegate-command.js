"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DelegateCommand = (function () {
    function DelegateCommand(execute, canExecute) {
        this._execute = execute;
        this._canExecute = canExecute;
    }
    DelegateCommand.prototype.canExecute = function () {
        return this._canExecute ? this._canExecute() : true;
    };
    DelegateCommand.prototype.execute = function (args) {
        return this._execute(args);
    };
    DelegateCommand.create = function (execute, canExecute) {
        return new DelegateCommand(execute, canExecute);
    };
    return DelegateCommand;
}());
exports.DelegateCommand = DelegateCommand;
;
