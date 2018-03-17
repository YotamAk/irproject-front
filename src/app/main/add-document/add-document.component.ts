import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Document } from '../../models/document';
import { DocToService } from '../../models/docToService';

import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  constructor(
     private AdminService: AdminService,
     private router: Router
           ) { }

  ngOnInit() {
  }

model = new DocToService();
text: string;

  addDocument(){
    {
      this.AdminService
        .addDocument(this.model, this.text)
        .subscribe((result) => {
          console.log(result);
          this.goBack()  
        });
    }
  }
   goBack(){
    this.router.navigate(['/admin']);
  }
}

