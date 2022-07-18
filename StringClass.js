"use strict";
exports.__esModule = true;
exports.StringClass = void 0;
var ErrorDataClass_1 = require("./ErrorDataClass");
var StringClass = /** @class */ (function () {
    function StringClass() {
    }
    StringClass.prototype.StringRead = function (myString) {
        var Error_Data_Obj = new ErrorDataClass_1.ErrorDataClass("", "", 0);
        var ISO_Date = myString.substr(0, myString.indexOf(' '));
        var date = new Date(ISO_Date);
        var t = date.getTime();
        Error_Data_Obj.set_timestamp(t);
        var mytran_id = myString.substring(myString.indexOf("{") + 1, myString.indexOf(","));
        Error_Data_Obj.set_mytransaction_id(mytran_id);
        var myerr = myString.substring(myString.indexOf("\"err\""), myString.indexOf("}"));
        Error_Data_Obj.set_my_error(myerr);
        t = Error_Data_Obj.get_timestamp();
        mytran_id = Error_Data_Obj.get_mytransaction_id();
        myerr = Error_Data_Obj.get_my_error();
        var save_string = "{" + "\"timestamp\":" + t + ",\"loglevel\":\"error\"," + mytran_id + "," + myerr + "}";
        return save_string;
    };
    return StringClass;
}());
exports.StringClass = StringClass;
