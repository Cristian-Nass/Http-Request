import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetComponent } from './get/get.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'get', component: GetComponent},
  { path: 'post', component: PostComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
