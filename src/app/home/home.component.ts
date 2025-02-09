import { Component } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  progress = 0;
  serverProgress = '';
  serverStatusData = {
    ssh: '',
    postgres: '',
    blogapi: '',
    yacht: '',
    easywg: '',
    webmin: '',
  };
  serverProgressData = {
    ssh: '',
    postgres: '',
    blogapi: '',
    yacht: '',
    easywg: '',
    webmin: '',
  };
  serverLoading = {
    ssh: 0,
    postgres: 0,
    blogapi: 0,
    yacht: 0,
    easywg: 0,
    webmin: 0,
  };

  constructor(private statusService: StatusService) {}

  playSelectAudio() {
    const selectAudio = new Audio('assets/audio/select.mp3');
    selectAudio.play();
  }

  checkAPIStatus() {
    this.progress = 0;
    this.serverProgress = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.ssh = response.body.ssh.message;
        this.serverStatusData.postgres = response.body.postgres.message;
        this.serverStatusData.blogapi = response.body.blogAPI.message;
        this.serverStatusData.yacht = response.body.yacht.message;
        this.serverStatusData.easywg = response.body.easyWG.message;
        this.serverStatusData.webmin = response.body.webmin.message;

        this.progress = 100;
        this.serverProgress = 'Server is up and running!';
      } else {
        this.progress = 100;
        this.serverProgress = 'Server is down!';
      }
    });
  }

  checkSSHStatus() {
    this.serverLoading.ssh = 0;
    this.serverProgressData.ssh = 'Checking...';
    this.statusService.getSSHStatus().subscribe((response: any) => {
      this.serverStatusData.ssh = response.body.message;
      this.serverLoading.ssh = 100;
      this.serverProgressData.ssh = 'Server is up and running!';
    });
  }

  checkPostgresStatus() {
    this.serverLoading.postgres = 0;
    this.serverProgressData.postgres = 'Checking...';
    this.statusService.getPostgresStatus().subscribe((response: any) => {
      this.serverStatusData.postgres = response.body.message;
      this.serverLoading.postgres = 100;
      this.serverProgressData.postgres = 'Server is up and running!';
    });
  }

  checkBlogAPIStatus() {
    this.serverLoading.blogapi = 0;
    this.serverProgressData.blogapi = 'Checking...';
    this.statusService.getBlogAPIStatus().subscribe((response: any) => {
      this.serverStatusData.blogapi = response.body.message;
      this.serverLoading.blogapi = 100;
      this.serverProgressData.blogapi = 'Server is up and running!';
    });
  }

  checkYachtStatus() {
    this.serverLoading.yacht = 0;
    this.serverProgressData.yacht = 'Checking...';
    this.statusService.getYachtStatus().subscribe((response: any) => {
      this.serverStatusData.yacht = response.body.message;
      this.serverLoading.yacht = 100;
      this.serverProgressData.yacht = 'Server is up and running!';
    });
  }

  checkEasyWGStatus() {
    this.serverLoading.easywg = 0;
    this.serverProgressData.easywg = 'Checking...';
    this.statusService.getEasyWGStatus().subscribe((response: any) => {
      this.serverStatusData.easywg = response.body.message;
      this.serverLoading.easywg = 100;
      this.serverProgressData.easywg = 'Server is up and running!';
    });
  }

  checkWebminStatus() {
    this.serverLoading.webmin = 0;
    this.serverProgressData.webmin = 'Checking...';
    this.statusService.getWebminStatus().subscribe((response: any) => {
      this.serverStatusData.webmin = response.body.message;
      this.serverLoading.webmin = 100;
      this.serverProgressData.webmin = 'Server is up and running!';
    });
  }
}
