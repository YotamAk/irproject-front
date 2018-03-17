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
            document.getElementById("openModalButton").click();
            console.log("check");
          }
          this.documents = documents;
      } )
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
