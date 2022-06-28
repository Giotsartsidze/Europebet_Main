import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  constructor() {}
  showLoginModal$ = new Subject<boolean>();
  showRegModal$ = new Subject<boolean>();
  showWelcomeBonusModal$ = new Subject<boolean>();

  showLogIn() {
    this.showLoginModal$.next(true);
  }

  closeLogIn() {
    this.showLoginModal$.next(false);
  }
  showReg() {
    this.showRegModal$.next(true);
  }

  closeReg() {
    this.showRegModal$.next(false);
  }

  showWelcome() {
    this.showWelcomeBonusModal$.next(true);
  }

  closeWelcome() {
    this.showWelcomeBonusModal$.next(false);
  }

  getLogInModalStatus() {
    return this.showLoginModal$.asObservable();
  }
  getRegInModalStatus() {
    return this.showRegModal$.asObservable();
  }
}
