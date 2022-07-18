import {FileClass} from './FileClass';

it('File Class Method checking', () => {
    const cc = new FileClass();
   
    expect(cc).toBeDefined();

    var myinputname : string ="./app.log";
    
    expect(cc.ReadFile(myinputname)).toEqual(   // read this particular file. test fails when anyother file name given
        expect.arrayContaining([
          expect.objectContaining({loglevel: "error"}),
        ])
      );  

});