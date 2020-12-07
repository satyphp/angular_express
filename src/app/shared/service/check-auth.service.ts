import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

  constructor(private _router: Router) { }
  CheckAuth(): any{
    
    if(localStorage.getItem('token'))
    {
      
     return true;
    }else{
      return false;
    }
 }
 logout(){
 
   localStorage.removeItem('token');
   localStorage.removeItem('isLoggedIn');
   this._router.navigate(['/']);
 }
}
