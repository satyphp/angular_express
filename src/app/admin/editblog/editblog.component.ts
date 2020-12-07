import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {BlogserviceService} from '../../shared/service/blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  constructor(private _blogservice:BlogserviceService,private _router: Router,private _formBuilder: FormBuilder,private route:ActivatedRoute) { }
  status: any;
  submit:boolean = false;
  blogForm: FormGroup;
  id:string;
  data:any;
  image: any;
  selectimage(event){
     
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.image = file;
    }else{
      this.image = '';
    }
  }
  ngOnInit(): void {
    this.status = [
      { id: 0, name: "Disable" },
      { id: 1, name: "Enable" },
      
    ];
    this.blogForm = this._formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      image: [''],
      description: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', Validators.required],
      status: ['0', Validators.required],
      imagename: [],
      _id:[null]
      
  }); 
  
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this._blogservice.setblog(this.id)
    .subscribe(
        res => {
          this.data=res;
          this.blogForm.controls['status'].setValue(this.data.status, {onlySelf: true}),

          this.blogForm.controls['title'].setValue(this.data.title, {onlySelf: true}),

          this.blogForm.controls['description'].setValue(this.data.description, {onlySelf: true}),
          this.blogForm.controls['author'].setValue(this.data.author, {onlySelf: true}),
          this.blogForm.controls['date'].setValue(this.data.date, {onlySelf: true})
          this.blogForm.controls['date'].setValue(this.data.date),
          this.blogForm.controls['imagename'].setValue(this.data.image)
          this.blogForm.controls['_id'].setValue(this.data._id)
          
        },
        error => {
            alert(error);
            return false;
        });
     
  });
   
  }
  get f() { return this.blogForm.controls; }
  onSubmit(){
    console.log(this.blogForm.invalid);
    if(this.blogForm.invalid){
      
    }else{ 
      let formdata= new FormData();
      formdata.append('image',this.image);
      formdata.append('title',this.blogForm.value.title);
      formdata.append('description',this.blogForm.value.description);
      formdata.append('author',this.blogForm.value.author);
      formdata.append('date',this.blogForm.value.date);
      formdata.append('status',this.blogForm.value.status);
      formdata.append('imagename',this.blogForm.value.imagename);
      formdata.append('id',this.blogForm.value._id);
      console.log(formdata); 
      this._blogservice.updateblog(formdata)
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