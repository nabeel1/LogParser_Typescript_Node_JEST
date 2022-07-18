"use strict";
exports.__esModule = true;
exports.FileClass = void 0;
var StringClass_1 = require("./StringClass");
var fs = require('fs');
var FileClass = /** @class */ (function () {
    function FileClass() {
    }
    FileClass.prototype.ReadFile = function (myInputFile) {
        var Json_Array = [];
        var file_array = fs.readFileSync(myInputFile).toString().split("\n");
        var i = 0;
        for (i in file_array) {
            if (file_array[i].includes('- error -')) {
                var StringClass_obj = new StringClass_1.StringClass();
                var myObj = JSON.parse(StringClass_obj.StringRead(file_array[i]));
                Json_Array.push(myObj);
            }
        }
        return Json_Array;
    };
    FileClass.prototype.WriteFile = function (arr_names, myOutputFile) {
        var myJSONString = JSON.stringify(arr_names);
        fs.writeFile(myOutputFile, myJSONString, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        });
    };
    return FileClass;
}());
exports.FileClass = FileClass;
