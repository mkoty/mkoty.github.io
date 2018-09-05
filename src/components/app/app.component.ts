import { Component } from '@angular/core';
import { songs } from '../../constants/songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  songs = songs;
}

