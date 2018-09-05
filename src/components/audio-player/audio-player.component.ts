import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AudioPlayerComponent implements OnInit {

  @Input() songs: String;

  constructor() {
  }

  ngOnInit() {
  }

}
