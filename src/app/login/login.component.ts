import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../shared/service/auth.service";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _AuthService: AuthService
    
  ) { }
   
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  }); 
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }else{
      let data = this.loginForm.value;
      let datapost = {};
      datapost['email'] = data['username'];
      datapost['password'] = data['password'];
      this._AuthService.userlogin(datapost)
          .subscribe(
              res => {
                //console.log('xxxxxx',res['token']);
                localStorage.setItem("token",res['token']);
                 localStorage.setItem('isLoggedIn', "true");  
                this.router.navigate(['/dashboard']);
              },
              error => {
                  alert(error);
                  return false;
              });
    }
    
 }
  
}
