import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AdminService } from '../../admin.service';
import { Document } from '../../models/document';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(
    private _AdminService:AdminService,
    private router: Router,
    private route: ActivatedRoute) { }

  id = this.route.snapshot.params['id'];
  document:any;
  ngOnInit() {
      this.getDocumentByID(this.id);
  }

  getDocumentByID(id){
     this._AdminService
        .getDocumentByID(this.id)
        .subscribe(document => {
          this.document = document;
          console.log(document);
      } )
  }

}
