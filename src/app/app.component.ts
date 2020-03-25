import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project';
   user:User;
  constructor(){
this.user=new User();
this.user.name="Vijay";
this.user.designation="Software Engineer";
this.user.address="Mumbai";
this.user.phone=['123-456-654','789-496-895']
}

}
