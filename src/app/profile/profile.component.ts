import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
cvUrl: any
constructor(private profileService: ProfileService){

}
ngOnInit(){
  this.cvUrl=this.profileService.resumeurl;
}

}
