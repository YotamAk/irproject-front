import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Document } from '../../models/document';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
      private _AdminService:AdminService,
      private router: Router
      ) { }

    documents:any;

  ngOnInit() {
    this.getAllDocuments();
  }
  getAllDocuments(){
     this._AdminService
        .getAllDocuments()
        .subscribe(documents => {
          this.documents = documents;
      } )
  }
  
  noShow(id){
      this._AdminService
        .noShow(id)
        .subscribe((result) => {
          console.log(result);
      } )
  }

  parseAllDocuments(){
        this._AdminService
          .parseAllDocuments()
          .subscribe((sum) => {
          this.getAllDocuments();
          console.log(sum);
        } )
    }

}