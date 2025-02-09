import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private readonly API_URL = 'https://server.mapach.es';

  constructor(private httpClient: HttpClient) {}

  getAPIStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status`, {
      observe: 'response',
    });
  }

  getSSHStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/ssh`, {
      observe: 'response',
    });
  }

  getPostgresStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/postgres`, {
      observe: 'response',
    });
  }

  getBlogAPIStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/blogAPI`, {
      observe: 'response',
    });
  }

  getYachtStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/yacht`, {
      observe: 'response',
    });
  }

  getEasyWGStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/easyWG`, {
      observe: 'response',
    });
  }

  getWebminStatus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/status/webmin`, {
      observe: 'response',
    });
  }
}
