import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/service/auth.service";
import{CheckAuthService} from "../../shared/service/check-auth.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private CheckAuthService: CheckAuthService, private _AuthService: AuthService, private _router: Router ) { }

  ngOnInit(): void {
  }
  logout(){
    // this._AuthService.userlogout().subscribe(res =>{
    //   let response = res;
    //   localStorage.clear();
    //    this._router.navigateByUrl('/login'); 
    // },(error =>{
    //   let errors = error.statusText;
    //   console.log(errors);
    // }))
    this.CheckAuthService.logout();

  }
}
