import { FileClass } from "./FileClass";
import { ArgClass } from "./ArgClass";

class Parser{

    public Main(): void{

    var File_Name_Arg:string[] = [];
    let arg_obj = new ArgClass();   //Class for getting command line arg
    File_Name_Arg = arg_obj.ArgFunc();
    var Json_Array:string[] = [];   
    let File_Class_obj = new FileClass();                    
    if((File_Name_Arg[0].match("./app.log") || File_Name_Arg[0].match("app.log")) && (File_Name_Arg[1].match("./errors.json") || File_Name_Arg[1].match("errors.json")))
    {
        Json_Array = File_Class_obj.ReadFile(File_Name_Arg[0]);
        File_Class_obj.WriteFile(Json_Array,File_Name_Arg[1]);   // Write in File       
    }else{
        console.log("Wrong Input/Output File Name. Enter same command mentioned in document.");
    }
    

}
}

var P_Obj = new Parser();
P_Obj.Main(); // starting point of a file