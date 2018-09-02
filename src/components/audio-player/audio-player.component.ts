import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @Input() track: String;
  @Input() trackCover: String;

  constructor() { }

  ngOnInit() {
  }

}
