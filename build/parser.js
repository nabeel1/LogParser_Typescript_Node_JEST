"use strict";
exports.__esModule = true;
exports.Main = void 0;
var FileClass_1 = require("../FileClass");
var ArgClass_1 = require("../ArgClass");
function Main() {
    var File_Name_Arg = [];
    var arg_obj = new ArgClass_1.ArgClass(); //Class for getting command line arg
    File_Name_Arg = arg_obj.ArgFunc();
    var Json_Array = [];
    var File_Class_obj = new FileClass_1.FileClass();
    if ((File_Name_Arg[0].match("./app.log") || File_Name_Arg[0].match("app.log")) && (File_Name_Arg[1].match("./errors.json") || File_Name_Arg[1].match("errors.json"))) {
        Json_Array = File_Class_obj.ReadFile(File_Name_Arg[0]);
        File_Class_obj.WriteFile(Json_Array, File_Name_Arg[1]); // Write in File       
    }
    else {
        console.log("Wrong Input/Output File Name. Enter same command mentioned in document.");
    }
}
exports.Main = Main;
Main(); // starting point of a file
