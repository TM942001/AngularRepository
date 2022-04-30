import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewWebsite';
  num: any;


  show: boolean = false;
  buttonName: any = 'Show';
  change() {
    this.show = !this.show;
    if (this.show)

      this.buttonName = "Hide";

    else

      this.buttonName = "Show";

  }
  flag = true;

  userStatus = "old";
  Toggle() {
    this.flag = !this.flag;
    (this.flag == true ? this.userStatus = "old" : this.userStatus = "new")
  }



  fun(btn:any)
   {
     this.num=btn;
   };
   
  Login()
  {
    this.num=2;
  }
  
  Register()
   {
     this.num=3;
   }
  }
   
   


