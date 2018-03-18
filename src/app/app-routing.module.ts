import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { AdminComponent } from './main/admin/admin.component';
import { HelpmeComponent } from './main/helpme/helpme.component';
import { AddDocumentComponent } from './main/add-document/add-document.component';
import { LoginComponent } from './main/login/login.component';
import { ResultComponent } from './main/result/result.component';
import { TextComponent } from './main/text/text.component';




const routes: Routes = [

{path:"", redirectTo:"search", pathMatch:"full"},
{path:"main", component:MainComponent},
{path:"search", component:SearchComponent},
{path:"admin", component:AdminComponent},
{path:"helpme", component:HelpmeComponent},
{path:"add-document", component:AddDocumentComponent},
{path:"login", component:LoginComponent},
{path:"result", component:ResultComponent},
{path:"text/:id", component:TextComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
