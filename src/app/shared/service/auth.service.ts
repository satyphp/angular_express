import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../class/apiurls';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpService: HttpService) { }

  userlogin(data){
   
    return this._httpService.post(API.userlogin, data);
  }
  userlogout(){
    return this._httpService.postToken(API.logout,true)
  }
}
