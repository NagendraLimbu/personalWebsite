import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
const routes : Routes =[
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'serverApp'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {initialNavigation:'enabledBlocking'}),
    HttpClientModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
