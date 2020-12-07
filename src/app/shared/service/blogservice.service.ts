import { Injectable } from '@angular/core';
import { API } from '../class/apiurls';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor(private _httpService: HttpService) { }

  blogposts(data) {
    return this._httpService.postToken(API.blogpost, data);
  }
  blog() {
    return this._httpService.getToken(API.blog,true);
  }
  deleteBlog(data) {
    return this._httpService.postToken(API.deleteblog, data);
  }
  setblog(data) {
    return this._httpService.getToken(API.setblog(data), true);
  } 
  updateblog(data) {
    return this._httpService.postToken(API.updateblog, data);
  }
}
