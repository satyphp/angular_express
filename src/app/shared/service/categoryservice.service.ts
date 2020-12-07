import { Injectable } from '@angular/core';
import { API } from '../class/apiurls';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private _httpService: HttpService) { }
  category() {
    return this._httpService.getToken(API.category,true);
  }
  deletecategory(data) {
    return this._httpService.postToken(API.deletecategory, data);
  }

  addCategory(data) {
    return this._httpService.postToken(API.addCategory, data);
  }

  setcategory(data) {
      
     return this._httpService.getToken(API.editcategory(data), true);
  }
  updatecategory(data) {
    return this._httpService.postToken(API.updatecategory, data);
  }
  
}
