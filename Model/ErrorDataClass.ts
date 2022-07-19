
export class ErrorDataClass {
    
    private _mytransaction_id: string;
    private _my_error: string;
    private _timestamp: number;

    public constructor(mytransaction_id:string, my_error:string, timestamp: number) {
        this._mytransaction_id = mytransaction_id;
        this._my_error = my_error;
        this._timestamp = timestamp;
    }

    public set_mytransaction_id(mytrans: string): void {
        this._mytransaction_id = mytrans;
      }

      public set_my_error(myError: string): void {
        this._my_error = myError;
      }

      public set_timestamp(mytime: number): void {
        this._timestamp = mytime;
      }

    public get_mytransaction_id(): string {
        return this._mytransaction_id;
      }

      public get_my_error(): string {
        return this._my_error;
      }

      public get_timestamp(): number {
        return this._timestamp;
      }

}