import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryserviceService } from '../../../shared/service/categoryservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private _Catservice: CategoryserviceService, private _router: Router, private _formBuilder: FormBuilder) { }
  status: any;
  submit: boolean = false;
  categoryForm: FormGroup;
  image: any;
  ngOnInit(): void {
    this.status = [
      { id: 0, name: "Disable" },
      { id: 1, name: "Enable" },

    ];

    this.categoryForm = this._formBuilder.group({
      categoryname: [null, [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
      description: ['', Validators.required],
      status: ['0', Validators.required],
      metatitle: [],
      metatag: [],
      metadesc: []

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

       
      
      this._Catservice.addCategory(data).subscribe(data => {
        this._router.navigate(['/category']);

      }, error => {
        alert('Category error');
      })
    }
  }

}
