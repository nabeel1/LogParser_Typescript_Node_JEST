var program = require('commander');
 export class ArgClass {

    public ArgFunc(): string[] {
        var File_Arg_Array:string[] = [];

        // Getting attribute from command line using commander module
        program
          .option('-d, --debug', 'output extra debugging')
          .option('-s, --input <input>', 'Input file Name')
          .option('-p, --output <output>', 'Outputfile Name');
        
        program.parse(process.argv);
        
        const options: any = program.opts();
        if (options.debug) console.log(options);
        
        if (options.input)
            {
                File_Arg_Array[0] = options.input;
            }
            if (options.output) 
            {
                File_Arg_Array[1] = options.output;
            }

           return File_Arg_Array;

    }

}
