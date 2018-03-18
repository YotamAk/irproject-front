import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Document } from '../../models/document';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query : string;
  soundex : boolean;
  buttonDisabled: boolean = true;

  constructor(
        private _AdminService:AdminService,
        private router: Router
      ) { }

    documents:any;

  ngOnInit() {

  }

  getSearch(){
    console.log(this.query);
     this._AdminService
        .getSearch(this.query, this.soundex)
        .subscribe(documents => {
          if(documents == "invalid query"){
            this.buttonDisabled = false;
            console.log(this.buttonDisabled);
          }
          this.documents = documents;
      } )
        this.buttonDisabled = true;
  }

  getAllDocuments(){
     this._AdminService
        .getAllDocuments()
        .subscribe(documents => {
          this.documents = documents;
              console.log(this.soundex);
      } )
  }

}
