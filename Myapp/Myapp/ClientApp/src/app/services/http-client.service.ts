import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//HttpClient

@Injectable()
export class HttpClientService {
  public Token: string;
  constructor(private http: HttpClient, token: string) {
    this.Token = token;
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'bearer  ' + this.Token);
  }

  get(url) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }
  delete(url, data) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}
