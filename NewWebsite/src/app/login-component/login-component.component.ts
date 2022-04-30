import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent  {

  
  show:boolean=false;
  buttonName:any='Show';
  change(){
    this.show =! this.show;
    if(this.show)

    this.buttonName = "Hide";

  else

    this.buttonName = "Show";

}

}
