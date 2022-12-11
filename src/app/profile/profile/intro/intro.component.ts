import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.cvUrl =  this.profileService.resumeurl
  }
}
