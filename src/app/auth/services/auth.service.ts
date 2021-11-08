import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { UserService } from 'src/app/shared/services/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
redirectUrl: string;
  constructor(private userService: UserService, private httpClient: HttpClient) { }

  isLoggedIn() {
    if (localStorage.getItem('currentUserKey')) {
      console.log(' isLoggedIn() ----> TRUE');
      return true;
    }
    console.log(' isLoggedIn() ----> FALSE');
    return false;
  }
}
