import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
showSignOut = 'false';

constructor(public authService: AuthService){}

  signOut(): void{
    console.log("signing out the user");
    
  };
}
