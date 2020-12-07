import { Component, OnInit } from '@angular/core';
import {CategoryserviceService} from '../../../shared/service/categoryservice.service';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  apipath = environment.api_url;
  displayedColumns: string[] = ['position', 'name', 'image', 'status','action'];
  dataSource :any;
  constructor(private _categoryService: CategoryserviceService,private _router: Router) { }

  ngOnInit(): void {
    this._categoryService.category()
    .subscribe(
        res => {
          console.log(res);
          this.dataSource=res;
        },
        error => {
            alert(error);
            return false;
        });
  }

  deletecategory(id:string){
    console.log('cc');
    let data = {};
    data['id'] = id;
    this._categoryService.deletecategory(data).subscribe(res => {
      this._categoryService.category()
    .subscribe(
        res => {
          console.log(res);
          this.dataSource=res;
        },
        error => {
            alert(error);
            return false;
        });
    },error =>{
      alert();
      return false;
    });
  }

}
