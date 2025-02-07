import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  progress = 0;
  serverStatus = '';

  constructor(private httpClient: HttpClient) {}

  playSelectAudio() {
    const selectAudio = new Audio('assets/audio/select.mp3');
    selectAudio.play();
  }

  checkBlogAPIServer() {
    this.progress = 0;
    this.serverStatus = 'Checking...';
    this.httpClient
      .get('https://server.mapach.es', { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.progress = 100;
          this.serverStatus = 'Server is up and running!';
        } else {
          this.progress = 100;
          this.serverStatus = 'Server is down!';
        }
      });
  }
}
