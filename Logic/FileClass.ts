import { StringClass } from "./StringClass";
const fs = require('fs');

export class FileClass {

    public constructor() {
    }
  
    public ReadFile(myInputFile:string): string[] {
      var Json_Array:string[] = [];
      var file_array = fs.readFileSync(myInputFile).toString().split("\n");
      let i:any  = 0;
      for(i in file_array) {
      
          if(file_array[i].includes('- error -')){
            var StringClass_obj = new StringClass();
            var myObj = JSON.parse(StringClass_obj.StringRead(file_array[i]));
            Json_Array.push(myObj);
          } 
      } 
      return Json_Array;
    } 

    public WriteFile(arr_names:string[], myOutputFile:string): void {
      var myJSONString = JSON.stringify(arr_names);
      fs.writeFile(myOutputFile, myJSONString, 'utf8', function (err: any) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
    
  }

  } 