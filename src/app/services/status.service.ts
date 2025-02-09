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
}
