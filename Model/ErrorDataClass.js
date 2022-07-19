"use strict";
exports.__esModule = true;
exports.ErrorDataClass = void 0;
var ErrorDataClass = /** @class */ (function () {
    function ErrorDataClass(mytransaction_id, my_error, timestamp) {
        this._mytransaction_id = mytransaction_id;
        this._my_error = my_error;
        this._timestamp = timestamp;
    }
    ErrorDataClass.prototype.set_mytransaction_id = function (mytrans) {
        this._mytransaction_id = mytrans;
    };
    ErrorDataClass.prototype.set_my_error = function (myError) {
        this._my_error = myError;
    };
    ErrorDataClass.prototype.set_timestamp = function (mytime) {
        this._timestamp = mytime;
    };
    ErrorDataClass.prototype.get_mytransaction_id = function () {
        return this._mytransaction_id;
    };
    ErrorDataClass.prototype.get_my_error = function () {
        return this._my_error;
    };
    ErrorDataClass.prototype.get_timestamp = function () {
        return this._timestamp;
    };
    return ErrorDataClass;
}());
exports.ErrorDataClass = ErrorDataClass;
