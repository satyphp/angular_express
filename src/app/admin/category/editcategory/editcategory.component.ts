import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryserviceService } from '../../../shared/service/categoryservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  constructor(private _catservice: CategoryserviceService, private _router: Router, private _formBuilder: FormBuilder, private route: ActivatedRoute) { }
  status: any;
  submit: boolean = false;
  categoryForm: FormGroup;
  image: any;
  id: string;
  data: any;
  ngOnInit(): void {
    this.status = [
      { id: 0, name: "Disable" },
      { id: 1, name: "Enable" },

    ];
    this.categoryForm = this._formBuilder.group({
      categoryname: [null, [Validators.required, Validators.minLength(5)]],
      image:[],
      description: ['', Validators.required],
      status: ['0', Validators.required],
      metatitle: [],
      metatag: [],
      metadesc: [],
      _id: [null],
      imagename:[]
      
    });

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('this is',this.id);
       this._catservice.setcategory(this.id).subscribe(res=>{
        this.data=res;
       
        this.categoryForm.controls['categoryname'].setValue(this.data.category_name),
        this.categoryForm.controls['description'].setValue(this.data.description),
        this.categoryForm.controls['metatitle'].setValue(this.data.metatitle,{onlySelf: true}),
        this.categoryForm.controls['metatag'].setValue(this.data.metatag),
        this.categoryForm.controls['metadesc'].setValue(this.data.metadesc,{onlySelf: true}),
        this.categoryForm.controls['imagename'].setValue(this.data.image),

        this.categoryForm.controls['_id'].setValue(this.data._id),
        this.categoryForm.controls['status'].setValue(this.data.status, {onlySelf: true})
       },error=>{

       })

    });
  }
  selectimage(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  get f() { return this.categoryForm.controls; }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return false;
    } else {
      let data = new FormData();
      data.append('image', this.image);
      data.append('category_name', this.categoryForm.value.categoryname);
      data.append('description', this.categoryForm.value.description);
      data.append('metatitle', this.categoryForm.value.metatitle);
      data.append('metatag', this.categoryForm.value.metatag);
      data.append('metadesc', this.categoryForm.value.metadesc);
      data.append('status', this.categoryForm.value.status);
      data.append('_id', this.categoryForm.value._id);
      data.append('id', this.categoryForm.value._id);
      data.append('imagename', this.categoryForm.value.imagename);


      this._catservice.updatecategory(data).subscribe(data => {
        this._router.navigate(['/category']);

      }, error => {
        alert('Category error');
      })
    }
  }
}
