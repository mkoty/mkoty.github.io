import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {songs} from '../../constants/songs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('900ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('900ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  songs = songs;
  loadedImages = 0;
  ownImagesOnPage = 3;
  timeInSeconds = 0;
  showWaitSpinner = true;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.waitSpinnerTimer();
  }

  waitSpinnerTimer() {
    setTimeout(() => {
      this.timeInSeconds++;
      if (this.timeInSeconds < 3) {
        this.waitSpinnerTimer();
      } else {
        this.showWaitSpinner = false;
      }
    }, 1000);
  }

  onImageLoad() {
    this.loadedImages++;
  }
}

