"use strict";
exports.__esModule = true;
exports.ArgClass = void 0;
var program = require('commander');
var ArgClass = /** @class */ (function () {
    function ArgClass() {
    }
    ArgClass.prototype.ArgFunc = function () {
        var File_Arg_Array = [];
        // Getting attribute from command line using commander module
        program
            .option('-d, --debug', 'output extra debugging')
            .option('-s, --input <input>', 'Input file Name')
            .option('-p, --output <output>', 'Outputfile Name');
        program.parse(process.argv);
        var options = program.opts();
        if (options.debug)
            console.log(options);
        if (options.input) {
            File_Arg_Array[0] = options.input;
        }
        if (options.output) {
            File_Arg_Array[1] = options.output;
        }
        return File_Arg_Array;
    };
    return ArgClass;
}());
exports.ArgClass = ArgClass;
