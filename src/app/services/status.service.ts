import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private httpClient: HttpClient) {}

  getAPIStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status', {
      observe: 'response',
    });
  }

  getSSHStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status/ssh', {
      observe: 'response',
    });
  }

  getPostgresStatus(): Observable<any> {
    return this.httpClient.get(
      'https://server.mapach.es:4000/status/postgres',
      { observe: 'response' }
    );
  }

  getBlogAPIStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status/blogAPI', {
      observe: 'response',
    });
  }

  getYachtStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status/yacht', {
      observe: 'response',
    });
  }

  getEasyWGStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status/easyWG', {
      observe: 'response',
    });
  }

  getWebminStatus(): Observable<any> {
    return this.httpClient.get('https://server.mapach.es:4000/status/webmin', {
      observe: 'response',
    });
  }
}
