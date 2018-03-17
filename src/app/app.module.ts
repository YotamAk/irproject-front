import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { AdminComponent } from './main/admin/admin.component';
import { HelpmeComponent } from './main/helpme/helpme.component';

import { AdminService } from './admin.service';
import { SearchService } from './search.service';
import { NavbarComponent } from './main/navbar/navbar.component';
import { AddDocumentComponent } from './main/add-document/add-document.component';
import { LoginComponent } from './main/login/login.component';
import { TextComponent } from './main/text/text.component';
import { ResultComponent } from './main/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    AdminComponent,
    HelpmeComponent,
    NavbarComponent,
    AddDocumentComponent,
    LoginComponent,
    TextComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdminService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
