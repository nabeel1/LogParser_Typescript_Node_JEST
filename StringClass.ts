import { ErrorDataClass } from "./ErrorDataClass";

export class StringClass {

    public constructor() {
    }

    public StringRead(myString:string): string {
    
        let Error_Data_Obj = new ErrorDataClass("","",0);

        var ISO_Date = myString.substr(0, myString.indexOf(' '));
        
        const date = new Date(ISO_Date);
         var t: number = date.getTime();
         Error_Data_Obj.set_timestamp(t);

        var mytran_id : string = myString.substring(
            myString.indexOf("{") + 1, 
            myString.indexOf(",")
        );
        Error_Data_Obj.set_mytransaction_id(mytran_id);

        var myerr: string = myString.substring(
            myString.indexOf("\"err\""), 
            myString.indexOf("}")
        );
        Error_Data_Obj.set_my_error(myerr);

        t = Error_Data_Obj.get_timestamp();
        mytran_id = Error_Data_Obj.get_mytransaction_id();
        myerr = Error_Data_Obj.get_my_error();

       var save_string : string = "{" +"\"timestamp\":"+ t +",\"loglevel\":\"error\","+mytran_id+","+myerr+ "}";
    
        return save_string;
    }

}