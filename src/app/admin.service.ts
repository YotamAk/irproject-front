import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  documents=[];
  constructor(private _http:Http) { }
  checkMe:any;
  ApiUrl :string = "http://localhost:3000"
 
  getAllDocuments(){
    return this._http.get(`${this.ApiUrl}/getAllDocuments`)  
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }

//delete document
   noShow(docId){
    return this._http.post(`${this.ApiUrl}/removeDocument`,{'id':docId})
      .map(()=>this.getAllDocuments());
  }

//add documnts to sourse lib
  addDocument(model,text){
    console.log(model);
    return this._http.post(`${this.ApiUrl}/addNewDocument`,{'docHeader':model, 'docText':text})
      .map(res => res);
  }

  parseAllDocuments(){
    return this._http.get(`${this.ApiUrl}/parseDocuments`)
      .map(res => res.json());
  }

getSearch(query,soundex){
    return this._http.get(`${this.ApiUrl}/getSearch/${query}/${soundex}`)
      .map(res => res.json());
  }

getDocumentByID(id){
    return this._http.get(`${this.ApiUrl}/getDocumentByID/${id}`)
      .map(res => res.json());
  }


}
