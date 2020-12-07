import { Component, OnInit } from '@angular/core';
import {BlogserviceService} from '../../shared/service/blogservice.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  apipath = environment.api_url;
  constructor( private _blogservice: BlogserviceService) { }
   data:any;
  ngOnInit(): void {
    this._blogservice.blog()
          .subscribe(
              res => {
                this.data=res;
              },
              error => {
                  alert(error);
                  return false;
              });
  }
  deleteBlog(id): void{
    let datapost = {};
    datapost['id'] = id
    this._blogservice.deleteBlog(datapost).subscribe(
      res => {
        this._blogservice.blog()
        .subscribe(
            res => {
              this.data=res;
            },
            error => {
                alert(error);
                return false;
            });
      },
      error => {
          alert(error);
          return false;
      }
    );
  }
}
