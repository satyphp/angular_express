import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(private _httpClient: HttpClient) { 
    
  }

   



 post(url, body, isAuthorized = false, headers = null) {
  this.headers = new HttpHeaders();
 
  if (headers == null) this._createDefaultHeaders();
  else this._createHeaders(headers);
  this.headers = new HttpHeaders().append("Content-Type", "application/json");
 
  return this._httpClient.post(url,body,{headers:this.headers});
}

 

postToken(url, body, isAuthorized = false, headers = null) {
  this.headers = new HttpHeaders();
  let token = localStorage.getItem('token');
  if (headers == null) this._createDefaultHeaders();
  else this._createHeaders(headers);
  this.headers = new HttpHeaders().append("Content-Type", "application/json");
  this.headers = new HttpHeaders().append('Authorization','Bearer ' +token);
  return this._httpClient.post(url,body,{headers:this.headers});
}

putToken(url, body, isAuthorized = false, headers = null) {
  this.headers = new HttpHeaders();
  let token = localStorage.getItem('token');
  if (headers == null) this._createDefaultHeaders();
  else this._createHeaders(headers);
  this.headers = new HttpHeaders().append("Content-Type", "application/json");
  this.headers = new HttpHeaders().append('Authorization','Bearer ' +token);
  return this._httpClient.post(url,body,{headers:this.headers});
}



getToken(url, body, isAuthorized = false, headers = null) {
  this.headers = new HttpHeaders();
  let token = localStorage.getItem('token');
  if (headers == null) this._createDefaultHeaders();
  else this._createHeaders(headers);
  this.headers = new HttpHeaders().append("Content-Type", "application/json");
  this.headers = new HttpHeaders().append('Authorization','Bearer ' +token);
  return this._httpClient.get(url,{headers:this.headers});
}



get(url, body, isAuthorized = false, headers = null) {
  this.headers = new HttpHeaders();
   
  if (headers == null) this._createDefaultHeaders();
  else this._createHeaders(headers);
  this.headers = new HttpHeaders().append("Content-Type", "application/json");
   
  return this._httpClient.get(url,{headers:this.headers});
}




_createDefaultHeaders() {
  
  this.headers.append('Content-Type', 'application/json');
 
}

_createHeaders(headers) {
  Object.keys(headers)
      .forEach((key) => {
          this.headers.append(key, headers[key]);
      });
}

 
}
