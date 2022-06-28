import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../shared/Popup.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private shared: PopUpService, private auth: AuthService) {}

  isDisplay = false;
  ngOnInit(): void {}

  showLoginPopup() {
    this.shared.showLogIn();
  }

  showRegPopup() {
    this.shared.showReg();
  }

  toogleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  loggedInUser() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
