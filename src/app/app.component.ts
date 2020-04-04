import { Component, Input, OnInit } from '@angular/core';
import { Track, MatAdvancedAudioPlayerComponent } from 'ngx-audio-player';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  playlist = [
    {
      title: 'Tha Kar ke',
      link: 'https://funksyou.com/fileDownload/Songs/128/13080.mp3'
    },
    {
      title: 'Golmal',
      link: 'https://funksyou.com/fileDownload/Songs/128/13091.mp3'
    }
  ];
  
}
