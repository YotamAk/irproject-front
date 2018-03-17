import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username : string;
password : string;
loginStatus = 'Yes';
  constructor(
      private router: Router
      ) { }

  ngOnInit() {
    this.loginStatus ='';
  }

  gotoAdmin(username, password){
      if(this.username=='admin' && this.password=='admin')
      {
            this.router.navigate(['/admin']);
      }
      else {
          {{`<p>fail</p>`}}
      }
       this.loginStatus='Try again..';
       console.log(this.loginStatus);
    }


}
