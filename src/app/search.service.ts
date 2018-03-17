import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  documents=[];
  constructor(private _http:Http) { }
  checkMe:any;

 search(query){
    return this._http.get("",query)
      .map(()=>"");
  }

}