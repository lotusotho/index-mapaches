import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  serverCards: any[] = [];

  serverStatusData: any = {
    ssh: '',
    postgres: '',
    blogapi: '',
    yacht: '',
    easywg: '',
    webmin: '',
  };
  serverLoading: any = {
    all: 0,
    ssh: 0,
    postgres: 0,
    blogapi: 0,
    yacht: 0,
    easywg: 0,
    webmin: 0,
  };

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.loadServerCards();
  }

  playSelectAudio() {
    const selectAudio = new Audio('assets/audio/select.mp3');
    selectAudio.play();
  }

  handleCardCheck(key: string) {
    switch (key) {
      case 'all':
        this.checkAPIStatus();
        break;
      case 'ssh':
        this.checkSSHStatus();
        break;
      case 'postgres':
        this.checkPostgresStatus();
        break;
      case 'blogapi':
        this.checkBlogapiStatus();
        break;
      case 'yacht':
        this.checkYachtStatus();
        break;
      case 'easywg':
        this.checkEasywgStatus();
        break;
      case 'webmin':
        this.checkWebminStatus();
        break;
    }
  }

  loadServerCards() {
    this.statusService.getServerCards().subscribe((data: any) => {
      this.serverCards = data;
    });
  }

  checkAPIStatus() {
    this.resetProgress();
    Object.keys(this.serverStatusData).forEach((key) => {
      this.serverStatusData[key] = 'Checking...';
      this.serverLoading[key] = 0;
    });

    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.updateServerStatus(response.body);
        const allServicesGood = Object.keys(this.serverStatusData).every(
          (key) => this.serverStatusData[key] === 'Good'
        );
        if (allServicesGood) {
          this.serverStatusData.all = 'The whole server is up and running!';
        } else {
          this.serverStatusData.all = 'Server is down!';
        }
      } else {
        Object.keys(this.serverStatusData).forEach((key) => {
          this.serverStatusData[key] = 'Server is down!';
          this.serverLoading[key] = 100;
        });
        this.serverStatusData.all = 'Server is down!';
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
    this.serverStatusData.ssh =
      statusData.ssh.message === 'OK' ? 'Good' : 'Server is down!';
    this.serverStatusData.postgres =
      statusData.postgres.message === 'OK' ? 'Good' : 'Server is down!';
    this.serverStatusData.blogapi =
      statusData.blogAPI.message === 'OK' ? 'Good' : 'Server is down!';
    this.serverStatusData.yacht =
      statusData.yacht.message === 'OK' ? 'Good' : 'Server is down!';
    this.serverStatusData.easywg =
      statusData.easyWG.message === 'OK' ? 'Good' : 'Server is down!';
    this.serverStatusData.webmin =
      statusData.webmin.message === 'OK' ? 'Good' : 'Server is down!';

    Object.keys(this.serverLoading).forEach((key) => {
      this.serverLoading[key] = 100;
    });
  }

  checkSSHStatus() {
    this.serverLoading.ssh = 0;
    this.serverStatusData.ssh = 'Checking...';
    this.statusService.getAPIStatus().subscribe((response: any) => {
      if (response.status === 200) {
        this.serverStatusData.ssh =
          response.body.ssh.message === 'OK' ? 'Good' : 'Server is down!';
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
        this.serverStatusData.postgres =
          response.body.postgres.message === 'OK' ? 'Good' : 'Server is down!';
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
        this.serverStatusData.blogapi =
          response.body.blogAPI.message === 'OK' ? 'Good' : 'Server is down!';
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
        this.serverStatusData.yacht =
          response.body.yacht.message === 'OK' ? 'Good' : 'Server is down!';
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
        this.serverStatusData.easywg =
          response.body.easyWG.message === 'OK' ? 'Good' : 'Server is down!';
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
        this.serverStatusData.webmin =
          response.body.webmin.message === 'OK' ? 'Good' : 'Server is down!';
      } else {
        this.serverStatusData.webmin = 'Server is down!';
      }
      this.serverLoading.webmin = 100;
    });
  }
}
