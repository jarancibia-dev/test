import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public key:string = '';
  public name:string = '';
  public keyAdmin:string = 'admin';
  public nameAdmin:string = 'admin';

  public keyUser:string = 'user';
  public nameUser:string = 'user';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  verifyAdmin(){
    if (this.key == this.keyAdmin && this.name == this.nameAdmin){
      console.log("Admin passed!");
      this.router.navigateByUrl('/admin');
    }else{
      console.log("Admint denied!");
    }
  }

  verifyUser(){
    if (this.key == this.keyUser && this.name == this.nameUser){
      console.log("User passed!");
      this.router.navigateByUrl('/user');
    }else{
      console.log("User denied!");
    }
  }
}
