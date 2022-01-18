import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router,
              private cognitoService: CognitoService) {
  }

  public isAuthenticated(): boolean {
    return this.cognitoService.isAuthenticated();
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }

}
