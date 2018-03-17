import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Document } from '../../models/document';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(
      private _AdminService:AdminService,
      private router: Router
      ) { }

  documents:any;

  ngOnInit() {
  }

}
