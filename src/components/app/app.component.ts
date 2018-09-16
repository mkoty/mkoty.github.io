import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

import {songs} from '../../constants/songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('400ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('400ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  songs = songs;
  contentLoaded = false;

  ngOnInit() {
    window.onload = () => {
      this.contentLoaded = true;
    };
  }
}

