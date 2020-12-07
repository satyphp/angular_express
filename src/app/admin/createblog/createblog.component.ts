import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {BlogserviceService} from '../../shared/service/blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
   
  constructor(private _blogservice:BlogserviceService,private _router: Router,private _formBuilder: FormBuilder) { }
  status: any;
  submit:boolean = false;
  blogForm: FormGroup;
  image: any;
  ngOnInit(): void {
    this.status = [
      { id: 0, name: "Disable" },
      { id: 1, name: "Enable" },
      
    ];
    this.blogForm = this._formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', Validators.required],
      status: ['0', Validators.required],
      
  }); 
  }
  selectimage(event){
     
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.image = file;
    }
  }
  get f() { return this.blogForm.controls; }
  onSubmit(){
    
    const stringified = JSON.stringify(this.blogForm.value.date);
    const dob = stringified.substring(1, 1);
     
    if(this.blogForm.invalid){
      return false;
    }else{
       let data= new FormData();
       data.append('image',this.image);
       data.append('title',this.blogForm.value.title);
       data.append('description',this.blogForm.value.description);
       data.append('author',this.blogForm.value.author);
       data.append('date',this.blogForm.value.date);
       data.append('status',this.blogForm.value.status);
       console.log(data);
       
       
      this._blogservice.blogposts(data)
          .subscribe(
              res => {
                this._router.navigate(['/blog']);
              },
              error => {
                  alert(error);
                  return false;
              });
    }
  }
}
