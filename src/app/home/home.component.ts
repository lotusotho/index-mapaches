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
  serverStatusData: any = {
    ssh: '',
    postgres: '',
    blogapi: '',
    yacht: '',
    easywg: '',
    webmin: '',
  };
  serverLoading: any = {
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

  /* Function to check all servers at once */
  checkAPIStatus() {
    this.resetProgress();
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.updateServerStatus(response.body);
      } else {
        Object.keys(this.serverStatusData).forEach((key) => {
          this.serverStatusData[key] = 'Server is down!';
          this.serverLoading[key] = 100;
        });
      }
    });
  }

  private resetProgress() {
    Object.keys(this.serverLoading).forEach((key) => {
      this.serverLoading[key] = 0;
      this.serverStatusData[key] = 'Checking...';
    });
  }

  private updateServerStatus(statusData: any) {
    this.serverStatusData.ssh = statusData.ssh.message;
    this.serverStatusData.postgres = statusData.postgres.message;
    this.serverStatusData.blogapi = statusData.blogAPI.message;
    this.serverStatusData.yacht = statusData.yacht.message;
    this.serverStatusData.easywg = statusData.easyWG.message;
    this.serverStatusData.webmin = statusData.webmin.message;

    Object.keys(this.serverLoading).forEach((key) => {
      this.serverLoading[key] = 100;
    });
  }

  checkSSHStatus() {
    this.serverLoading.ssh = 0;
    this.serverStatusData.ssh = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.ssh = response.body.ssh.message;
      } else {
        this.serverStatusData.ssh = 'Server is down!';
      }
      this.serverLoading.ssh = 100;
    });
  }

  checkPostgresStatus() {
    this.serverLoading.postgres = 0;
    this.serverStatusData.postgres = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.postgres = response.body.postgres.message;
      } else {
        this.serverStatusData.postgres = 'Server is down!';
      }
      this.serverLoading.postgres = 100;
    });
  }

  checkBlogapiStatus() {
    this.serverLoading.blogapi = 0;
    this.serverStatusData.blogapi = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.blogapi = response.body.blogAPI.message;
      } else {
        this.serverStatusData.blogapi = 'Server is down!';
      }
      this.serverLoading.blogapi = 100;
    });
  }

  checkYachtStatus() {
    this.serverLoading.yacht = 0;
    this.serverStatusData.yacht = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.yacht = response.body.yacht.message;
      } else {
        this.serverStatusData.yacht = 'Server is down!';
      }
      this.serverLoading.yacht = 100;
    });
  }

  checkEasywgStatus() {
    this.serverLoading.easywg = 0;
    this.serverStatusData.easywg = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.easywg = response.body.easyWG.message;
      } else {
        this.serverStatusData.easywg = 'Server is down!';
      }
      this.serverLoading.easywg = 100;
    });
  }

  checkWebminStatus() {
    this.serverLoading.webmin = 0;
    this.serverStatusData.webmin = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.webmin = response.body.webmin.message;
      } else {
        this.serverStatusData.webmin = 'Server is down!';
      }
      this.serverLoading.webmin = 100;
    });
  }
}
